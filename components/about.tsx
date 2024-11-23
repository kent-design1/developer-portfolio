"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../app/globals.css";
import Paragraph from "@/components/ui/Character";
import SectionHeader from "@/components/ui/sectionheader";
// Adjust the path as needed

const paragraph =
    "A passionate full-stack developer with a creative flair for graphic design, 3D design and photography. With a keen eye for detail and a love for problem-solving, thriving in the dynamic world of web development, where innovation meets functionality.";

export const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            if (
                aboutSection &&
                !isVisible &&
                aboutSection.getBoundingClientRect().top <
                window.innerHeight / 2
            ) {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isVisible]);

    return (
        <div className="padding flex flex-col" id="about">
            <SectionHeader
                title="About Us."/>
            <div className=" flex flex-col pb-[5rem] font-bold">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.9 }}
                >
                    <Paragraph paragraph={paragraph} />
                </motion.div>
            </div>
        </div>
    );
};