import TopNav from './TopNav';
import SideNav from './SideNav';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed top-0 w-full z-10">
        <TopNav />
      </div>
      <div className="flex pt-16">
        <div className="fixed left-0 h-[calc(100vh-4rem)]">
          <SideNav />
        </div>
        <div className="flex-1 ml-64 p-6"> 
          {children}
        </div>
      </div>
    </div>
  );
}