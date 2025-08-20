import Navbar from "@/components/Navbar";
import RegisterSection from "@/components/store/Store";

export default function Home() {
  return (
    <>
      <head>
        <title>Store</title>
        <meta name="Store" content="By NLDS 2025 merch" />
      </head>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <RegisterSection />
      </div>
    </>
  );
}
