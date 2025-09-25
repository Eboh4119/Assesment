"use client"

import Image from "next/image";
import Wrapper from "../ReusableComp/wrapper"

function Footer(){
    return(
        
            <div className="bg-stone-800 w-full flex justify-between items-center py-3">
                <div className="flex items-center gap-2">
                    <Image 
                    src={'/icon/krea-logo2.svg'}
                    alt="Krea"
                    width={40}
                    height={40}
                    color="white"
                    />
                    <h2 className="text-2xl text-white">Krea AI</h2>
                </div>

                <div className="text-2xl text-white flex items-center gap-2 pr-3">
                    curated by

                    <Image 
                    src={'/icon/mobbin-logo.svg'}
                    alt="mobbin"
                    width={40}
                    height={30}
                    />

                    <h2>Mobbin</h2>
                </div>
            </div>
        
    )
}

export default Footer;