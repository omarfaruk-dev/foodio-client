import React from "react";
import useAuth from "../../hooks/useAuth";
import { useGetWishlistQuery, useRemoveFromWishlistMutation } from "../../store/api/wishlistApi";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import notFoundLottie from '../../assets/lotties/food-not-found.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { MdDeleteForever } from "react-icons/md";

// Skeleton Loading Component
const WishlistSkeleton = () => {
  const SkeletonCard = () => (
    <div className="card bg-base-100 border border-secondary/20 shadow-md flex flex-col h-full rounded-2xl overflow-hidden">
      <div className="relative">
        <Skeleton height={192} containerClassName="block" />
      </div>
      <div className="card-body p-4">
        <div className="flex items-center justify-between mb-2">
          <Skeleton width="70%" height={24} />
          <Skeleton width={50} height={20} />
        </div>
        <Skeleton count={2} className="mb-2" />
        <div className="flex gap-2 mt-auto">
          <Skeleton height={36} className="flex-1 rounded-3xl" />
          <Skeleton height={36} width={40} className="rounded-3xl" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mt-16 min-h-[calc(100vh-300px)] mx-auto px-4 py-8 md:py-16 lg:py-20">
      <Fade>
        <h2 className="text-center text-2xl text-primary md:text-3xl font-bold mb-10">
          My <span className="text-secondary">Wishlist</span> ❤️
        </h2>
      </Fade>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {[...Array(8)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
};

const Wishlist = () => {
  const { user } = useAuth();
  
  // RTK Query - Get wishlist
  const { data: wishlistItems = [], isLoading } = useGetWishlistQuery(user?.email, {
    skip: !user?.email,
  });
  
  // RTK Query - Remove from wishlist
  const [removeFromWishlist, { isLoading: isRemoving }] = useRemoveFromWishlistMutation();

  const handleRemove = (wishlistItemId, foodName) => {
    Swal.fire({
      title: "Remove from Wishlist?",
      text: `Remove "${foodName}" from your wishlist?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!"
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromWishlist({ id: wishlistItemId, email: user.email })
          .unwrap()
          .then((res) => {
            if (res.deletedCount) {
              Swal.fire({
                title: "Removed!",
                text: "Food has been removed from wishlist.",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
              });
            }
          })
          .catch((error) => {
            console.error("Error removing from wishlist:", error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error?.data?.message || 'Something went wrong!',
            });
          });
      }
    });
  };

  // Show skeleton while loading
  if (isLoading) {
    return <WishlistSkeleton />;
  }

  return (
    <div className="max-w-7xl mt-16 min-h-[calc(100vh-300px)] mx-auto px-4 py-8 md:py-16 lg:py-20">
      <Fade>
        <h2 className="text-center text-2xl text-primary md:text-3xl font-bold mb-10">
          My <span className="text-secondary">Wishlist</span> ❤️
        </h2>
      </Fade>

      {wishlistItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <Lottie animationData={notFoundLottie} className="w-50 h-50"></Lottie>
          <h3 className="text-2xl md:text-3xl font-bold text-secondary/60 mt-8 mb-2 text-center">
            Your Wishlist is Empty
          </h3>
          <p className="text-accent text-lg mb-6 text-center max-w-md">
            Start adding your favorite foods to your wishlist!
          </p>
          <Link to="/all-foods" className="btn btn-secondary rounded-3xl px-8">
            Browse Foods
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {wishlistItems.map((item) => {
            const food = item.food_info;
            if (!food) return null;
            
            return (
              <div key={item._id} className="card bg-base-100 border border-secondary/20 shadow-md hover:shadow-lg hover:-translate-y-2 duration-700 transition-all flex flex-col h-full group rounded-2xl overflow-hidden">
                <figure className="relative">
                  <img
                    src={food.food_img}
                    alt={food.food_name}
                    className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  {/* Remove from wishlist button - top left */}
                  <button
                    onClick={() => handleRemove(item._id, food.food_name)}
                    disabled={isRemoving}
                    className="absolute top-2 left-2 bg-white text-error p-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-secondary/50 transition z-10 hover:bg-error hover:text-white disabled:opacity-50"
                    title="Remove from wishlist"
                  >
                    <MdDeleteForever className="text-lg" />
                  </button>
                  {/* Food origin badge - top right */}
                  <div className="absolute top-2 right-2 bg-secondary text-base-100 text-xs px-3 py-1 rounded-full shadow font-semibold">
                    {food.food_origin}
                  </div>
                  {/* Stats badges - bottom */}
                  <div className="absolute bottom-2 left-0 w-full flex items-center justify-between px-4 pointer-events-none">
                    <span className="bg-secondary/90 text-white text-xs px-4 py-1 rounded-full shadow font-semibold flex items-center gap-1 opacity-90">
                      Sold: <span className="font-bold">{food.purchase_count || 0}</span>
                    </span>
                    <span className="bg-amber-400/90 text-white text-xs px-4 py-1 rounded-full shadow font-semibold flex items-center gap-1 opacity-90">
                      Left: <span className="font-bold">{food.quantity}</span>
                    </span>
                  </div>
                </figure>
                <div className="card-body flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="card-title text-lg md:text-xl font-bold text-primary">{food.food_name}</h3>
                    <span className="text-secondary font-bold text-sm md:text-base">${food.price}</span>
                  </div>
                  <p className="text-xs md:text-sm text-primary line-clamp-2">{(food.details || '').slice(0, 65)}{food.details && food.details.length > 65 ? '...' : ''}</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {Array.isArray(food.food_category)
                      ? food.food_category.map((cat) => (
                        <span key={cat} className="badge bg-secondary/20 rounded-3xl text-xs">{cat}</span>
                      ))
                      : food.food_category && <span className="badge bg-secondary/20 rounded-3xl text-xs">{food.food_category}</span>
                    }
                  </div>
                  <div className="mt-auto pt-2">
                    <Link to={`/item-details/${food._id}`} className="btn btn-secondary btn-sm w-full font-semibold text-white rounded-3xl">
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Wishlist;


