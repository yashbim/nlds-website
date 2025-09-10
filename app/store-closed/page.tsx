import Navbar from "@/components/Navbar";
import StoreClosed from "@/components/store/Store";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Store",
  description: "Buy NLDS 2025 merch",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <StoreClosed />
      <Footer />
    </div>
  );
}
