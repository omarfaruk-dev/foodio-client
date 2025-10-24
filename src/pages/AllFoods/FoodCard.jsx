import { Link } from 'react-router';
import { FaHeart } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useAddToWishlistMutation } from '../../store/api/wishlistApi';
import Swal from 'sweetalert2';

const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const [addToWishlist, { isLoading: isAddingToWishlist }] = useAddToWishlistMutation();

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

        if (item.user_email === user.email) {
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
            foodId: item._id,
            food_name: item.food_name,
            food_img: item.food_img,
            price: item.price,
            food_origin: item.food_origin,
            food_category: item.food_category,
        };

        addToWishlist({ email: user.email, foodData: wishlistData })
            .unwrap()
            .then((res) => {
                if (res.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Added to Wishlist!",
                        text: `${item.food_name} has been added to your wishlist.`,
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
        <div className="card bg-base-100 border border-secondary/20 shadow-md hover:shadow-lg flex flex-col h-full group hover:-translate-y-2 duration-700 transition-all">
            <figure className="relative">
                <img
                    src={item.food_img}
                    alt={item.food_name}
                    className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-secondary text-base-100 text-xs px-3 py-1 rounded-full shadow font-semibold">
                    {item.food_origin}
                </div>
                <div className="absolute bottom-2 left-0 w-full flex items-center justify-between px-4 pointer-events-none">
                    <span className="bg-secondary/90 text-white text-xs px-4 py-1 rounded-full shadow font-semibold flex items-center gap-1 opacity-90">
                        Sold: <span className="font-bold">{item.purchase_count || 0}</span>
                    </span>
                    <span className="bg-amber-400/90 text-white text-xs px-4 py-1 rounded-full shadow font-semibold flex items-center gap-1 opacity-90">
                        Item left: <span className="font-bold">{item.quantity}</span>
                    </span>
                </div>
            </figure>
            <div className="card-body flex flex-col flex-1">
                <div className="flex items-center justify-between mb-1">
                    <h3 className="card-title text-lg md:text-xl font-bold text-primary">{item.food_name || item.title}</h3>
                    <span className="text-secondary font-bold text-sm md:text-base">${item.price}</span>
                </div>
                <p className="text-xs md:text-sm text-primary line-clamp-2">{(item.details || '').slice(0, 65)}{item.details && item.details.length > 65 ? '...' : ''}</p>
                {/* <div className="mt-2 text-xs md:text-sm text-accent">By {item.user_name}</div> */}
                <div className="mt-1 flex flex-wrap gap-2">
                    {Array.isArray(item.food_category)
                        ? item.food_category.map((cat) => (
                            <span key={cat} className="badge bg-secondary/20 rounded-3xl text-xs">{cat}</span>
                        ))
                        : item.food_category && <span className="badge bg-secondary/20 rounded-3xl text-xs">{item.food_category}</span>
                    }
                </div>
                <div className="flex flex-wrap gap-3 mt-2 text-xs md:text-sm">
                    {/* Removed available item from here as requested */}
                </div>
                <div className="mt-auto pt-2 flex gap-2">
                    <Link to={`/item-details/${item._id}`} className="btn btn-secondary btn-sm flex-1 font-semibold text-white rounded-3xl">
                        See Details
                    </Link>
                    <button
                        onClick={handleAddToWishlist}
                        disabled={isAddingToWishlist}
                        className="btn btn-sm btn-outline btn-error rounded-3xl disabled:opacity-50"
                        title="Add to wishlist"
                    >
                        <FaHeart className="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;