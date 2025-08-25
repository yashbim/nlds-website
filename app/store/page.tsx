import Navbar from "@/components/Navbar";
import RegisterSection from "@/components/store/Store";

export const metadata = {
  title: "Store",
  description: "Buy NLDS 2025 merch",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <RegisterSection />
    </div>
  );
}
