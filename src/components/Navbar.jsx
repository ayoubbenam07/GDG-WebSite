function Navbar(){
    return(
    <>
    <div className="z-10 absolute w-1/1 px-[80px] mx-auto h-[68px] bg-white/80 flex justify-between items-center font-pt">
        <div className="flex gap-2 items-center">
            <div className="w-[60px] h-[37px]">
                <img src="images\GDG-Logo.svg" alt="" />
            </div>
            <p className="font-pt text-sm">
                Google Developer Group <span  className="font-bold">ENSIA</span>
            </p>
        </div>
        <div className="flex gap-[40px] items-center text-md font-medium">
            <a href="">Home</a>
            <a href="">Events</a>
            <a href="">About</a>
            <button className="rounded-full text-white bg-gradient-to-r from-[#4285F4]  via-[#F8AA00] to-[#E94335] px-[30px] py-[3px] border border-black">Register</button>
        </div>
    </div>
    </>
    );
};

export default Navbar;