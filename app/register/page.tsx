import Navbar from "@/components/Navbar";
import RegisterSection from "@/components/registration/Register";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <RegisterSection />
    </div>
  );
}
