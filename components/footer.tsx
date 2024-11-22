
import Image from "next/image"
import Link from "next/link"
import {whatsapp, linkedin } from '@/components/assets/icons';

const Footer = () => {
    return (
        <div className=" w-full">
            <div className="flex flex-col">
                <div className="flex mt-24 mb-12 flex-row justify-between padding-x">
                    <Link className="hidden md:block cursor-pointer text-gray-600 hover:text-blue-700 uppercase font-semibold" href="/#about">About</Link>
                    <Link className="hidden md:block cursor-pointer text-gray-600 hover:text-blue-700  uppercase font-semibold" href="/#services">Services</Link>
                    <Link className="hidden md:block cursor-pointer text-gray-600 hover:text-blue-700  uppercase font-semibold" href="/#blog">Blog</Link>
                    <Link className="hidden md:block cursor-pointer text-gray-600 hover:text-blue-700  uppercase font-semibold" href="/#contact">Contact</Link>
                    <div className="flex flex-row space-x-8 items-center justify-between">


                            <a href="https://www.linkedin.com/in/vinci-designs-a5b831191/" className="w-6">
                                <Image alt="footer"
                                       src={linkedin}
                                />
                            </a>
                            <a href="https://wa.link/u8bsuf" className="w-6 z-50">
                                <Image alt="footer"
                                       src={whatsapp}
                                />
                            </a>
                    </div>
                </div>
                <hr className="border-gray-600"/>
                <p className="w-full text-center my-12 text-gray-600">Copyright © 2020 Kent Design</p>
            </div></div>
    )
}

export default Footer