"use client";

import React from "react";

interface SectionHeaderProps {
    title: string;
    brief?: string;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
                                                         title,
                                                         brief,
                                                         className,
                                                     }) => {
    return (
        <div className={`flex flex-col items-start mb-[5rem] justify-start w-full ${className}`}>
            {/* Title */}
            <h2 className="max-w-7xl pl-4 text-xl md:text-5xl font-bold text-neutral-200 font-sans">
                {title}
            </h2>

            {/* Brief (Optional) */}
            {brief && (
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-left text-gray-600 dark:text-gray-300 mt-4 lg:w-3/4 w-11/12">
                    {brief}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;