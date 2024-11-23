"use client";

import { cn } from "@/lib/utils";
import React,{MouseEventHandler} from "react";



export const ModalTrigger = ({
                                 children,
                                 className,
                                 onClick,
                             }:{
    children: React.ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>
}) => {
    return (
        <button
            className={cn(
                "px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export function ContactUsButton() {
    const handleClick = () => {
        // Define your button click logic here
        window.location.href = "mailto:vincidesign1@gmail.com";
    };

    return (
        <div className="py-10 flex items-center justify-center">
            <ModalTrigger
                className="bg-blue-500 text-gray-200 flex justify-center group/modal-btn"
                onClick={handleClick}
            >
        <span className="font-bold group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          Contact Us
        </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                    📨
                </div>
            </ModalTrigger>
        </div>
    );
}