import CustomNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrivals";
import Banners from "./components/Banners";

export default function App() {
  return (
    <div>
      <CustomNavbar />
      <Hero />
      <NewArrivals />
      <Banners />
    </div>
  );
}