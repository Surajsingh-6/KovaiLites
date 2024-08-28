import React from "react";

function page() {
    return (
      <div className="h-screen w-full px-auto mt-16">
        <div className="text-2xl font-semibold text-center leading-[4.5rem]">
          <span className="text-[var(--bgaa)]">Brighten</span> Your Day,{" "}
          <br /> The{" "}
          <span className="text-[var(--bgaa)]">Affordable</span> Way,{" "}
          <br /> Led Variety on{" "}
          <span className="text-[var(--bgaa)]">Display</span>.
        </div>
        <div className="text-center mt-5">
          <button className="bg-[var(--bgaa)] text-black px-5 py-2 rounded-3xl">
            Explore Collections
          </button>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-10">
          <h3 className="text-xl m-5">FEATURED ON YOUTUBE</h3>
          <div className="w-5/6">
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/B5f6qpjA_sQ?si=nhDu3RxvVOqGqHwG"
                width="100%"
                height="100%"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
}

export default page;
