import Image from "@/components/Image";
import Explore from "@/components/Explore";

type ItemType = {
    id: string;
    title: string;
    content: string;
    image: string;
};

type NewsItemProps = {
    className?: string;
    item: ItemType;
};

const NewsItem = ({ className, item }: NewsItemProps) => (
    <div className={`flex flex-col bg-white ${className || ""}`}>
        <div className="h-[20.625rem]">
            <Image
                className="w-full h-full object-cover"
                src={item.image}
                width={462}
                height={330}
                alt=""
            />
        </div>
        <div className="flex flex-col items-start grow px-6 py-8">
            <div className="h-[7.1875rem] mb-2 line-clamp-3 text-h3 md:h-auto md:mb-6 md:line-clamp-none">
                {item.title}
            </div>
            <div className="mb-8 text-16r">{item.content}</div>
            <Explore
                className="mt-auto"
                text="Read More"
                url={`/news/${item.id}`}
            />
        </div>
    </div>
);

export default NewsItem;
