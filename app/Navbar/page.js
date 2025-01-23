import React from "react";
import Link from "next/link";

function page() {
    return (
        <div className="w-full h-12 bg-[var(--bga)] flex px-5 justify-between items-center p-2 lg:px-20">
            <div className="brunoAceSc text-2xl w-full md:w-fit flex justify-center md:flex-none">
                <Link href="/">
                    <h7>Kovai Lites</h7>
                </Link>
            </div>
            <div className="hidden md:flex gap-5 items-center justify-between ">
                <div><Link href="/">Home</Link></div>
                <div><Link href="/Search">Search</Link></div>
                <div><Link href="/collection">Collections</Link></div>
                <div><Link href="/Location">Location</Link></div>
                <div><Link href="ttel:+917708734164">Contact</Link></div>
            </div>
        </div>
    );
}

export default page;
