import Head from "next/head";
import Navbar from "@/components/Navbar";
import OrderConfirmation from "@/components/store/OrderConfirmation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Order Confirmation</title>
        <meta name="OrderConfirmation" content="OrderConfirmation" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <OrderConfirmation />
      </div>
    </>
  );
}
