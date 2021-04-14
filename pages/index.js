import Head from "next/head";
import dynamic from "next/dynamic";
import ClientSection from "../components/ClientSection";
import About from "../components/About";
import MainSection from "../components/mainSection";
import HowItWorks from "../components/HowItWorksSection";
import Testimonial from "../components/Testimonial";
import BrandsAndAgenciest from "../components/BrandsAndAgenciest";
import ApplyAsCreator from "../components/ApplyAsCreator";
import Footer from "../components/Footer"
const AppBar = dynamic(() => import("../components/AppBar"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>GetCraft | The Creative Industry's Premium Directory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppBar />
        <div className="bg-banner w-full h-banner flex justify-center">
          <div className="m-auto">
            <h1 className="text-6xl w-2/3 text-center m-auto text-white mt-10">
              The Creative Industry's Premium Directory
            </h1>
            <p className="text-white w-2/5 m-auto text-center pt-3 pb-10">
              Where innovative companies connect with vetted marketing, creative
              and media providers for all their marketing needs.
            </p>
            <div className="text-center">
              <button className="ml-5 bg-primary text-center pt-2 pb-2 pl-8 pr-8 text-white outline-none text-sm">
                Post a Job for Free
              </button>
              <button className="ml-5 p-2 text-white border-white border outline-none text-sm">
                Speak to a Project Manager
              </button>
            </div>
          </div>
        </div>
        <ClientSection />
        <About />
        <MainSection />
        <HowItWorks />
        <Testimonial />
        <BrandsAndAgenciest />
        <ApplyAsCreator />
        <Footer/>
      </main>
    </div>
  );
}
