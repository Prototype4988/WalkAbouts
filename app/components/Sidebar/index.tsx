import Link from "next/link";
import Image from "../../components/Image";
import Icon from "../Icon";

import { navigation } from "../../constants/navigation";

type SidebarProps = {
    className: string;
    onClick: () => void;
};

const Sidebar = ({ className, onClick }: SidebarProps) => (
    <div
        className={`fixed top-0 left-0 bottom-0 z-30 w-[34.7rem] p-14 bg-white overflow-auto scrollbar-none 2xl:w-[28rem] 2xl:p-10 lg:p-8 lg:pt-7 md:flex md:flex-col md:w-full ${
            className || ""
        }`}
    >
        <div className="flex items-start justify-between mb-9 lg:items-center">
            <Link className="" href="/">
                <Image
                    className="opacity-100"
                    src="/images/logo.svg"
                    width={231}
                    height={53}
                    alt=""
                />
            </Link>
            <button className="group" onClick={onClick}>
                <Icon
                    className="w-8 h-8 fill-n-600 transition-colors group-hover:fill-primary-300 lg:w-6 lg:h-6"
                    name="close"
                />
            </button>
        </div>
        <div className="flex flex-col items-start space-y-6">
            {navigation.map((link) =>
                link.dropdown ? (
                    <div className="" key={link.id}>
                        <div className="py-1 text-h4-libre text-n-500 lg:text-h5">
                            {link.title}
                        </div>
                        <div className="flex flex-col items-start pt-4 pl-4 space-y-6">
                            {link.dropdown.map((item) => (
                                <Link
                                    className="text-h6 text-n-500 transition-colors hover:text-primary-600"
                                    href={item.url}
                                    key={item.id}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <Link
                        className="py-1 text-h4-libre text-n-500 transition-colors hover:text-primary-600 lg:text-h5"
                        href={link.url}
                        key={link.id}
                    >
                        {link.title}
                    </Link>
                )
            )}
        </div>
        <Link
            className="btn-primary hidden mt-auto md:flex"
            href="/reservation"
        >
            Book a Tour
        </Link>
    </div>
);

export default Sidebar;
