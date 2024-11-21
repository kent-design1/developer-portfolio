import {Hero} from "@/components/hero";
import {FloatingNavDemo} from "@/components/navbar";
import React from "react";
import {About} from "@/components/about";
import {Services} from "@/components/services";
import {Projects} from "@/components/Projects";
import {Exhibit} from "@/components/graphics";


export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-hidden container mx-auto items-center justify-center relative ">

        <Hero />
        <FloatingNavDemo/>
        <About />
        <Services />
        <Exhibit/>
        <Projects />
    </div>
  );
}
