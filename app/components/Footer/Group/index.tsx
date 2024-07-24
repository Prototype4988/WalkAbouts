import { useState } from "react";
import Link from "next/link";
import Icon from "../../Icon";

type ItemsType = {
    id: string;
    title: string;
    url: string;
};

type ItemType = {
    id: string;
    title: string;
    items: ItemsType[];
};

type GroupProps = {
    item: ItemType;
};

const Group = ({ item }: GroupProps) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="pr-6 md:pr-0" key={item.id}>
            <div
                className="mb-4 text-16m text-primary-500 md:flex md:justify-between md:items-center md:mb-0"
                onClick={() => setVisible(!visible)}
            >
                {item.title}
                <Icon
                    className={`hidden fill-primary-500 md:block md:transition-transform ${
                        visible ? "md:rotate-180" : ""
                    }`}
                    name="arrow-down"
                />
            </div>
            <div
                className={`flex flex-col items-start space-y-3 md:pt-4 ${
                    visible ? "md:flex" : "md:hidden"
                }`}
            >
                {item.items.map((link) => (
                    <Link
                        className="text-n-700 transition-colors hover:text-primary-500"
                        href={link.url}
                        key={link.id}
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Group;
