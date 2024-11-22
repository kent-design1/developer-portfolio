import { cn } from "@/lib/utils";
import React from "react";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import {d3, fullstack, game, graphic, mob, recentpro, web} from "@/components/assets/dez";



export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  header,
                                  icon,
                              }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    );
};




export const BentoGridExp = () => {
    return (
        <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    );
};


const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: "Crafting Digital Masterpieces",
        description: "Crafting immersive digital experiences that captivate and engage.",
        header: (<Image
            src={web}
            alt="Crafting Digital Masterpieces"
            layout="responsive"
            width={500} // Adjust width as needed
            height={300} // Adjust height as needed
            className="rounded-xl overflow-hidden object-cover"
        />),
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Engineering Seamless Solutions",
        description: "Building seamless solutions from front-end aesthetics to back-end robustness.",
        header: (<Image
            src={fullstack}
            alt="Crafting Digital Masterpieces"
            layout="responsive"
            width={500} // Adjust width as needed
            height={300} // Adjust height as needed
            className="rounded-xl overflow-hidden object-cover"
        />),
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Innovating Mobile Experiences",
        description: "Transforming ideas into intuitive mobile app.",
        header: (<Image
            src={mob}
            alt="Crafting Digital Masterpieces"
            layout="responsive"
            width={500} // Adjust width as needed
            height={300} // Adjust height as needed
            className="rounded-xl overflow-hidden object-cover"
        />),
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Animating Ideas Vividly",
        description: "Bringing concepts to life through dynamic and realistic 3D modeling.",
        header: (<Image
            src={d3}
            alt="Crafting Digital Masterpieces"
            layout="responsive"
            width={500} // Adjust width as needed
            height={300} // Adjust height as needed
            className="rounded-xl overflow-hidden object-cover"
        />),
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Visualizing Creative Concepts",
        description: "Designing visual narratives that communicate and inspire.",
        header: (<Image
            src={graphic}
            alt="Crafting Digital Masterpieces"
            layout="responsive"
            width={500} // Adjust width as needed
            height={300} // Adjust height as needed
            className="rounded-xl overflow-hidden object-contain bg-white"
        />),
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Advancing Smart Rehabilitation",
        description: "Developing innovative solutions to enhance recovery for spinal injury patients.",
        header: (<Image
            src={recentpro}
            alt="Advancing Smart Rehabilitation"
            layout="responsive"
            width={500} // Adjust width as needed
            height={300}
            objectFit={"contain"}// Adjust height as needed
            className="rounded-xl overflow-hidden object-cover"
        />),
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Designing Interactive Realms",
        description: "Creating interactive worlds that entertain and challenge players.",
        header: (<Image
            src={game}
            alt="Crafting Digital Masterpieces"
            layout="responsive"
            width={500} // Adjust width as needed
            height={300} // Adjust height as needed
            className="rounded-xl overflow-hidden object-cover"
        />),
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },

];