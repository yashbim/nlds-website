import Navbar from "@/components/Navbar";
import Store_closed from "@/components/store/Store-closed";
import Store from "@/components/store/Store";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Store",
  description: "Buy NLDS 2025 merch",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Store />
      {/* <Store_closed /> */}
      <Footer />
    </div>
  );
}
