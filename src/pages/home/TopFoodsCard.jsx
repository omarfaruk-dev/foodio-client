import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaHeart, FaRegHeart, FaStar, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";
import useAuth from '../../hooks/useAuth';
import { useAddToWishlistMutation } from '../../store/api/wishlistApi';
import Swal from 'sweetalert2';

const TopFoodsCard = ({ food }) => {
  const { user } = useAuth();
  const [addToWishlist, { isLoading: isAddingToWishlist }] = useAddToWishlistMutation();
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to add items to wishlist!",
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }

    if (food.user_email === user.email) {
      Swal.fire({
        icon: "warning",
        title: "Cannot Add Your Own Food",
        text: "You cannot add your own food to wishlist!",
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }

    const wishlistData = {
      foodId: food._id,
      food_name: food.food_name,
      food_img: food.food_img,
      price: food.price,
      food_origin: food.food_origin,
      food_category: food.food_category,
    };

    addToWishlist({ email: user.email, foodData: wishlistData })
      .unwrap()
      .then((res) => {
        if (res.insertedId) {
          setIsInWishlist(true);
          Swal.fire({
            icon: "success",
            title: "Added to Wishlist!",
            text: `${food.food_name} has been added to your wishlist.`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch((error) => {
        if (error?.data?.message === "Food already in wishlist") {
          Swal.fire({
            icon: "info",
            title: "Already in Wishlist",
            text: "This food is already in your wishlist!",
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to add to wishlist. Please try again.",
            showConfirmButton: false,
            timer: 2000
          });
        }
      });
  };
  return (
    <Fade duration={1000}>
      <div className="card bg-gradient-to-br from-secondary/10 via-base-100 to-primary/5 shadow-md hover:shadow-lg hover:-translate-y-2 duration-700 transition-all flex flex-col h-full group border border-secondary/20 rounded-2xl overflow-hidden">
        <figure className="relative">
          <img
            src={food.food_img}
            alt={food.food_name}
            className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 ease-in-out hover:scale-105 rounded-t-2xl"
          />
          <div className="absolute top-2 right-2 bg-secondary text-base-100 text-xs px-3 py-1 rounded-full shadow font-semibold">
            {food.food_origin}
          </div>
          <button
            className="absolute top-2 left-2 bg-white text-error p-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-secondary/50 transition z-10"
            onClick={handleAddToWishlist}
            disabled={isAddingToWishlist}
            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
            type="button"
          >
            {isInWishlist ? (
              <FaHeart className="text-error text-lg" />
            ) : (
              <FaRegHeart className="text-error text-lg" />
            )}
          </button>
        </figure>
        <div className="card-body flex flex-col flex-1 p-5">
          <div className="flex items-center justify-between mb-1">
            <h3 className="card-title text-xl font-bold text-primary drop-shadow">
              {food.food_name}
            </h3>
            <span className="inline-flex items-center gap-1 text-secondary py-1  font-bold text-base md:text-xl">
              ${food.price}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {Array.isArray(food.food_category)
              ? food.food_category.map((cat) => (
                  <span
                    key={cat}
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary/5 text-secondary border border-secondary/20"
                  >
                    {cat}
                  </span>
                ))
              : food.food_category && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary/5 text-secondary border border-secondary/20">
                    {food.food_category}
                  </span>
                )}
          </div>
          <p className="text-xs md:text-sm text-accent line-clamp-3 mb-3 italic">
            {food.details}
          </p>
         
          <div className="mt-3">
            <Link
              to={`/item-details/${food._id}`}
              className="btn btn-secondary btn-sm lg:btn-md w-full font-semibold text-white rounded-3xl shadow hover:scale-102 transition-transform duration-200"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default TopFoodsCard;
