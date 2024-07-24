type TabType = {
    title: string;
    active: boolean;
    onClick?: () => void;
};

type TabsProps = {
    className?: string;
    items: TabType[];
};

const Tabs = ({ className, items }: TabsProps) => {
    return (
        <div
            className={`flex justify-center overflow-auto scrollbar-none lg:justify-start lg:-mx-8 lg:before:shrink-0 lg:before:w-8 lg:after:shrink-0 lg:after:w-8 ${
                className || ""
            }`}
        >
            <div className="flex shrink-0 space-x-3 border-b border-n-100">
                {items.map((item, index) => (
                    <button
                        className={`-mb-0.25 px-2.5 pb-4 border-b border-transparent text-14r text-n-300 transition-colors hover:text-n-500 ${
                            item.active ? "!text-n-700 !border-n-400" : ""
                        }`}
                        onClick={item.onClick}
                        key={index}
                        type="button"
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
