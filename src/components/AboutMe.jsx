import { useLanguage } from "../contexts/LanguageContext";
import { getImageUrl } from "../utils/AssetsUtils";
import AnimateOnScroll from "./common/AnimateOnScroll";

export default function AboutMe() {
    const { data } = useLanguage();

    return (
        <>
            <section className="flex flex-col w-full h-dvh mt-[-15rem] z-30">
                <div
                    className="flex flex-col md:flex-row fade-in w-full h-full items-center justify-center gap-8"
                >
                    <AnimateOnScroll className="flex flex-col gap-1 w-8/12 md:w-104 items-center md:items-start">
                        <h1 className="text-xl m-0 md:text-3xl text-center md:text-justify">{data?.about?.header}</h1>
                        <div className="w-48 md:w-96">
                            <p className="text-sm md:text-base text-justify indent-4">
                                {data?.about?.aboutMe}
                            </p>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll className="photos relative flex">
                        <img
                            className="rounded-2xl w-32 md:w-96 shadow-xl shadow-blue-500 transition-all ease-in-out duration-300 hover:scale-110 hover:shadow-md"
                            src={getImageUrl('Me')}
                            alt=""
                        />
                        <img
                            className="rounded-2xl max-h-16 md:max-h-32 absolute z-10 -top-4 -left-3 shadow-md shadow-blue-500 transition-all ease-in-out duration-300 hover:scale-110 hover:shadow-sm"
                            src={getImageUrl('Me2')}
                            alt=""
                        />
                        <img
                            className="rounded-2xl max-h-20 md:max-h-48 absolute z-10 -bottom-4 -right-3 shadow-lg shadow-blue-500 transition-all ease-in-out duration-300 hover:scale-110 hover:shadow-sm"
                            src={getImageUrl('Me3')}
                            alt=""
                        />
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    )
}