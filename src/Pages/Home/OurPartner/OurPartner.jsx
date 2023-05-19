import React from 'react';
import Marquee from 'react-fast-marquee';

function OurPartner() {
    return (
        <div className="my-16">
            <div className="w-full text-center mx-auto mb-10">
                <h1 className="text-2xl lg:text-3xl text-primary-text font-bold">Our Partners</h1>
                <p className="text-secondary-text text-lg mb-2">
                    Our official partner at Toy Gallery is none other than Playful Toys Co.
                </p>
            </div>
            <Marquee speed={100}>
                <div className="flex gap-10 items-center">
                    <img
                        className="w-40 h-16 ms-5"
                        src="https://i.ibb.co/3Yk4CjG/1280px-Vtech-logo-svg.png"
                        alt=""
                    />
                    <img
                        className="w-40 h-16"
                        src="https://i.ibb.co/nBfX3FS/bandainamco-logo.png"
                        alt=""
                    />
                    <img
                        className="w-40 h-16"
                        src="https://i.ibb.co/WNXn1TS/Fisher-Price-2019-svg.png"
                        alt=""
                    />
                    <img
                        className="w-40 h-16"
                        src="https://i.ibb.co/dJkK6g2/Hasbro-Logo-svg.png"
                        alt=""
                    />
                    <img
                        className="w-40 h-16"
                        src="https://i.ibb.co/F4bXsRq/Logo-a552d4b6-c432-4d7f-a6f0-0df9bc4c6012-216x.webp"
                        alt=""
                    />
                    <img
                        className="w-40 h-16"
                        src="https://i.ibb.co/GCGWCzh/Playmobil-logo-500x281.png"
                        alt=""
                    />
                    <img
                        className="w-40 h-16"
                        src="https://i.ibb.co/r4nrC3L/pngwing-com-1.png"
                        alt=""
                    />
                    <img
                        className="w-40 h-16"
                        src="https://i.ibb.co/sCJHQFx/pngwing-com.png"
                        alt=""
                    />
                </div>
            </Marquee>
        </div>
    );
}

export default OurPartner;
