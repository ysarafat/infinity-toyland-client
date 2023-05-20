/* eslint-disable react/no-unescaped-entities */

function SubscribeForm() {
    return (
        <div className="my-10 border border-slate-200 rounded-lg">
            <div className=" flex justify-between items-center flex-col lg:flex-row">
                <img
                    className="lg:max-w-[600px] max-h-[800px] rounded-lg"
                    src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2020_12/1549418/educational-toys-kids-coronavirus-code-botzee-today-main1-200317.jpg"
                    alt=""
                />
                <div
                    className="px-4 container mx-auto flex justify-center items-center flex-col py-14"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    <h1 className="text-primary-text text-2xl font-bold uppercase">
                        Get Toys update
                    </h1>
                    <p className="sub_title text-secondary-text mt-3 mb-6 w-[90%] text-center">
                        The subscription form typically asks for the individual's name and email
                        address. Once the form is submitted, the individual will receive periodic
                        emails containing the latest updates and information related to the
                        subscribed topic.
                    </p>
                    <form>
                        <input
                            className="max-w-full lg:w-[600px] outline-none border border-primary text-text-secondary h-[44px] rounded-s-lg px-3"
                            type="email"
                            placeholder="example@gmail.com"
                            required
                        />
                        <input
                            className="h-[44px] bg-primary hover:bg-secondary duration-300 px-5 text-white rounded-e-lg shadow-lg"
                            type="submit"
                            value="Subscribe"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SubscribeForm;
