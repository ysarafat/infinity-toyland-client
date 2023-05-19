import React from 'react';

function Gallery() {
    return (
        <div className="my-16">
            <div data-aos-duration="1000" className="w-full text-center mx-auto ">
                <h1 className="text-2xl lg:text-3xl text-primary-text font-bold">Toy Gallery</h1>
                <p className="text-secondary-text text-lg mb-2">
                    Welcome to Toy Gallery, the ultimate destination for toy enthusiasts of all
                    ages!
                </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 bg-[#f1f5f9] p-4 border border-slate-200 rounded-lg">
                <img
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    className=" h-[300px] w-full rounded"
                    src="https://i.ibb.co/5vMXcJ6/mathematics-g1f9f62d70-1920.webp"
                    alt=""
                />
                <img
                    data-aos="zoom-out"
                    data-aos-duration="800"
                    className=" h-[300px] w-full rounded"
                    src="https://i.ibb.co/31QGJy4/garden-trains-gbd96aaef7-1920.webp"
                    alt=""
                />
                <img
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    className=" h-[300px] w-full rounded"
                    src="https://i.ibb.co/zHPStx4/tank-g358420981-1920.webp"
                    alt=""
                />
                <img
                    data-aos="zoom-out"
                    data-aos-duration="800"
                    className=" h-[300px] w-full rounded"
                    src="https://i.ibb.co/gyn5NMM/school-ge3d1d4872-1920.webp"
                    alt=""
                />

                <img
                    data-aos="zoom-in-down"
                    data-aos-duration="800"
                    className="col-span-2  h-[500px] w-full rounded"
                    src="https://i.ibb.co/23Q6S2r/abacus-g49b8df24b-1920.webp"
                    alt=""
                />
                <img
                    data-aos="zoom-out-down"
                    data-aos-duration="800"
                    className=" lg:col-span-2  h-[300px] lg:h-[500px] w-full rounded"
                    src="https://i.ibb.co/jJwvQtY/robot-gec9ce276e-1920.webp"
                    alt=""
                />
                <img
                    data-aos="zoom-out"
                    data-aos-duration="800"
                    className=" h-[300px] w-full rounded"
                    src="https://images.pexels.com/photos/7750694/pexels-photo-7750694.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                />
                <img
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    className=" h-[300px] w-full rounded"
                    src="https://i.ibb.co/jRSp7tx/little-boy-as-chemist-doing-experiment-with-chemical-fluid-laboratory-155003-9059.webp"
                    alt=""
                />
                <img
                    data-aos="zoom-out"
                    data-aos-duration="800"
                    className=" h-[300px] w-full rounded"
                    src="https://i.ibb.co/wyx6cjp/chernaya-8535236.webp"
                    alt=""
                />
                <img
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    className=" col-span-2 lg:col-span-1 h-[300px] w-full rounded"
                    src="https://i.ibb.co/7W1Hqp7/3887279-11674.webp"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Gallery;
