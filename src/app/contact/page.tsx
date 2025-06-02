
import Link from "next/link";
import React from "react";

export default function contactDetails(){
    return(
        <div>
            <p className="h-1.5 p-7">mogalapallilokesh@gmail.com</p>
            <Link href="/" className="p-4" >
                    <button className="default cursor-pointer" >Back</button>
                    </Link>
            
        </div>
        
    )
}