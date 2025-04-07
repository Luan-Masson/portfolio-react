export default function WaveDivider() {
    return (
        <>
            <section className='m-0'>
                <div className="relative">
                    <div className="h-dvh flex items-end">
                        <img
                            className="w-full"
                            src="https://capsule-render.vercel.app/api?type=waving&height=200&color=2b7fff&section=footer&reversal=true&textBg=false"
                            alt="wave-bottom"
                        />
                    </div>
                    <img
                        className="w-full"
                        src="https://capsule-render.vercel.app/api?type=waving&height=200&color=2b7fff"
                        alt="wave-top"
                    />
                </div>
            </section>
        </>
    )
}