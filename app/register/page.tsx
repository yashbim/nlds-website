import Navbar from "@/components/Navbar";
import RegisterSection from "@/components/registration/Register";
import RegistrationsClosed from "@/components/registration/RegistrationsClosed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <head>
        <title>Register</title>
        <meta name="Register" content="Register for NLDS 2025" />
      </head>
      <div className="min-h-screen bg-black text-white">
      <Navbar />
      <RegistrationsClosed />
      {/* <RegisterSection /> */}
      <Footer />
      
    </div>
    </>
  );
}