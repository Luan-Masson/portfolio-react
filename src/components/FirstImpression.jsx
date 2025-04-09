import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FirstImpression() {
    const knowledges = ["Front", "Back", "Dev"];
    const [showText, setShowText] = useState('Front');
    const [headerKey, setHeaderKey] = useState(0);
    const { data } = useLanguage();
    

    useEffect(() => {
        const interval = setInterval(() =>{
            let i = knowledges.indexOf(showText) === 2 ? 0 : knowledges.indexOf(showText) + 1;
            setHeaderKey(i);
            setShowText(knowledges[i]);
        }, 2000);
        return () => clearInterval(interval);
    });

    return (
        <>
            <section className="flex w-full h-3/4 items-center justify-center absolute z-20">
                <section className="flex w-full justify-center items-center gap-2 md:gap-8">
                    <h1 className="text-3xl md:text-7xl font-bold fade-in">
                        {data?.about?.is}
                    </h1>
                    <section className="flex md:gap-6 items-center overflow-hidden relative">
                        <span className="text-3xl md:text-7xl font-bold text-start">
                            <h1 key={headerKey} className={`fade-in-out w-28 md:w-56 ${showText === "Dev" ? "text-blue-500" : ""}`}>
                            { showText }
                        </h1>
                    </span>
                </section>
            </section>
        </section >
        </>
    );
}