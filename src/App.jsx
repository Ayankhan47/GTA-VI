import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const [showContent, setshowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });

    tl.to(".vi-mask-group", {
      transformOrigin: "50% 50%",
      rotate: 20,
      duration: 2,
      ease: "power4.easeInOut",
    }).to(".vi-mask-group", {
      opacity: 0,
      scale: 10,
      duration: 2,
      delay: -2.1,
      ease: "Expo.easeInOut",
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setshowContent(true);
          tl.kill();
        }
      },
    });
  });
  useGSAP(() => {
    if(!showContent) return;
    gsap.from(".landingPage",{
      scale:2,
      rotate:-20,
      duration:1,
      delayl:-1.5,
      ease:"power4.easeInOut",
    })
    gsap.from(".sky",{
      scale:2,
      rotate:-50,
      duration:2,
      delayl:-1,
      ease:"power4.easeInOut",
    })
    gsap.from(".bgpng",{
      scale:1.7,
      rotate:-30,
      duration:1.2,
      delayl:-1.2,
      ease:"power4.easeInOut",
    })
    gsap.from(".girl",{
      rotate:-30,
      bottom:"-70%",
    })
    gsap.to(".girl",{
      x:"50%",
      duration:1,
      scale:1.4,
      delayl:-1.2,
      bottom:"-36%",
      ease:"power4.easeInOut",
    })
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove",(e)=>{
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text",{
        x: `${50 - xMove}%`,
      })
      gsap.to(".sky",{
        x: xMove,
      })
      gsap.to(".bgpng",{
        x: xMove*1.8,
      })
    })

  },[showContent]);

  return (
    <>
      <div className="svg w-full h-screen flex items-center justify-center fixed top-0 left-0 z-[100] bg-black overflow-hidden ">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="250"
                  fill="white"
                  fontFamily="arial black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main select-none">
          <div className="landingPage w-full h-screen bg-black">
            <nav className="absolute top-0 left-0 w-full z-[10] p-7 px-10 flex items-center justify-start gap-6">
              <div className="lines flex flex-col gap-1.5">
                <div className="line1 w-12 h-1.5 bg-white"></div>
                <div className="line2 w-8 h-1.5 bg-white"></div>
                <div className="line3 w-6 h-1.5 bg-white"></div>
              </div>
              <h2 className="text-white text-4xl -mt-[9px] leading-none">Rockstar</h2>
            </nav>
            <div className="IMGdiv overflow-hidden w-full h-full relative">
              <img className="absolute scale-[1.3] sky top-0 left-0 object-cover h-full w-full" src="./sky.png" alt="" />
              <img className="absolute scale-[1.1] bgpng top-0 left-0 object-cover h-full w-full" src="./bg.png" alt="" />
              <div className="text absolute text-white right-[50%] translate-x-1/2 top-[5%] ">
                <h1 className="text-[7rem] leading-none -ml-30">grand</h1>
                <h1 className="text-[7rem] leading-none ml-30">theft</h1>
                <h1 className="text-[7rem] leading-none -ml-40">auto</h1>
              </div>
              <img className="absolute girl h-full scale-[2] object-cover -bottom-[36%] right-1/2 translate-x-1/2" src="./girlbg.png" alt="" />
            </div>
            <div className="btmBar text-white absolute z-[10] bottom-0 left-0 p-4 px-4 w-full bg-gradient-to-t from-black to-transparent ">
            <div className="scrollDown flex items-center gap-2">
            <i className="ri-arrow-down-line text-2xl"></i>
              <h2 className="text-xl font-[gilroy]">Scroll Down</h2>
            </div>
            <img className="absolute h-[45px] bottom-5 right-1/2 translate-x-1/2" src="./ps5.png" alt="" />
            </div>
          </div>
          <div className="page2 flex justify-center items-center h-screen w-full bg-black">
            <div className="contr w-full h-[80%] flex">
              <div className="left w-1/2 h-full relative">
                <img className="absolute scale-[0.8] top-1/2 left-1/2 -translate-1/2" src="./imag.png" alt="" />
              </div>
              <div className="right py-10 text-white w-[40%]">
                <h1 className="text-6xl">Rockstar games,</h1>
                <h1 className="text-6xl">Discription</h1>
                <p className="text-[1rem] font-[gilroy] mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam natus impedit ullam, soluta obcaecati, veritatis doloribus nobis, commodi rerum officia! Nostrum doloribus illum quo excepturi corporis.</p>
                <p className="text-[1rem] font-[gilroy] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, asperiores?</p>
                <p className="text-[1rem] font-[gilroy] mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore nam, velit debitis modi deserunt cupiditate incidunt hic, consequatur ea beatae in molestias alias reiciendis iusto libero aliquid perspiciatis tempore culpa!</p>
                <button className="bg-yellow-400 text-4xl mt-10 text-black px-6 py-6 hover:shadow-lg active:scale-[0.95] active:shadow-none hover:shadow-amber-400 ease-linear">Download Now</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default App;
