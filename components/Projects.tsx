
"use client";
import Image from "next/image";
import React from "react";
import {Carousel, Card} from "@/components/ui/projectsCards";
import SectionHeader from "@/components/ui/sectionheader";
import {motion, Variants} from "framer-motion";
import {
    Branding,
    CuteApp,
    Eccorm,
    Ecommerce,
    gym,
    JobFinder,
    screen5,
    screen7,
    screen8, sol
} from "@/components/assets/projects"
import {Graph3, recentpro} from "@/components/assets/dez";


const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <Image
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        title: "Web Dev.",
        src: screen5,
        content: <DummyContent />,
    },
    {
        title: "Mobile Dev.",
        src: screen7,
        content: <DummyContent />,
    },
    {
        title: "Web Dev.",
        src: screen8,
        content: <DummyContent />,
    },

    {
        title: "Fullstack Dev.",
        src: gym,
        content: <DummyContent />,
    },
    {
        title: "Mobile Dev.",
        src: JobFinder,
        content: <DummyContent />,
    },

];




export const Projects = () => {
    const cards = data.map((card, index) => (
        <Card key={index} card={card} index={index} />
    ));
    return (
        <div className="w-full h-full py-20 flex flex-col padding">
            <div className="padding-x ">
            <SectionHeader
                title="Recent Projects."/>
            </div>
            <Carousel items={cards}/>

            <Inprogress />
        </div>
    );
};


export const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
};

export const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
};

export const bounce: Variants = {
    hidden: { y: 100 },
    visible: {
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 10,
        },
    },
};


export const Inprogress = () => {
    return (
        <>
            <div className="mt-36">
                <SectionHeader
                    title="Projects In Progress."/>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={bounce}
                className="rounded-2xl mt-10 lg:mt-40 bg-neutral-900  sm:h-80 sm:w-96 md:h-96 md:w-128 lg:h-[45rem] lg:w-[70rem] 2xl:h-[50rem] 2xl:w-[90rem] overflow-hidden flex flex-col items-start justify-start relative">
                <Image src={recentpro} alt="Sol" className="w-full h-full object-cover" width={1800} height={1800}  />
                <div
                    className="bg-black bg-opacity-80 text-white p-4 rounded-lg max-w-md lg:absolute bottom-0 left-20 lg:ml-4 lg:mt-0 lg:mb-10">
                    <h2 className="text-xl font-semibold">Smart Rehab</h2>
                    <p className="mt-2">
                        A smart rehabilitation system to help patients with spine injuries recover faster.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={bounce}
                className="rounded-2xl mt-10 lg:mt-40 bg-neutral-900  sm:h-80 sm:w-96 md:h-96 md:w-128 lg:h-[45rem] lg:w-[70rem] 2xl:h-[50rem] 2xl:w-[90rem] overflow-hidden flex flex-col items-start justify-start relative">
                <Image src={Ecommerce} alt="Sol" className="w-full h-full object-cover" width={1800} height={1800}  />
                <div
                    className="bg-black bg-opacity-80 text-white p-4 rounded-lg max-w-md lg:absolute bottom-0 left-20 lg:ml-4 lg:mt-0 lg:mb-10">
                    <h2 className="text-xl font-semibold">TradeMaster AI</h2>
                    <p className="mt-2">
                        An intelligent trading platform that leverages advanced artificial intelligence to analyze market trends.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={bounce}
                className="rounded-2xl mt-10 lg:mt-40 bg-neutral-900  sm:h-80 sm:w-96 md:h-96 md:w-128 lg:h-[45rem] lg:w-[70rem] 2xl:h-[50rem] 2xl:w-[90rem] overflow-hidden flex flex-col items-start justify-start relative">
                <Image src={Eccorm} alt="Sol" className="w-full h-full object-cover" width={1800} height={1800} />
                <div
                    className="bg-black bg-opacity-80 text-white p-4 rounded-lg max-w-md lg:absolute bottom-0 left-20 lg:ml-4 lg:mt-0 lg:mb-10">
                    <h2 className="text-xl font-semibold">CarConnect</h2>
                    <p className="mt-2">A trusted marketplace for buying and selling vehicles.</p>
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={bounce}
                className="rounded-2xl mt-10 lg:mt-40 bg-neutral-900  sm:h-80 sm:w-96 md:h-96 md:w-128 lg:h-[45rem] lg:w-[70rem] 2xl:h-[50rem] 2xl:w-[90rem] overflow-hidden flex flex-col items-start justify-start relative">
                <Image src={CuteApp} alt="Sol" className="w-full h-full object-cover" width={1800} height={1800} />
                <div
                    className="bg-black bg-opacity-80 text-white p-4 rounded-lg max-w-md lg:absolute bottom-0 left-20 lg:ml-4 lg:mt-0 lg:mb-10">
                    <h2 className="text-xl font-semibold">BuyNest</h2>
                    <p className="mt-2">An Ecommerce platform that brings your favorite products right to your doorstep.</p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1  lg:grid-cols-6 gap-8 items-center justify-center mt-10 lg:mt-40">
                <motion.div
                    variants={slideInFromLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="sm:h-80  md:h-96  lg:h-[45rem]  2xl:h-[50rem]  rounded-2xl w-full lg:col-span-4 overflow-hidden relative">
                    <Image src={Branding} alt="Sol" className="w-full h-full object-cover" width={1800} height={1800}  />
                    <div
                        className="bg-black bg-opacity-80 text-white p-4 rounded-lg max-w-md lg:absolute bottom-0 left-20 lg:ml-4 lg:mt-0 lg:mb-10">
                        <h2 className="text-xl font-semibold">Flavor Haven</h2>
                        <p className="mt-2">A culinary sanctuary that offers a fusion of global tastes.</p>
                    </div>
                </motion.div>
                <div className="grid lg:col-span-2 gap-y-8 sm:h-80  md:h-96  lg:h-[45rem]  2xl:h-[50rem]">
                    <motion.div
                        variants={slideInFromRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-2xl bg-neutral-900 overflow-hidden relative">
                        <Image src={sol} alt="Sol" className="w-full h-full object-cover" width={1800} height={1800}  />
                        <div
                            className="bg-black bg-opacity-80 text-white p-4 rounded-sm w-full lg:absolute bottom-0 left-0  lg:mt-0 lg:mb-0">
                            <h2 className="text-xl font-semibold">Nakoowa</h2>
                            <p className="mt-2">Branding Nakoowa cream that illuminate your natural glow.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={slideInFromRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-2xl bg-neutral-900 overflow-hidden relative">
                        <Image src={Graph3} alt="Sol" className="w-full h-full object-cover" width={1800} height={1800}  />
                        <div
                            className="bg-black bg-opacity-80 text-white p-4 rounded-sm w-full lg:absolute bottom-0 left-0  lg:mt-0 lg:mb-0">
                            <h2 className="text-xl font-semibold">Garnet</h2>
                            <p className="mt-2">Branding Garnet cream that illuminate your natural glow.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

        </>
    );
};