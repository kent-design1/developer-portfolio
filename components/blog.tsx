"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SectionHeader from "@/components/ui/sectionheader";
import Link from "next/link";
import {Blog1, Blog2, Blog3, Blog4, Blog5, Blog6} from "@/components/assets/blog";

export const WobbleCard = ({
                               children,
                               containerClassName,
                               className,
                           }: {
    children: React.ReactNode;
    containerClassName?: string;
    className?: string;
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        const { clientX, clientY } = event;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (clientX - (rect.left + rect.width / 2)) / 20;
        const y = (clientY - (rect.top + rect.height / 2)) / 20;
        setMousePosition({ x, y });
    };
    return (
        <motion.section
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0, y: 0 });
            }}
            style={{
                transform: isHovering
                    ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
                    : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                transition: "transform 0.1s ease-out",
            }}
            className={cn(
                "mx-auto w-full bg-indigo-800  relative rounded-2xl overflow-hidden",
                containerClassName
            )}
        >
            <div
                className="relative  h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]  sm:mx-0 sm:rounded-2xl overflow-hidden"
                style={{
                    boxShadow:
                        "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
                }}
            >
                <motion.div
                    style={{
                        transform: isHovering
                            ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
                            : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                        transition: "transform 0.1s ease-out",
                    }}
                    className={cn("h-full px-4 py-20 sm:px-10", className)}
                >
                    {/*<Noise />*/}
                    {children}
                </motion.div>
            </div>
        </motion.section>
    );
};

// const Noise = () => {
//     return (
//         <div
//             className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
//             style={{
//                 backgroundImage: "url(/noise.webp)",
//                 backgroundSize: "30%",
//             }}
//         ></div>
//     );
// };





const blogData = [
    {
        title: "Figma Dev Mode",
        description: "What it can and can't do for a UX designer",
        date: "Mar 22, 2024",
        imageSrc: Blog1,
        link: "https://blog.logrocket.com/ux-design/figma-dev-mode/",
    },
    {
        title: "Cross-platform TV app",
        description: "Developing a cross-platform TV app with React Native",
        date: "Mar 14, 2024",
        imageSrc: Blog2,
        link: "https://blog.logrocket.com/developing-cross-platform-tv-app-react-native/",
    },
    {
        title: "Next.js and SignalR",
        description: "Integrating Next.js and SignalR to build real-time web apps",
        date: "Mar 25, 2024",
        imageSrc: Blog3,
        link: "https://blog.logrocket.com/integrating-next-js-signalr/",
    },
    {
        title: "34 UX GPTs",
        description: "UX GPTs you can use today",
        date: "Feb 28, 2024",
        imageSrc: Blog4,
        link: "https://blog.logrocket.com/ux-design/34-ux-gpts/",
    },
    {
        title: "Axios GET requests",
        description: "Understanding Axios GET requests",
        date: "Feb 9, 2024",
        imageSrc: Blog5,
        link: "https://blog.logrocket.com/understanding-axios-get-requests/",
    },
    {
        title: "React Hooks",
        description: "Using localStorage with React Hooks",
        date: "Mar 5, 2024",
        imageSrc: Blog6,
        link: "https://blog.logrocket.com/using-localstorage-react-hooks/",
    },
];

export function Blog() {
    return (
        <section className="flex flex-col pb-[5rem] font-bold padding">
            <SectionHeader title="Blog & Beyond." />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto w-full">
                {blogData.map((blog, index) => (
                    <WobbleCard
                        key={index}
                        containerClassName="col-span-1 min-h-[300px] bg-gray-900/20"
                        className="p-6"
                    >
                        <div className="relative h-full">
                            <Image
                                src={blog.imageSrc}
                                alt={blog.title}
                                width={400}
                                height={400}
                                className="w-full h-64 object-cover rounded-2xl"
                            />
                            <div className="mt-4">
                                <p className="text-xs font-medium leading-3 text-white">
                                    {blog.date}
                                </p>
                                <h2 className="text-xl font-semibold text-white mt-2">
                                    {blog.title}
                                </h2>
                                <p className="text-base leading-4 text-white mt-2">
                                    {blog.description}
                                </p>
                                <Link
                                    href={blog.link}
                                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                                >
                                    <p className="pr-2 text-sm font-medium leading-none">
                                        Read More: {blog.title}
                                    </p>
                                    <svg
                                        className="fill-stroke"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5.75 12.5L10.25 8L5.75 3.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </WobbleCard>
                ))}
            </div>
        </section>
    );
}