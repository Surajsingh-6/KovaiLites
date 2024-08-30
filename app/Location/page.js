"use client"
import React from "react";

function page() {
    const handleit = () => {
        navigator.clipboard.writeText(
            "Ground Floor, Madhukar Complex, RAILWAY STATION, 915/16, near Coimbatore, Avanashi Road Main Flyover, Anupperpalayam, Gopalapuram, Coimbatore, Tamil Nadu 641018"
        );
        alert("Address Copied");
    };
    return (
        <div className="min-h-fit w-full bg-[#182540] pt-5">
            <div className="w-full flex justify-center items-center my-5">
                <div className=" text-[--bgaa]  p-4 text-4xl font-semibold">
                    LOCATION
                </div>
            </div>
            <div className="text-white w-full flex flex-col gap-5 justify-between items-center lg:flex-row lg:justify-evenly">
                <div className="helo">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15665.938687414042!2d76.9648716!3d11.0022161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a7faf7710d%3A0x9fd0799b5f4fdcd1!2sKovai%20Lites!5e0!3m2!1sen!2sin!4v1724972452045!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div>
                    <div className="text-xl underline decoration-[--bgaa] "> ADDRESS:</div>
                    <div className="font-mono">
                        Ground Floor, Madhukar Complex,
                        <br /> RAILWAY STATION, 915/16,
                        <br /> near Coimbatore,
                        <br /> Avanashi Road Main Flyover, <br />
                        Anupperpalayam, Gopalapuram,
                        <br /> Coimbatore, Tamil Nadu <br /> 641018
                        
                        <button onClick={handleit} className="bg-[--bga] p-1 rounded-xl text-black text-sm font-mono mx-5">COPY</button>
                    </div>
                    
                    <div>
                        <div>PH: <a href="tel:+917708734164">077087341641</a></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default page;

// Ground Floor, Madhukar Complex, RAILWAY STATION, 915/16, near Coimbatore, Avanashi Road Main Flyover, Anupperpalayam, Gopalapuram, Coimbatore, Tamil Nadu 641018
