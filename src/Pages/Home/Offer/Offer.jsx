import React from 'react';
import './Offer.css';

function Offer() {
    return (
        <div className="mt-16">
            <div data-aos-duration="1000" className="w-full text-center mx-auto ">
                <h1 className="text-2xl lg:text-3xl text-primary-text font-bold">
                    Black Friday Offer
                </h1>
                <p className="text-secondary-text text-lg mb-2">
                    Welcome to Toy Gallery, the ultimate destination for toy enthusiasts of all
                    ages!
                </p>
            </div>
            <div className="offer_bg w-full container mx-auto rounded-lg mt-10 lg:px-32">
                <div className="container mx-auto px-4 flex justify-between items-center flex-col lg:flex-row py-8">
                    <img
                        className="lg:max-w-[600px] max-h-[800px]"
                        src="https://i.ibb.co/vYyjVLc/My-project.png"
                        alt=""
                    />
                    <div>
                        <p className="text-lg text-white uppercase">Weekend Offer</p>
                        <h1 className="lg:text-7xl text-4xl text-primary  font-bold ">30% OFF</h1>
                        <p className="text-lg text-white ">
                            Infinity Toyland, we believe in the power of imagination and play.{' '}
                        </p>
                        <div className="flex items-center mt-5 gap-6">
                            <button
                                title="copy promo code"
                                className="py-2 px-6 bg-transparent border border-white text-lg text-white rounded-lg hover:bg-secondary duration-300"
                            >
                                Know More
                            </button>
                            <button className="py-2 px-6 bg-primary text-lg border border-primary hover:border-white text-white rounded-lg hover:bg-secondary duration-300">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offer;
