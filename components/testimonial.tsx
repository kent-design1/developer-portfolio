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
            "Je recommande vivement Kenneth pour des projets exceptionnels d'art en 3D et de conception UI en raison de sa créativité remarquable, de son souci du détail, de ses compétences techniques et de ses capacités de collaboration professionnelles, ce qui en fait un atout précieux pour toute équipe.",
        name: "Latifa Qatrani",
        designation: "Industrial Designer at DM Surfaces",
        src: lato.src,
    },
    {
        quote:
            "Kent is an excellent team player in my view. We worked in the same unit as a team and he was always open to everyone’s opinion and very collaborative. He’s very smart too.",
        name: "Modesta Aziire",
        designation: "Advocate at Ghana Commodity Exchange",
        src: modesta.src,
    },
    {
        quote:
            "From our school days, as well as our interaction and project meetings, I’ve gotten to know him as a highly skilled and passionate data mining specialist with a knack for programming and graphic design.",
        name: "Mary Immaculata ",
        designation: "Frontend Development at Waltergates Ghana Limited",
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