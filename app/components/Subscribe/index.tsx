import { useState } from "react";
import Icon from "../Icon";

type SubscribeProps = {
    className?: string;
};

const Subscribe = ({ className }: SubscribeProps) => {
    const [search, setSearch] = useState<string>("");

    return (
        <form
            className={`relative grow ${className || ""}`}
            action=""
            onSubmit={() => console.log("Submit")}
        >
            <input
                className="w-full h-11 border-b border-n-100 bg-transparent pr-8 rounded-none outline-none text-14r text-n-700 transition-colors placeholder:text-n-400 focus:border-n-300"
                type="text"
                name="search"
                placeholder="Enter email to subscribe"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoComplete="off"
                required
            />
            <button className="group absolute top-1/2 right-0 -translate-y-1/2">
                <Icon
                    className="transition-colors group-hover:fill-primary-500"
                    name="arrow-next"
                />
            </button>
        </form>
    );
};

export default Subscribe;
