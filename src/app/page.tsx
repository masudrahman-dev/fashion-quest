import Hero from "@/Sections/Hero";
import NewArrival from "@/Sections/NewArrival";
import { Button } from "@/components/ui/button";
import Footer from "@/shared/Footer";
import Header from "@/shared/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <h1 className="text-3xl text-center mt-20 underline">New Arrival</h1>
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-7 mt-12">
          <NewArrival />
          <NewArrival />
          <NewArrival />
          <NewArrival />
        </div>
      </div>
      <Footer />
    </main>
  );
}
