import React, { Suspense } from "react";
import useMyOrdersApi from "../../api/useMyOrdersApi";
import useAuth from "../../hooks/useAuth";
import MyOrders from "./MyOrders";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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
  const { myOrdersPromise } = useMyOrdersApi();
  const {user} = useAuth();
  return <div>
    <Suspense fallback={<MyOrdersTableSkeleton />}>
        <MyOrders myOrdersPromise={myOrdersPromise(user?.email)} />
    </Suspense>
  </div>;
};

export default OrdersFromApi;
