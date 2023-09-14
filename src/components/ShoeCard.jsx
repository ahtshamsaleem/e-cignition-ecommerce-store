const ShoeCard = ({ img, changeBigHeroImage, bigHeroImg, setHeroClr, id, setBgBtnClr, setHeadingClr }) => {


    const changeClrFunc = () => {

        let clrWillBe;
        let HeadingClr;
        let bgClrWillBe;

        switch (id) {
            case 'h1':
                clrWillBe = 'text-green-500'
                bgClrWillBe = 'bg-green-500';
                HeadingClr = 'text-transparent bg-clip-text bg-gradient-to-r to-green-500 from-slate-800';
                break;
            case 'h2':
                clrWillBe = 'text-blue-500';
                bgClrWillBe = 'bg-blue-500';
                HeadingClr = 'text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-slate-800';
                break
            case 'h3':
                clrWillBe = 'text-orange-500';
                bgClrWillBe = 'bg-orange-500';
                HeadingClr = 'text-transparent bg-clip-text bg-gradient-to-r to-orange-500 from-slate-800';
                break
            default:
                break;
        }

        setHeroClr(clrWillBe);
        setBgBtnClr(bgClrWillBe);
        setHeadingClr(HeadingClr);

    }







    const handleClick = () => {
        changeClrFunc()
        changeBigHeroImage(img);
    };

    return (
        <div
            className={`border-2 rounded-xl ${
                bigHeroImg === img ? "border-coral-red" : "border-transparent"
            } cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img
                    src={img}
                    alt='shoe colletion'
                    width={127}
                    height={103.34}
                    className='object-contain'
                />
            </div>

            
        </div>
    );
};

export default ShoeCard;
