import { useSession } from 'next-auth/react';
import CategoryMenu from './(Home)/CategoryMenu';
import PopularMenu from './(Home)/PopularMenu';
import Sidebar from './(Home)/Sidebar';

export default function Home() {
  return (
    <main className="flex flex-col sm:flex-row ml-10 gap-2">
      <div className="sm:w-1/4 lg:w-1/5 w-full">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full sm:w-3/4">
        <PopularMenu />
        <CategoryMenu />
      </div>
    </main>
  );
}
