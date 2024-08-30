import React from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function page() {
    return (
        <div className=" w-full min-h-60 bg-[#182540] flex flex-col justify-between items-center">
            <div>
                <h3 className="text-center text-[--bgaa] mt-10">
                    CONTACT & CONNECT WITH US{" "}
                </h3>
            </div>
            <div className="flex justify-evenly items-center text-white">
                <div>
                    <Link href="https://wa.me/+917708734164">
                        <FontAwesomeIcon
                            className="w-20 h-20 text-5xl p-1  hover:text-[--bgaa] "
                            icon={faWhatsapp}
                        />
                    </Link>
                </div>
                <div>
                    <Link href="https://www.instagram.com/kovailites1212/">
                        <FontAwesomeIcon
                            className="w-20 text-5xl p-1 hover:text-[--bgaa] "
                            icon={faInstagram}
                        />
                    </Link>
                </div>
                <div>
                    <FontAwesomeIcon
                        className="w-20 text-5xl p-1 hover:text-[--bgaa]"
                        icon={faFacebook}
                    />
                </div>
                <div>
                    <Link href="tel:+917708734164">
                        <FontAwesomeIcon
                            className="w-20 text-4xl p-1 hover:text-[--bgaa]"
                            icon={faPhone}
                        />
                    </Link>
                </div>
            </div>
            <div className="w-full bg-[--bga] text-[--bgaa] text-center text-black text-sm">
                ❤️ MADE BY SURAJ SINGH ❤️
            </div>
        </div>
    );
}

export default page;
