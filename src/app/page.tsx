import SidebarDemo from "./ClientSidebar";
import AnimatedModal from "./modals/welcome/modal";

export default function Home() {
  return (
    <div className="h-screen m-auto p-auto content-center">
          <p className="text-3xl text-center">Welcome to Node!</p>
          <p className="text-center">Select a menu item to get started</p>
          <AnimatedModal></AnimatedModal>
    </div>
  );
}
