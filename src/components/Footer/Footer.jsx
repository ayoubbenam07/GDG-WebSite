import styles from "./Footer.module.css";

function Footer(){
    return(
        <>
        <div className={`${styles.footer} bg-black px-20 xl:px-50 py-7 flex flex-col justify-center relative`}>
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center mx-auto md:mx-0">
                    <div className="w-[60px] h-[37px]">
                        <img src="images\GDG-Logo.svg" alt="" />
                    </div>
                    <p className="font-pt text-sm text-white">
                        Google Developer Group <span  className="font-bold">ENSIA</span>
                    </p>
            </div>
            <div className="hidden md:flex justify-between items-center gap-6">
                <a href=""><img src="./icons/facebook.svg" alt="" className="cursor-pointer" /></a>
                <a href=""><img src="./icons/instagram.svg" alt="" className="cursor-pointer" /></a>
                <a href=""><img src="./icons/twitter.svg" alt="" className="cursor-pointer" /></a>
                <a href=""><img src="./icons/youtube.svg" alt="" className="cursor-pointer" /></a>
            </div>
        </div>
        <p className="text-white font-sm w-[300px] text-center mx-auto md:mx-0"><span className="font-medium">©</span> 2025 GDG</p>
        <div className="flex justify-center items-center gap-6 md:hidden my-12">
            <a href=""><img src="./icons/facebook.svg" alt="" className="cursor-pointer" /></a>
            <a href=""><img src="./icons/instagram.svg" alt="" className="cursor-pointer" /></a>
            <a href=""><img src="./icons/twitter.svg" alt="" className="cursor-pointer" /></a>
            <a href=""><img src="./icons/youtube.svg" alt="" className="cursor-pointer" /></a>
        </div>
        </div>
        </>
    );
}

export default Footer