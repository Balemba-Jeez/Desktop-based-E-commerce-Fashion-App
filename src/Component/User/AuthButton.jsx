
function AuthButton({ image, content, textColor, buttonColor, hoverColor }) {
    // img = prop.image;
    // content = prop.content;
    return (
        <div className='w-[295px] h-[36px]'>
            <button type="button"
                className={`border-solid border-2 pt-[8px] pb-[8px] px-[77px]  rounded-3xl border-[#dddddd] ${buttonColor} ${hoverColor}`}>
                <div className='flex gap-x-2.5 w-[170px]'>
                    <img src={image} alt="Google logo"
                        className='h-5 w-5' />
                    <p className={`font-sans font-bold [word-spacing:-2px] text-center  text-sm ${textColor} -mt-0.5`}>{content}</p>
                </div>
            </button>
        </div>
    );
}

export default AuthButton