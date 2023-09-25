const ShoeCard = ({ img, changeBigHeroImage, bigHeroImg, setHeroClr, id, setBgBtnClr, setHeadingClr,  change2Green,  change2Blue,  change2Orange }) => {


    const changeClrFunc = () => {

        let clrWillBe;
        let HeadingClr;
        let bgClrWillBe;

        switch (id) {
            case 'h1':
                change2Green();
                
                break;
            case 'h2':
                change2Blue()
                
                break
            case 'h3':
                change2Orange()
                
                break
            default:
                break;
        }

        // setHeroClr(clrWillBe);
        // setBgBtnClr(bgClrWillBe);
        // setHeadingClr(HeadingClr);

    }







    const handleClick = () => {
        changeClrFunc()
        // changeBigHeroImage(img);
    };

    return (
        <div
            className={`border-2 rounded-xl ${
                bigHeroImg === img ? "border-coral-red" : "border-transparent"
            } cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-28 sm:h-28 rounded-xl max-sm:p-4'>
                <img
                    src={img}
                    alt='pods collection'
                    width={127}
                    height={103.34}
                    className='object-contain'
                />
            </div>

            
        </div>
    );
};

export default ShoeCard;
