import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import notFoundLottie from "../../assets/lotties/food-not-found.json";
import Lottie from "lottie-react";


const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (!user?.email) return;
        setLoading(true);
        axios.get(`${import.meta.env.VITE_API_URL}/my-orders/?email=${user.email}`)
            .then(res => setOrders(res.data))
            .catch(err => console.error("Error fetching my orders:", err))
            .finally(() => setLoading(false));
    }, [user?.email]);

    // handle cancel order
    const handleCancelOrder = (orderIdRaw) => {
        // Always extract string ID (handles both string and {$oid: ...})
        const orderId = typeof orderIdRaw === 'object' && orderIdRaw?.$oid ? orderIdRaw.$oid : orderIdRaw;
        if (!orderId) return;
        axios.delete(`${import.meta.env.VITE_API_URL}/my-orders/${orderId}`)
            .then(res => {
                if (res.data.deletedCount) {
                    setOrders(orders.filter(order => {
                        const oid = typeof order._id === 'object' && order._id?.$oid ? order._id.$oid : order._id;
                        return oid !== orderId;
                    }));
                    console.log(`Order with ID ${orderId} has been canceled.`);
                }
            })
            .catch(err => console.error("Error canceling order:", err));
    };

    return (
        <div className='max-w-7xl min-h-[calc(100vh-300px)] mx-auto px-4 py-10 md:py-20'>
            <h2 className="text-center text-2xl text-primary md:text-3xl font-bold mb-10">
                My <span className="text-secondary">Orders</span>
            </h2>
            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <span className="loading loading-spinner loading-lg text-secondary"></span>
                </div>
            ) : orders.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16">
                    <Lottie animationData={notFoundLottie} className="w-50 h-50"></Lottie>
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary/60 mt-8 mb-2 text-center">No Order Found</h3>
                    <p className="text-accent text-lg mb-6 text-center max-w-md">You don't have any orders yet. Start by adding your first order!</p>
                </div>
            ) : (
                <div className="overflow-x-auto shadow-md rounded-xl">
                    <table className="min-w-full bg-base-200 overflow-x-scroll text-left border border-secondary/10">
                        <thead className="bg-secondary/10 text-secondary text-sm">
                            <tr>
                                <th className="px-4 py-3 border-b border-secondary/10">Photo</th>
                                <th className="px-4 py-3 border-b border-secondary/10">Food Name</th>
                                <th className="px-4 py-3 border-b border-secondary/10">Seller</th>
                                <th className="px-4 py-3 border-b border-secondary/10">Quantity</th>
                                <th className="px-4 py-3 border-b border-secondary/10">Total Price</th>
                                <th className="px-4 py-3 border-b border-secondary/10">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.map((order) => {
                                const orderId = typeof order._id === 'object' && order._id?.$oid ? order._id.$oid : order._id;
                                return (
                                    <tr key={orderId} className="hover:bg-secondary/5 transition duration-200">
                                        {/* <td className="px-4 py-3 border-b border-secondary/10">{idx + 1}</td> */}
                                        <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">
                                            <img
                                                src={order.food_info?.food_img}
                                                alt={order.food_info?.food_name}
                                                className="w-20 md:h-20 object-cover rounded-md"
                                            />
                                        </td>
                                        <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">{order.food_name}</td>
                                        <td className="px-4 py-3 border-b border-secondary/10 text-primary">{order.food_info?.user_name}</td>
                                        <td className="px-4 py-3 border-b border-secondary/10 text-primary">{order.order_quantity}</td>
                                        <td className="px-4 py-3 border-b border-secondary/10 text-primary">${order.total_price}</td>
                                        <td className="px-4 py-3 border-b border-secondary/10"><button onClick={() => handleCancelOrder(order._id)} className="btn btn-xs btn-outline btn-error">Cancel</button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyOrders;