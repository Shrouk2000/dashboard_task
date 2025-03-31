import Image from "next/image";
import Head from "next/head";
import Header from '../components/Header';
import Cards from '../components/Cards';
import Barcharts from '../components/Barcharts';
import RecentOrders from '../components/RecentOrders';
export default function Home() {
  return (
   <>
   <Head>
    <title>Dashboard</title>
    <meta name='description' content=" this is a dashboard"/>
    <meta name='viewport' content="width=device-width,initial-scal=1"/>
<link rel='icon' href='./favicon.ico'/>
   </Head>
   <main className="bg-gray-100 min-h-screen">
   <Header/>
   <Cards/>
   <div className="p-4 grid md:grid-cols-3 grid-cols gap-4">
    <Barcharts/>

    <RecentOrders/>
   </div>

   </main>

  
   </>
  );
}
