import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import { getFromApi } from '../utils/AssetsUtils';
import AnimateOnScroll from './common/AnimateOnScroll';

export default function Projects() {
    const { data } = useLanguage();
    const { theme } = useTheme();
    const [projects, setProjects] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    useEffect(() => {
        if (data.projects) {
            const novosProjetos = Object.values(data.projects);
            setProjects(novosProjetos);
        }
    }, [data]);

    const projectTemplate = (project) => {
        return (
            <AnimateOnScroll>

                <Card header={cardHeader(project)} title={cardTitle(project)}
                    className="w-11/12 h-120 xl:h-100 overflow-hidden"
                >
                    <span className="line-clamp-8 h-max">
                        {project?.about}
                    </span>
                </Card>
            </AnimateOnScroll>
        )
    }

    const cardHeader = (project) => {
        return (
            <div className="flex justify-center items-center w-full h-40">
                <img
                    className="w-36 p-2 drop-shadow-4xl"
                    alt={project.image}
                    src={getFromApi(`images${theme === 'viva-light' ? project.image : project.imageDark}`)}
                />
            </div>
        )
    }

    const cardTitle = (project) => {
        return (
            <span className="w-full flex items-center justify-center">
                {project?.title}
            </span>
        )
    }

    return (
        <>
            <section className="flex w-full h-max justify-end items-center pt-40 pb-20 md:pt-140 md:pb-0">
                <Carousel numVisible={3} numScroll={1} value={projects} responsiveOptions={responsiveOptions} circular
                    autoplayInterval={3000} itemTemplate={projectTemplate} pt={{ root: "max-w-full" }} />
            </section>
        </>
    )
}