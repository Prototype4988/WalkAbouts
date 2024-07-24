import Link from "next/link";
import Image from "../../components/Image";
import Language from "../../components/Language";
import Dropdown from "./Dropdown";

type HeaderProps = {
    onClick: () => void;
};

const Header = ({ onClick }: HeaderProps) => {
    return (
        <header className="relative z-10">
            <div className="py-4">
                <div className="container relative flex items-center h-[4.8125rem] md:flex-row-reverse">
                    <button
                        className="group flex flex-col justify-center items-center w-12 h-12 mr-auto before:w-8 before:h-0.5 before:bg-n-400 before:rounded before:transition-colors after:w-4 after:h-0.5 after:bg-n-400 after:rounded after:transition-colors hover:before:bg-n-800 hover:after:bg-n-800 lg:mr-8 md:ml-auto md:mr-0"
                        onClick={onClick}
                    >
                        <span className="w-6 h-0.5 my-1.5 rounded bg-n-400 transition-colors group-hover:bg-n-800"></span>
                    </button>
                    <Link
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:mr-auto lg:translate-x-0 lg:translate-y-0"
                        href="/"
                    >
                        <Image
                            className="opacity-100"
                            src="/images/logo.svg"
                            width={231}
                            height={53}
                            alt=""
                        />
                    </Link>
                    <div className="flex items-center md:hidden">
                        <Language className="mr-8" />
                        <Link
                            className="btn-secondary h-12 px-5 text-16m"
                            href="/reservation"
                        >
                            Book a Tour
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pt-0.25 lg:hidden">
                <div className="container">
                    <Dropdown />
                </div>
            </div>
        </header>
    );
};

export default Header;
