import Link from "next/link";
import Icon from "../Icon";

type ExploreProps = {
    className?: string;
    text?: string;
    url: string;
};

const Explore = ({ className, text, url }: ExploreProps) => (
    <Link
        className={`group inline-flex items-center text-h7 uppercase text-primary-500 ${
            className || ""
        }`}
        href={url}
    >
        {text || "Explore"}
        <Icon
            className="w-8 h-8 ml-4 fill-primary-500 transition-transform group-hover:translate-x-1"
            name="arrow-long-right"
        />
    </Link>
);

export default Explore;
