import React from "react";


export const Contact = () => {
    return (
        <section id='contact'
                 className="w-full flex md:flex-row flex-col padding justify-center items-center padding-y ">
            <div className="md:w-2/3 w-full px-4  flex flex-col mb-4">
                <div className="w-full text-white lg:text-7xl text-4xl font-bold">
                    <h1 className="w-full md:w-2/3">How can we help you. get
                        in touch</h1>
                </div>
                <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                    <p className="w-full md:w-2/3 text-gray-400">Interested in elevating your project with professional
                        expertise? Get in touch to discuss how my services can benefit you!</p>

                </div>

            </div>

            <div className="flex">
                <p className="text-white">Button</p>
            </div>
        </section>
            );
            };
