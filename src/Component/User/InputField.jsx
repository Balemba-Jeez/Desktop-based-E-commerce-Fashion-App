function InputField({ label, type, placeholder }) {
    return (
        <div className="flex flex-col items-start gap-y-1">
            <label for="text_name" className="font-sans font-bold [word-spacing:-2px]">{label}<sup className="font-bold text-sm -top-px">*</sup></label>
            <input type={type} placeholder={placeholder} id="text_name" className="[word-spacing:-1.5px] font-medium pt-[7px] pb-[7px] pl-[12px] pr-[128px] border-solid border-2  rounded-3xl border-[#dddddd] font-sans text-left text-base outline-none focus:border-solid focus:border-2 focus:border-[black]" />
        </div >
    );
}

export default InputField;