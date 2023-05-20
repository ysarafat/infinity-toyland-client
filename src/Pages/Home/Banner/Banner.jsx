import { Carousel } from 'flowbite-react';
import React from 'react';
import img from '../../../assets/71dr5iVUoZL._SL1500_.webp';
import './Banner.css';

function Banner() {
    return (
        <div className="h-[600px] mt-4">
            <Carousel slide={false}>
                <div className=" h-full  slider_1 ">
                    <div className="flex flex-col lg:flex-row justify-between items-center mx-auto w-[80%] text-center py-5">
                        <div className="lg:text-start">
                            <h1 className="text-3xl lg:text-5xl font-semibold text-white mb-2 ">
                                Safe and Educational Toys for Your Little One
                            </h1>
                            <p className="text-base lg:text-lg text-slate-200 mb-4">
                                Buying baby toys can be a daunting task. There are so many different
                                toys on the market.
                            </p>
                            <button className="h-11 px-4 bg-primary hover:bg-secondary rounded-lg text-base text-white">
                                Order Now
                            </button>
                        </div>
                        <img src="https://i.ibb.co/7v30NYG/My-project-1.webp" alt="" />
                    </div>
                </div>
                <div className=" slider_2  h-full ">
                    <div className="flex flex-col lg:flex-row justify-between items-center mx-auto w-[80%] text-center py-5">
                        <div className="lg:text-start">
                            <h1 className="text-3xl lg:text-5xl font-semibold text-white mb-2 ">
                                Portable Engineering Tools kit Toolbox Toys Set
                            </h1>
                            <p className="text-base lg:text-lg text-slate-200 mb-4">
                                Buying baby toys can be a daunting task. There are so many different
                                toys on the market.
                            </p>
                            <button className="h-11 px-4 bg-primary hover:bg-secondary rounded-lg text-base text-white">
                                Order Now
                            </button>
                        </div>
                        <img
                            src="https://i.ibb.co/HVbpqqF/61z-mqx-HUs-L-SL1000-removebg-preview.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className=" slider_3  h-full ">
                    <div className="flex flex-col lg:flex-row justify-between items-center mx-auto w-[80%] text-center py-5">
                        <div className="lg:text-start">
                            <h1 className="text-3xl lg:text-5xl font-semibold text-white mb-2 ">
                                Safe and Educational Toys for Your Little One
                            </h1>
                            <p className="text-base lg:text-lg text-slate-200 mb-4">
                                Buying baby toys can be a daunting task. There are so many different
                                toys on the market.
                            </p>
                            <button className="h-11 px-4 bg-primary hover:bg-secondary rounded-lg text-base text-white">
                                Order Now
                            </button>
                        </div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default Banner;
