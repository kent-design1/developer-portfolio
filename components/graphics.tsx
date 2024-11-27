import {BentoGridExp} from "@/components/ui/bento";
import SectionHeader from "@/components/ui/sectionheader";


export const Exhibit = () => {
    return (
        <div className="padding flex flex-col pb-[10rem] font-bold">
            <SectionHeader
                title="What I do."/>
        <BentoGridExp/>
        </div>
    );
};
