import Navbar from "@/components/Navbar";
import RegisterSection from "@/components/registration/Register";

export default function Home() {
  return (
    <>
      <head>
        <title>Register</title>
        <meta name="Register" content="Register for NLDS 2025" />
      </head>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <RegisterSection />
      </div>
    </>
  );
}
