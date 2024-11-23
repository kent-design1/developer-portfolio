"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image, {StaticImageData} from "next/image";
import {
    Angular,
    Blender,
    css,
    docker,
    figma,
    firebase,
    git,
    Javascript,
    mongodb,
    mySQL, nodejs, Qwik, reactjs, Redux, Tailwind, Typescript
} from "@/components/assets/tech";

export const InfiniteMovingCards = ({
                                        items,
                                        direction = "left",
                                        speed = "fast",
                                        pauseOnHover = true,
                                        className,
                                    }: {
    items: { src: StaticImageData; alt: string }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className="w-[150px] h-[150px] relative flex-shrink-0 rounded-lg"
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={90}
                            height={90}
                            className="object-contain rounded-md"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const MovingCarousel = () => {
    const tools = [
        { src: Angular, alt: "Angular" },
        { src: Blender, alt: "Blender" },
        { src: css, alt: "CSS" },
        { src: Javascript, alt: "JavaScript" },
        { src: docker, alt: "Docker" },
        { src: figma, alt: "Figma" },
        { src: firebase, alt: "Firebase" },
        { src: git, alt: "Git" },
        { src: mongodb, alt: "MongoDB" },
        { src: mySQL, alt: "MySQL" },
        { src: nodejs, alt: "Node.js" },
        { src: reactjs, alt: "React.js" },
        { src: Qwik, alt: "Qwik" },
        { src: Redux, alt: "Redux" },
        { src: Tailwind, alt: "Tailwind CSS" },
        { src: Typescript, alt: "TypeScript" },
    ];

    return (
        <div className=" padding-y rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards items={tools} direction="right" speed="normal" />
        </div>
    );
};