
function SubmitButton({ content, textColor, buttonColor, hoverColor }) {
    // img = prop.image;
    // content = prop.content;
    return (
        <div className='w-[295px] h-[36px]'>
            <button type="button"
                className={`border-solid border-2 pt-[13px] pb-[13px] px-[133px] rounded-3xl border-[f3f3f3] ${buttonColor} ${hoverColor}`}>
                <div className='w-[60px] h-[20px] -mt-[8px]'>
                    <p className={`font-sans font-bold [word-spacing:-2px] text-center  text-base ${textColor} -mt-0.5`}>{content}</p>
                </div>
            </button>
        </div>
    );
}

export default SubmitButton