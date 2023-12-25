
const Download = () => {

    return (
        <div className="container mx-auto my-10 md:px-0 px-6">
        <h1 className="text-center lg:text-5xl md:text-3xl text-2xl font-bold font-poppins text-color my-10">Users and Download</h1>
            <div className="stats-vertical md:stats-horizontal stats w-full border-0">
                <div className="stat flex flex-col items-center">
                    <div className="stat-title">Download App</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Dec 1st</div>
                </div>

                <div className="stat flex flex-col items-center">
                    <div className="stat-title">Total Registers</div>
                    <div className="stat-value">40K</div>
                </div>

                <div className="stat flex flex-col items-center">
                    <div className="stat-title">Successfully On Time Delivery</div>
                    <div className="stat-value">100%</div>
                </div>
            </div>
        </div>
    );
};

export default Download;