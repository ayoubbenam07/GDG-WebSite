import Navbar from './Navbar'
function Hero(){
    return(
        <>
            <div className="relative bg-[url('./images/HeroImg.png')] bg-cover h-[840px]">
                <Navbar />
                <div className="absolute bottom-40 left-12 font-pt text-white">
                    <p className="text-[40px] m-0">There’s Always Something Happening at GDG ENSIA</p>
                    <p className="text-[64px] m-0">GDG Open Day </p>
                    <p className="text-[48px]">16 oct</p>
                </div>
            </div>
        </>
    );
};

export default Hero; 