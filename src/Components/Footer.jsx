import { Link } from "react-router-dom";
import logo from '../assets/fav.png'
import moment from "moment";

const Footer = () => {

    return (
        <footer className="md:px-10 px-4 pt-10 pb-4 bg-base-200 text-base-content mt-8">
            <div className="container mx-auto footer">
                <div className="flex items-center">
                    <div>
                        <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse ">
                            <span className="self-center flex text-xl italic font-bold text-pink-800"><img src={logo} className="mr-1" alt="" /> WindDelivery</span>
                        </Link>
                        <p className="lg:text-xl font-poppins italic text-base">Making deliveries and pickups <br /> so easy.</p>
                    </div>
                </div>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">All Foods</a>
                    <a className="link link-hover">Blogs</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <div>
                    <h1 className="font-black lg:text-2xl text-xl font-poppins text-[#44455B]">Have you got our app?</h1>
                    <p className="font-poppins lg:text-lg text-base">Best cook and best delivery guys all at your service.</p>
                    <div className="flex">
                        <button className="flex items-center btn btn-md bg-[#000] text-[#fff] hover:bg-[#000] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <path d="M0.301025 2.69794V31.41C0.301237 31.4723 0.321691 31.5332 0.359821 31.585C0.397952 31.6367 0.452062 31.6771 0.515366 31.7011C0.57867 31.725 0.648351 31.7315 0.715671 31.7196C0.78299 31.7077 0.844951 31.6781 0.893785 31.6343L17.3519 17.0547L0.893785 2.47364C0.844951 2.42991 0.78299 2.40024 0.715671 2.38837C0.648351 2.37649 0.57867 2.38294 0.515366 2.40689C0.452062 2.43084 0.397952 2.47124 0.359821 2.52302C0.321691 2.57479 0.301237 2.63564 0.301025 2.69794ZM24.2527 11.0639L3.6163 0.736307L3.60343 0.729731C3.24793 0.55439 2.91013 0.991282 3.20128 1.24553L19.3779 15.2962L24.2527 11.0639ZM3.20289 32.8639C2.91013 33.1182 3.24793 33.555 3.60504 33.3797L3.6179 33.3731L24.2527 23.0455L19.3779 18.8118L3.20289 32.8639ZM32.5835 15.2282L26.8208 12.3453L21.4023 17.0547L26.8208 21.7619L32.5835 18.8812C34.151 18.0943 34.151 16.0151 32.5835 15.2282Z" fill="#FF8E0A" />
                            </svg>
                            Play store
                        </button>
                        <button className="flex items-center btn bg-[#000] text-[#fff] hover:bg-[#000]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path d="M26.7183 0.281006H3.28719C1.52347 0.281006 0.092041 1.71243 0.092041 3.47615V26.9072C0.092041 28.671 1.52347 30.1024 3.28719 30.1024H26.7183C28.482 30.1024 29.9134 28.671 29.9134 26.9072V3.47615C29.9134 1.71243 28.482 0.281006 26.7183 0.281006ZM8.5464 23.7451C8.36986 24.0505 8.07925 24.2732 7.7385 24.3642C7.39775 24.4553 7.03478 24.4073 6.72943 24.2308C6.42408 24.0542 6.20137 23.7636 6.11029 23.4229C6.01921 23.0821 6.06722 22.7191 6.24376 22.4138L7.19592 20.7694C8.26736 20.4435 9.14602 20.6959 9.83192 21.5277L8.5464 23.7451ZM17.7921 20.158H5.68355C4.9508 20.158 4.35224 19.5584 4.35224 18.8267C4.35224 18.095 4.95186 17.4954 5.68355 17.4954H9.07893L13.4318 9.96017L12.0675 7.60428C11.8919 7.29872 11.8444 6.93606 11.9354 6.59559C12.0264 6.25512 12.2485 5.96452 12.5531 5.78731C12.8587 5.61172 13.2213 5.56424 13.5618 5.65524C13.9023 5.74625 14.1929 5.96834 14.3701 6.27297L14.9623 7.29755L15.5544 6.27297C15.6418 6.12178 15.7582 5.98928 15.8968 5.88305C16.0354 5.77682 16.1936 5.69893 16.3623 5.65383C16.531 5.60874 16.707 5.59731 16.8801 5.62021C17.0533 5.64312 17.2202 5.69989 17.3714 5.78731C17.5226 5.87472 17.6551 5.99106 17.7613 6.12968C17.8675 6.2683 17.9454 6.42649 17.9905 6.59521C18.0356 6.76393 18.0471 6.93989 18.0242 7.11302C18.0013 7.28616 17.9445 7.45309 17.8571 7.60428L12.1463 17.4965H16.2797C17.6238 17.4965 18.3768 19.0738 17.791 20.1591L17.7921 20.158ZM24.3219 20.158H22.391L23.6957 22.4149C24.062 23.0539 23.8416 23.8665 23.21 24.2318C22.571 24.5982 21.7583 24.3777 21.393 23.7462C19.2033 19.9589 17.5652 17.1098 16.4672 15.2194C15.3553 13.2884 16.1477 11.3586 16.9401 10.7068C17.8123 12.2181 19.117 14.4813 20.8605 17.4965H24.3219C24.675 17.4965 25.0136 17.6367 25.2633 17.8864C25.513 18.1361 25.6532 18.4747 25.6532 18.8278C25.6532 19.1809 25.513 19.5195 25.2633 19.7692C25.0136 20.0188 24.675 20.1591 24.3219 20.1591V20.158Z" fill="#FF8E0A" />
                            </svg>
                            App store
                        </button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <aside className="flex justify-center">
                <p className="text-center text-sm md:text-base">{moment().format('YYYY')} All right reserved by <span className="text-pink-800 font-bold italic"> WindDelivery</span></p>
            </aside>
        </footer>

    );
};

export default Footer;