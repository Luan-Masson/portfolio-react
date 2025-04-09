import { Card } from "primereact/card";
import { Chip } from "primereact/chip";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { getFromApi } from "../utils/AssetsUtils";
import AnimateOnScroll from "./common/AnimateOnScroll";


export default function Skills() {
    const { data } = useLanguage();
    const { theme } = useTheme();
    const [cards, setCards] = useState(null);

    useEffect(() => {
        setCards(data?.skills);
    }, [data]);


    const header = (cat) => {
        return (<div className="flex justify-center items-center w-full h-40">
            <img
                className="w-36 p-2"
                alt="user header"
                src={getFromApi(`images${theme === 'viva-light' ? cat.image : cat.imageDark}`)}
            />
        </div>)
    }

    const title = (cat) => {
        return (
            <span className="w-full flex items-center justify-center">{
                cat.title
            }</span>
        )
    }

    const content = (cat) => {
        return (
            <div className="flex flex-col gap-2 h-44">
                <div className="flex w-full gap-2 flex-wrap">
                    {cat.skills.map((skills) => (
                        <AnimateOnScroll key={skills}>
                            <Chip
                                className="shadow w-max h-max"
                                label={skills}
                            />
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <>
            <section className="flex flex-wrap w-full h-full justify-center gap-6 my-8">
                {cards ?
                    Object.entries(cards).map(([key, category]) => (
                        <AnimateOnScroll className="w-11/12 md:w-96 h-max overflow-hidden" key={key}>
                            <Card className="shadow-md md:shadow-xl shadow-slate-900"
                                title={title(category)} header={header(category)}>
                                {content(category)}
                            </Card>
                        </AnimateOnScroll>
                    ))
                    : null
                }
            </section>
        </>
    )
}