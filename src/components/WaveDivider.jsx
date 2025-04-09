import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

WaveDivider.propTypes = {
    onImagesLoaded: PropTypes.func.isRequired,
};

export default function WaveDivider({ onImagesLoaded }) {
    const [imagesLoaded, setImagesLoaded] = useState(0);

    const handleImageLoad = () => {
        setImagesLoaded(prev => prev + 1);
    };

    useEffect(() => {
        if (imagesLoaded === 2) {
            onImagesLoaded();
        }
    }, [imagesLoaded, onImagesLoaded]);

    return (
        <section className='m-0'>
            <div className="relative">
                <div className="h-dvh flex items-end">
                    <img
                        className="w-full"
                        src="https://capsule-render.vercel.app/api?type=waving&height=200&color=2b7fff&section=footer&reversal=true&textBg=false"
                        alt="wave-bottom"
                        onLoad={handleImageLoad}
                    />
                </div>
                <img
                    className="w-full"
                    src="https://capsule-render.vercel.app/api?type=waving&height=200&color=2b7fff"
                    alt="wave-top"
                    onLoad={handleImageLoad}
                />
            </div>
            {imagesLoaded !== 2 ?
                <div className='flex justify-center align-center mt-[-10rem]'>
                    <i className="pi pi-spin pi-spinner" style={{ fontSize: "15rem" }}></i>
                </div>
            : null}
        </section>
    );
}
