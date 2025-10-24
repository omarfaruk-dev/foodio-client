import React from "react";
import useAuth from "../../hooks/useAuth";
import { useGetMyOrdersQuery, useDeleteOrderMutation } from "../../store/api/ordersApi";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import notFoundLottie from "../../assets/lotties/food-not-found.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import moment from "moment";

// Skeleton Loading Component for My Orders Table
const MyOrdersTableSkeleton = () => {
  const SkeletonTableRow = () => (
    <tr className="hover:bg-secondary/5">
      <td className="px-4 py-3 border-b border-secondary/10">
        <Skeleton height={64} width={80} borderRadius={8} />
      </td>
      <td className="px-4 py-3 border-b border-secondary/10">
        <Skeleton width={120} height={20} />
      </td>
      <td className="px-4 py-3 border-b border-secondary/10">
        <Skeleton width={100} height={20} />
      </td>
      <td className="px-4 py-3 border-b border-secondary/10">
        <Skeleton width={120} height={20} />
      </td>
      <td className="px-4 py-3 border-b border-secondary/10">
        <Skeleton width={30} height={20} />
      </td>
      <td className="px-4 py-3 border-b border-secondary/10">
        <Skeleton width={60} height={20} />
      </td>
      <td className="px-4 py-3 border-b border-secondary/10">
        <Skeleton width={60} height={32} />
      </td>
    </tr>
  );

  return (
    <div className="max-w-7xl mt-16 min-h-[calc(100vh-300px)] mx-auto px-4 py-8 md:py-16 lg:py-20">
      <h2 className="text-center text-2xl text-primary md:text-3xl font-bold mb-10">
        My <span className="text-secondary">Orders</span>
      </h2>
      <div className="overflow-x-auto shadow-md rounded-xl">
        <table className="min-w-full bg-base-200 overflow-x-scroll text-left border border-secondary/10">
          <thead className="bg-secondary/10 text-secondary text-sm">
            <tr>
              <th className="px-4 py-3 border-b border-secondary/10">Photo</th>
              <th className="px-4 py-3 border-b border-secondary/10">Food Name</th>
              <th className="px-4 py-3 border-b border-secondary/10">Seller</th>
              <th className="px-4 py-3 border-b border-secondary/10">Date-Time</th>
              <th className="px-4 py-3 border-b border-secondary/10">Quantity</th>
              <th className="px-4 py-3 border-b border-secondary/10">Total Price</th>
              <th className="px-4 py-3 border-b border-secondary/10">Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <SkeletonTableRow key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const OrdersFromApi = () => {
  const { user } = useAuth();
  
  // RTK Query - Get orders with automatic caching and loading
  const { data: orders = [], isLoading } = useGetMyOrdersQuery(user?.email, {
    skip: !user?.email, // Skip query if no user email
  });
  
  // RTK Query - Delete order mutation
  const [deleteOrder, { isLoading: isDeleting }] = useDeleteOrderMutation();

  // Cancel an order by its ID
  const handleCancelOrder = (orderIdRaw) => {
    const orderId = orderIdRaw?.$oid || orderIdRaw;
    if (!orderId) return;
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to cancel this order?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, cancel it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOrder(orderId)
          .unwrap()
          .then((res) => {
            if (res.deletedCount) {
              Swal.fire({
                title: 'Canceled!',
                text: 'Your order has been canceled.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
              });
            }
          })
          .catch((err) => {
            console.error("Error canceling order:", err);
            Swal.fire('Error', 'Failed to cancel the order.', 'error');
          });
      }
    });
  };

  // Show skeleton while loading
  if (isLoading) {
    return <MyOrdersTableSkeleton />;
  }

  return (
    <div className="max-w-7xl mt-16 min-h-[calc(100vh-300px)] mx-auto px-4 py-8 md:py-16 lg:py-20">
      <h2 className="text-center text-2xl text-primary md:text-3xl font-bold mb-10">
        My <span className="text-secondary">Orders</span>
      </h2>
      
      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <Lottie animationData={notFoundLottie} className="w-50 h-50"></Lottie>
          <h3 className="text-2xl md:text-3xl font-bold text-secondary/60 mt-8 mb-2 text-center">
            No Order Found
          </h3>
          <p className="text-accent text-lg mb-6 text-center max-w-md">
            You don't have any orders yet. Start by adding your first order!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-xl">
          <table className="min-w-full bg-base-200 overflow-x-scroll text-left border border-secondary/10">
            <thead className="bg-secondary/10 text-secondary text-sm">
              <tr>
                <th className="px-4 py-3 border-b border-secondary/10">Photo</th>
                <th className="px-4 py-3 border-b border-secondary/10">Food Name</th>
                <th className="px-4 py-3 border-b border-secondary/10">Seller</th>
                <th className="px-4 py-3 border-b border-secondary/10">Date-Time</th>
                <th className="px-4 py-3 border-b border-secondary/10">Quantity</th>
                <th className="px-4 py-3 border-b border-secondary/10">Total Price</th>
                <th className="px-4 py-3 border-b border-secondary/10">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                const orderId = typeof order._id === "object" && order._id?.$oid
                  ? order._id.$oid
                  : order._id;
                return (
                  <tr key={orderId} className="hover:bg-secondary/5 transition duration-200">
                    <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">
                      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden rounded-md bg-base-300">
                        <img
                          src={order.food_info?.food_img}
                          alt={order.food_info?.food_name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">
                      {order.food_name}
                    </td>
                    <td className="px-4 py-3 border-b border-secondary/10 text-primary">
                      {order.food_info?.user_name}
                    </td>
                    <td className="px-4 py-3 border-b border-secondary/10 text-primary">
                      {moment(order.purchase_time).format("DD MMM - hh:mmA")}
                    </td>
                    <td className="px-4 py-3 border-b border-secondary/10 text-primary">
                      {order.order_quantity}
                    </td>
                    <td className="px-4 py-3 border-b border-secondary/10 text-primary">
                      ${order.total_price}
                    </td>
                    <td className="px-4 py-3 border-b border-secondary/10">
                      <button
                        onClick={() => handleCancelOrder(order._id)}
                        disabled={isDeleting}
                        className="btn btn-xs btn-outline btn-error disabled:opacity-50"
                      >
                        {isDeleting ? 'Canceling...' : 'Cancel'}
                      </button>
                    </td>
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

export default OrdersFromApi;
