/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
import { RiDoubleQuotesL } from 'react-icons/ri';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import 'swiper/css';
import 'swiper/css/navigation';

function Testimonials() {
    return (
        <section className="mb-20 max-w-screen-xl mx-auto px-4 mt-16">
            <div data-aos-duration="1000" className="w-full text-center mx-auto mb-10">
                <h1 className="text-2xl lg:text-3xl text-primary-text font-bold">Testimonials</h1>
                <p className="text-secondary-text text-lg mb-2">
                    Parents Delighted by the Educational Value and Entertainment
                </p>
            </div>

            <Swiper navigation modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="flex flex-col items-center mx-20">
                        <Rating style={{ maxWidth: 280 }} value={5} readOnly />
                        <RiDoubleQuotesL size={100} color="#808080" />
                        <p className="text-xl text-cinder text-center mt-10">
                            My daughter absolutely loves the Lukzer Science Kits with Microscope
                            toy! It has sparked her curiosity about the microscopic world and opened
                            her eyes to the wonders of science. The quality of the microscope is
                            impressive, and the prepared slides provide a great variety of specimens
                            for her to explore. It's been a fantastic learning tool that keeps her
                            engaged for hours.
                        </p>
                        <h3 className="text-2xl text-yellowOchre mt-2">- Sarah M. Testim</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center mx-20">
                        <Rating style={{ maxWidth: 280 }} value={5} readOnly />
                        <RiDoubleQuotesL size={100} color="#808080" />
                        <p className="text-xl text-cinder text-center mt-10">
                            As a science teacher, I highly recommend the Lukzer Science Kits with
                            Microscope toy. It's a fantastic resource for hands-on learning in the
                            classroom. The microscope is sturdy and easy to use, making it
                            accessible for students of all ages. The prepared slides cover a wide
                            range of topics, allowing my students to delve into different areas of
                            science. It's an excellent educational tool that has enhanced our
                            science curriculum.
                        </p>
                        <h3 className="text-2xl text-yellowOchre mt-2">
                            - Mr. Johnson, Science Teacher
                        </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center mx-20">
                        <Rating style={{ maxWidth: 280 }} value={5} readOnly />
                        <RiDoubleQuotesL size={100} color="#808080" />
                        <p className="text-xl text-cinder text-center mt-10">
                            Buying the Lukzer Science Kits with Microscope toy was the best decision
                            for my inquisitive son. He spends hours exploring the microscopic world,
                            and it has ignited a passion for science in him. The kit is well-made,
                            and the microscope provides clear and detailed views. It's a great
                            investment in his education and has become his favorite pastime.
                        </p>
                        <h3 className="text-2xl text-yellowOchre mt-2">- Mark D.</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Testimonials;
