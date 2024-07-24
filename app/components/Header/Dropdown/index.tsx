import Link from "next/link";
import { Menu } from "@headlessui/react";
import Icon from "../../Icon";

import { navigation } from "../../../constants/navigation";

type DropdownProps = {};

const Dropdown = ({}: DropdownProps) => (
    <nav className="flex justify-center space-x-10 border-b border-n-100">
        {navigation.map((link) =>
            link.dropdown ? (
                <Menu className="group relative z-2" key={link.id} as="div">
                    <Menu.Button className="relative flex items-center h-11 px-4 pb-1 text-14r text-n-700">
                        {link.title}
                        <Icon
                            className="ml-1 fill-primary-500 transition-transform hover-hover:group-hover:rotate-180 xl:ui-open:rotate-180"
                            name="arrow-down"
                        />
                    </Menu.Button>
                    <Menu.Items
                        className="absolute top-full -left-4 -mt-1 px-8 py-6 bg-white space-y-4 invisible opacity-0 transition-all hover-hover:group-hover:visible hover-hover:group-hover:opacity-100 xl:ui-open:visible xl:ui-open:opacity-100"
                        static
                    >
                        {link.dropdown.map((item) => (
                            <Link
                                className="block text-nowrap text-14r text-n-700 transition-colors hover:text-primary-500"
                                href={item.url}
                                key={item.id}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </Menu.Items>
                </Menu>
            ) : (
                <Link
                    className="relative flex items-center h-11 px-4 pb-1 text-14r text-n-70 before:absolute before:left-0 before:right-0 before:-bottom-0.25 before:h-0.25 before:bg-n-400 before:opacity-0 before:transition-opacity hover:before:opacity-100"
                    href={link.url}
                    key={link.id}
                >
                    {link.title}
                </Link>
            )
        )}
    </nav>
);

export default Dropdown;
