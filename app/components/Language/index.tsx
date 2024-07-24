import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Icon from "../Icon";

const languages = [
    { id: "0", nameCode: "ENG", nameFull: "English" },
    { id: "1", nameCode: "SPA", nameFull: "Spanish" },
    { id: "2", nameCode: "FRA", nameFull: "French" },
    { id: "3", nameCode: "DEU", nameFull: "German" },
];

type LanguageProps = {
    className?: string;
    fullName?: boolean;
    up?: boolean;
};

const Language = ({ className, fullName, up }: LanguageProps) => {
    const [language, setLanguage] = useState(languages[0]);

    return (
        <Listbox
            className={`relative z-2 ${className || ""}`}
            value={language}
            onChange={setLanguage}
            as="div"
        >
            <Listbox.Button className="flex items-center text-h7 uppercase text-n-700">
                {fullName ? language.nameFull : language.nameCode}
                <Icon
                    className={`fill-n-500 transition-transform ui-open:rotate-180 ${
                        fullName ? "ml-2.5" : "ml-1"
                    }`}
                    name="arrow-down"
                />
            </Listbox.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Listbox.Options
                    className={`absolute -left-2 -right-2 py-1 bg-white ${
                        up ? "bottom-full mb-1 shadow-md" : "top-full mt-1"
                    }`}
                >
                    {languages.map((language) => (
                        <Listbox.Option
                            className="px-2 py-1 text-h7 uppercase text-n-700 transition-colors cursor-pointer hover:text-primary-500 ui-selected:text-primary-500"
                            key={language.id}
                            value={language}
                        >
                            {fullName ? language.nameFull : language.nameCode}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Transition>
        </Listbox>
    );
};

export default Language;
