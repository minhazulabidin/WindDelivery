import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hook/hook";
import Swal from "sweetalert2";


const SocialUser = () => {
    const { handleGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation()

    const handleSocialSignIn = (media) => {
        media()
            .then(res => {
                Swal.fire({
                    icon: "success",
                    title: `Welcome to windDelivery ${res.user.displayName}`,
                  });
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: `${err.status}` `${err.message}`,
                    text: "Something went wrong!"
                  });
            })
    }

    return (
        <div className="space-y-3">
            <p className='text-center text-base'>Continue with</p>
            <div className="flex w-1/2 mx-auto items-center bg-[#000] justify-center py-2 rounded-lg cursor-pointer text-color2 font-bold" onClick={() => handleSocialSignIn(handleGoogle)}>
                <FaGoogle className="mr-2 text-color2" />Google
            </div>
        </div>
    );
};

export default SocialUser;