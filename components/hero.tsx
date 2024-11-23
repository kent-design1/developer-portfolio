"use client";
import Image from "next/image"; // Import Image from next.js
import { FlipWordsDemo } from "@/components/ui/flashingtext";
import "../app/globals.css";
import React from "react";
import {Astronaut} from "@/components/assets/dez";
import {ContactUsButton} from "@/components/ui/button";


export function Hero() {
    return (
        <div className="min-h-screen flex md:flex-row flex-col  relative w-full md:justify-center justify-between">
            <div className="flex flex-col justify-center items-start gap-2 md:pt-0 pt-[4rem]">
                <FlipWordsDemo/>
                <p className="text-neutral-300 font-bold md:text-[1.4rem] text-md">Enhance your digital solutions with innovative
                    designs.</p>
                <div className="flex justify-center items-center ml-[12rem] py-3">
                    <ContactUsButton/>
                </div>
            </div>
            <div className="flex w-full justify-end items-end">
                <Image alt="Astronaut"  width={680} height={680}  src={Astronaut}  className="object-cover" />
            </div>
        </div>
    );
}