import AuthButton from "../../Component/User/AuthButton";
import twitterlogo from "../../Assets/twitter.png";
import googlelogo from "../../Assets/googlelogo.png";
import InputField from "../../Component/User/InputField";
import SubmitButton from "../../Component/User/SubmitButton";
import SignupBG from '../../Assets/Signupbackground.jpg';
import SignupBGCROP from '../../Assets/Signupbackgroundcrop.jpg';
export default function SignupPage() {
    return (

        <div className="flex flex-row gap-x-28 min-h-screen pl-36 pt-1">{/**Main box */}


            <div className="flex flex-col gap-y-11  w-[334px]  mt-[40px]">{/**MainLeft Box*/}
                <div className="flex flex-col gap-y-2.5">{/**MainLeft-Top Box*/}

                    <div className="flex flex-col gap-y-7">{/**Text-Auth  OR-Option Box*/}
                        <div className="h-[165px] flex flex-col justify-between">{/**Text-Auth Box */}
                            <div className="flex flex-col justify-between  h-[55px]">{/**Text box */}
                                <h1 className="text-2xl font-bold font-sans [word-spacing:-2px]">Create a free account</h1>
                                <h5 className="text-m font-sans text-[#817e7e]">Your one-stop shop for all things fashion.</h5>
                            </div>
                            <div className="h-[85px] flex flex-col justify-between">{/**Auth box */}
                                <AuthButton image={googlelogo} content={"Sign up with Google"} textColor="text-[black]" buttonColor="bg-[#ffffff]" hoverColor="hover:bg-[#DDDDDD]" />
                                <AuthButton image={twitterlogo} content={"Sign up with X"} textColor="text-[white]" buttonColor="bg-[#000000]" hoverColor="hover:bg-[#282828]" />
                            </div>
                        </div>

                        <div className="flex flex-row gap-x-1">{/**OR-Option */}
                            <div className="border-solid border border-[#d5d5d6] w-[148px] h-0"></div>
                            <p className="font-bold text-[#838080] text-sm font-sans -mt-[10px]">OR</p>
                            <div className="border-solid border border-[#d5d5d6] w-[148px] h-0"></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-6">{/**InputField-SubmitButton Box*/}
                        <div className="flex flex-col gap-y-2">{/**Input Box */}
                            <InputField label="Name" type="text" placeholder="Enter your name" />
                            <InputField label="Email" type="email" placeholder="Enter your email" />
                            <InputField label="Password" type="password" placeholder="Create a password" />
                        </div>
                        <div className="flex flex-col gap-y-6">
                            <SubmitButton content="Sign up" textColor="text-[#ffffff]" buttonColor="bg-[#000000]" hoverColor="hover:bg-[#282828]" />
                            <p className="text-sm font-sans text-[#817e7e] [word-spacing:-0.5px] text-center">Already have an account? <a href="" className="font-bold text-black [word-spacing:-1.5px] underline">Log in</a></p>
                        </div>
                    </div>

                </div>

                <div className="">{/**MainLeft-Bottom Box*/}
                    <p className="text-sm font-sans text-[#817e7e] [word-spacing:-0.5px] text-center">By creating an account, you agree to our <a href="" className="font-normal text-[#817e7e] [word-spacing:-1.5px] underline">terms of use</a></p>
                </div>
            </div>

            <div className="h-[660px] w-[650px] border-solid  rounded-[30px] my-4">{/**MainRight Box*/}
                <img src={SignupBGCROP} alt="" className="rounded-[25px] w-[650px] h-[655px]" />
            </div>

        </div>
    );
}