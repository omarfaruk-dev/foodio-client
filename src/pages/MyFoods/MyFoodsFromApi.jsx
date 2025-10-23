import { Suspense } from "react";
import useMyFoodsApi from "../../api/useMyFoodsApi";
import useAuth from "../../hooks/useAuth";
import MyFoods from "./MyFoods";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Fade } from 'react-awesome-reveal';

// Skeleton Loading Component for My Foods Table
const MyFoodsTableSkeleton = () => {
  const SkeletonTableRow = () => (
    <tr className="hover:bg-secondary/5">
      <td className="px-4 py-3 border-b border-secondary/10">
        <Skeleton height={64} width={96} borderRadius={8} />
      </td>
      <td className="px-4 py-3 border-b border-secondary/10">
        <Skeleton width={150} height={20} />
      </td>
      <td className="px-4 py-3 border-b border-secondary/10">
        <Skeleton width={40} height={20} />
      </td>
      <td className="px-4 py-3 border-b border-secondary/10">
        <Skeleton width={60} height={20} />
      </td>
      <td className="px-4 py-3 border-b border-secondary/10 text-center">
        <div className="flex justify-center gap-2">
          <Skeleton width={60} height={32} />
          <Skeleton width={60} height={32} />
          <Skeleton width={60} height={32} />
        </div>
      </td>
    </tr>
  );

  return (
    <div className="max-w-7xl mt-16 min-h-[calc(100vh-300px)] mx-auto px-4 py-8 md:py-16 lg:py-20">
      <Fade>
        <h2 className="text-center text-2xl text-primary md:text-3xl font-bold mb-10">
          My <span className="text-secondary">Food</span> Listings
        </h2>
      </Fade>
      <div className="overflow-x-auto shadow-md rounded-xl">
        <table className="min-w-full bg-base-200 overflow-x-scroll text-left border border-secondary/10">
          <thead className="bg-secondary/10 text-secondary text-sm">
            <tr>
              <th className="px-4 py-3 border-b border-secondary/10">Photo</th>
              <th className="px-4 py-3 border-b border-secondary/10">Name</th>
              <th className="px-4 py-3 border-b border-secondary/10">Quantity</th>
              <th className="px-4 py-3 border-b border-secondary/10">Price</th>
              <th className="px-4 py-3 border-b border-secondary/10 text-center">Action</th>
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

const MyFoodsFromApi = () => {
  const { myFoodsPromise } = useMyFoodsApi();
  const { user } = useAuth();
  return (
    <div>
      <Suspense fallback={<MyFoodsTableSkeleton />}>
        <MyFoods myFoodsPromise={myFoodsPromise(user?.email)} />
      </Suspense>
    </div>
  );
};

export default MyFoodsFromApi;
