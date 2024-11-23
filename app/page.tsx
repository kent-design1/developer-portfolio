import {Hero} from "@/components/hero";
import {FloatingNavDemo} from "@/components/navbar";
import React from "react";
import {About} from "@/components/about";
import {Projects} from "@/components/Projects";
import {Exhibit} from "@/components/graphics";
import {Testimonial} from "@/components/testimonial";
import {Blog} from "@/components/blog";
import Footer from "@/components/footer";
import {Contact} from "@/components/contact";
import {MovingCarousel} from "@/components/ui/movingCarousel";



export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-hidden container mx-auto items-center justify-center relative ">

        <Hero />
        <FloatingNavDemo/>
        <MovingCarousel />
        <About />
        <Exhibit/>
        <Projects />
        <Testimonial />
        <Blog />
        <Contact />
        <Footer />
    </div>
  );
}
