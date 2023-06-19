import React from 'react';
import { BsCalendar3 } from 'react-icons/bs';

function Blog() {
    return (
        <div className="mt-16">
            <div data-aos-duration="1000" className="w-full text-center mx-auto ">
                <h1 className="text-2xl lg:text-3xl text-primary-text font-bold">Our Blogs</h1>
                <p className="text-secondary-text text-lg mb-2">
                    Toymarkateplace's Guide to Choosing the Perfect Toy
                </p>
            </div>
            <div className="bg-[#f1f5f9] p-4 border border-slate-200 rounded-lg mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 ">
                    <div className="card card-compact test-start  w-full rounded-lg bg-white  dark:bg-slate-800 shadow-xl">
                        <figure>
                            <img
                                className="h-[300px] w-full rounded-t-lg"
                                src="https://m.media-amazon.com/images/I/61W3ph6vefL._SL1001_.jpg"
                                alt="class"
                            />
                        </figure>
                        <div className=" py-4 px-4 rounded-b-lg  dark:text-gray-300 text-gray-800">
                            <h2 className=" text-base font-bold  dark:text-white text-dark-grey">
                                Lukzer Science Kits with Microscope Toy Review
                            </h2>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <img
                                        className="rounded-full h-8 w-8"
                                        src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=1380&t=st=1687154537~exp=1687155137~hmac=f2b54050945299e06f31d679b60b98e849b601efb1d839b6f897960d0eb05f43"
                                        alt=""
                                    />
                                    <p>Harry Bunt</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <BsCalendar3 /> 12 Feb 2023
                                </div>
                            </div>
                            <p className="text-start mt-3">
                                The Lukzer Science Kits with Microscope toy is a captivating and
                                educational tool that opens up a whole new world of discovery for
                                young scientists. With its durable construction and user-friendly
                                design...
                                <span className="text-primary hover:underline cursor-pointer">
                                    read more
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="card card-compact test-start  w-full rounded-lg bg-white  dark:bg-slate-800 shadow-xl">
                        <figure>
                            <img
                                className="h-[300px] w-full rounded-t-lg"
                                src="https://s.alicdn.com/@sc04/kf/H66252aca1c474757987d395871c17c6fv.jpg_960x960.jpg"
                                alt="class"
                            />
                        </figure>
                        <div className=" py-4 px-4 rounded-b-lg  dark:text-gray-300 text-gray-800">
                            <h2 className=" text-base font-bold  dark:text-white text-dark-grey">
                                STEM 12-in-1 Education Solar Robot Toys
                            </h2>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <img
                                        className="rounded-full h-8 w-8"
                                        src="https://res.cloudinary.com/dcpdcdfxy/image/upload/v1686536686/CreativeEye/pv8irgvatakvcw2zsba4.jpg"
                                        alt=""
                                    />
                                    <p>Elon</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <BsCalendar3 /> 12 Feb 2023
                                </div>
                            </div>
                            <p className="text-start mt-3">
                                include guide for 12 robot designs in details from level 1 to level
                                2, easy to build as guide step by step.It's fit for boys and girls
                                aged 8-10 and older, great robot toys encourage your child to learn
                                through play...
                                <span className="text-primary hover:underline cursor-pointer">
                                    read more
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="card card-compact test-start  w-full rounded-lg bg-white  dark:bg-slate-800 shadow-xl">
                        <figure>
                            <img
                                className="h-[300px] w-full rounded-t-lg"
                                src="https://s.alicdn.com/@sc04/kf/Hb1dd57bdd98d4245bd69bbb8f0903412Q.jpg_960x960.jpg"
                                alt="class"
                            />
                        </figure>
                        <div className=" py-4 px-4 rounded-b-lg  dark:text-gray-300 text-gray-800">
                            <h2 className=" text-base font-bold  dark:text-white text-dark-grey">
                                CYOEST 4 sets in 1 Electric Science Experiment Projects
                            </h2>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <img
                                        className="rounded-full h-8 w-8"
                                        src="https://res.cloudinary.com/dcpdcdfxy/image/upload/v1686392484/cld-sample.jpg"
                                        alt=""
                                    />
                                    <p>Harika</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <BsCalendar3 /> 10 May 2023
                                </div>
                            </div>
                            <p className="text-start mt-3">
                                CYOEST is a company founded in 2016 that specializes in designing,
                                producing, and selling mechanical 3D puzzles, STEM building kits,
                                toys, and souvenirs. Providing products that are more stable in
                                function...
                                <span className="text-primary hover:underline cursor-pointer">
                                    read more
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
