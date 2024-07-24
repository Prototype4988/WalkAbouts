import Link from "next/link";
import Icon from "../Icon";
import Subscribe from "../Subscribe";
import Image from "../Image";
import Language from "../Language";
import Group from "./Group";

import { socials } from "../../constants/socials";
import { menu } from "../../constants/navigation";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
    return (
        <footer className="bg-white">
            <div className="py-8 border-b border-n-100">
                <div className="container flex justify-between items-center md:block">
                    <div className="flex md:justify-center md:mb-6">
                        {socials.map((social) => (
                            <a
                                className="group"
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={social.id}
                            >
                                <Icon
                                    className="w-10 h-10 fill-n-700 transition-colors group-hover:fill-primary-500"
                                    name={social.icon}
                                />
                            </a>
                        ))}
                    </div>
                    <Link
                        className="btn-secondary min-w-[14.8rem] md:min-w-full"
                        href="/reservation"
                    >
                        BEST PRICE GUARANTEE
                    </Link>
                </div>
            </div>
            <div className="py-8 border-b border-n-100">
                <div className="container flex justify-between lg:flex-wrap md:block md:space-y-6">
                    {menu.map((group) => (
                        <Group item={group} key={group.id} />
                    ))}
                    <div className="lg:w-full lg:mt-12">
                        <div className="mb-4 text-16m text-primary-500">
                            Contact Us
                        </div>
                        <div className="mb-14 md:mb-8">
                            <p>Yen Ninh, Binh Son, Ninh Chu, Phan Rang,</p>
                            <p>Ninh Thuan 59000 Vietnam</p>
                            <p>Tel: +84 654 343 543</p>
                            <p>For reservations: +84 344 195 678</p>
                            <p>Mail: contact@naturalparadise.com</p>
                        </div>
                        <Subscribe />
                    </div>
                </div>
            </div>
            <div className="py-6">
                <div className="container flex justify-between items-center lg:flex-col-reverse lg:items-stretch">
                    <div className="">
                        Copyright © 2023 - Hidden Oasis Resort. All rights
                        reserved
                    </div>
                    <Link className="lg:hidden" href="/">
                        <Image
                            className="w-[4.3rem]"
                            src="/images/logo-without-text.svg"
                            width={69}
                            height={69}
                            alt=""
                        />
                    </Link>
                    <div className="flex items-center lg:mb-6">
                        <div className="mr-8 text-h7 uppercase">
                            Choose your language
                        </div>
                        <Language fullName up />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
