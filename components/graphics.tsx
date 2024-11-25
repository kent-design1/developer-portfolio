import {BentoGridExp} from "@/components/ui/bento";
import SectionHeader from "@/components/ui/sectionheader";
import { motion } from "framer-motion";
import {bounce} from "@/components/Projects";


export const Exhibit = () => {
    return (
        <div className="padding flex flex-col pb-[10rem] font-bold">
            <SectionHeader
                title="What I do."/>
        <BentoGridExp/>
        </div>
    );
};
