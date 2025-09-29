import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/partners/partners";

export default function Home() {
  return (
    <>
      <head>
        <title>Partners</title>
        <meta name="Partners" content="Our Partners" />
      </head>
      <div className="min-h-screen bg-black text-white">
      <Navbar />
      <PartnersSection />
      <Footer />
      
    </div>
    </>
  );
}