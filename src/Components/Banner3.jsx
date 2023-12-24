const Banner3 = () => {

    return (
        <div>
            <div>
                <div className="py-10 bg-[#F2F2F2] h-screen flex items-center">
                    <div className="flex justify-center items-center lg:flex-row md:flex-row flex-col-reverse container mx-auto">
                        <div className="space-y-6 pl-4 basis1/2">
                            <h1 className="lg:text-6xl md:text-4xl text-2xl mt-4 font-extrabold text-black line leading-tight font-poppins">
                                Fresh & Healthy <span className="text-[#00B207]"> Organic</span> Food
                            </h1>
                            <p className="lg:text-2xl md:text-lg text-base font-medium text-[#4A4A4A] leading-tight">Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                            <button className='btn bg-[#00B207] text-[#fff] hover:bg-[#2c9e30]'>Order Now</button>
                        </div>
                        <div className="basis-1/2">
                            <div className="relative flex justify-center">
                                <img className="w-full" src='https://i.ibb.co/6NbfRzq/Image1.png' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner3;