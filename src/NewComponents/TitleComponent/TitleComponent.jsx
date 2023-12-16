
const TitleComponent = ({title,subTitle}) => {
    return (
        <div className="text-center w-full">
            <p className="text-[#181d4e] font-medium mt-5 uppercase">{title}</p>
            <h2 className="text-5xl text-[#181d4e] font-semibold mt-5">{subTitle}</h2>
        </div>
    );
};

export default TitleComponent;