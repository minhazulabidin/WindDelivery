import './Banner2.css'
const Banner2 = () => {


    return (
        <div>
            <div className="banner2 py-10 h-screen flex items-center">
                <div className="flex justify-center items-center lg:flex-row md:flex-row flex-col-reverse container mx-auto">
                    <div className="space-y-6 pl-4 basis1/2">
                        <h1 className="lg:text-8xl md:text-4xl text-2xl mt-4 font-extrabold text-black line leading-tight font-poppins">
                           <span className='text-[#FF7E00]'>Fast</span> Food Delivery
                        </h1>
                        <p className="lg:text-2xl md:text-lg text-base font-medium text-[#4A4A4A] leading-tight">Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                        <button className='btn bg-[#FF7E00] text-white hover:bg-[#af7031]'>Order Now</button>
                    </div>
                    <div className="basis-1/2">
                        <div className="relative flex justify-center">
                            <img className="w-full" src='https://i.ibb.co/x8gvrMm/17372-Converted.png' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;