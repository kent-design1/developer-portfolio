import React from "react";
import {ContactUsButton} from "@/components/ui/button";


export const Contact = () => {
    return (
        <section id='contact'
                 className="w-full flex md:flex-col flex-col padding justify-between items-center padding-y ">
            <div className="w-full px-4  flex flex-col mb-4">
                <div className="w-full text-center text-white lg:text-7xl text-4xl font-bold">
                    <h1 className="w-full ">How can we help you? get
                        in touch</h1>
                </div>
                <div className="flex w-full text-center mt-8 flex-col md:flex-row md:justify-between">
                    <p className="w-full text-gray-400">Interested in elevating your project with professional
                        expertise? Get in touch to discuss how my services can benefit you!</p>

                </div>

            </div>

            <div className="flex">
                <ContactUsButton/>
            </div>

        </section>
            );
            };
