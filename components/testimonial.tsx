import Image from 'next/image';
import { lato, mary, modesta } from '@/components/assets/testi';
import React, {FC} from "react";
import SectionHeader from "@/components/ui/sectionheader";


interface Testimonial {
    quote: string;
    name: string;
    designation: string;
    src: string;
}

const testimonials = [
    {
        quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: "Sarah Chen",
        designation: "Product Manager at TechFlow",
        src: lato.src,
    },
    {
        quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Michael Rodriguez",
        designation: "CTO at InnovateSphere",
        src: modesta.src,
    },
    {
        quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
        name: "Emily Watson",
        designation: "Operations Director at CloudScale",
        src: mary.src,
    },
];

const TestimonialCard: FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white dark:bg-neutral-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
        <div className="w-24 h-24 mb-4">
            <Image
                src={testimonial.src}
                alt={testimonial.name}
                width={96}
                height={96}
                className="rounded-full object-cover"
            />
        </div>
        <p className="text-gray-600 dark:text-neutral-300 mb-4">
            "{testimonial.quote}"
        </p>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {testimonial.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-neutral-400">
            {testimonial.designation}
        </p>
    </div>
);

export const Testimonial = () => (
    <div className="padding mx-auto py-12">
        <SectionHeader
            title="What Clients Have To Say."/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
            ))}
        </div>
    </div>
);