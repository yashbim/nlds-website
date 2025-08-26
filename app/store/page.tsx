import Navbar from "@/components/Navbar";
import RegisterSection from "@/components/store/Store";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <RegisterSection />
      <Footer />
      
    </div>
  );
}
