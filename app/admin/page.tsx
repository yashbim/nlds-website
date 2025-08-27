import Head from "next/head";
import Navbar from "@/components/Navbar";
import Cart from "@/components/store/Cart";

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="Register" content="Register for NLDS 2025" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <h1>Admin Dashboard</h1>
      </div>
    </>
  );
}
