import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section3TL = gsap.timeline();

gsap.set("#section-3",{transformOrigin: "left"});

section3TL.from("#section-3",{duration:0.5, x:1000, alpha: 0});
 


export function section3Animation(){
    ScrollTrigger.create({
        markers: true,
        animation: section3TL,
        toggleActions: "play none none none",
        trigger: "#section-3",
        scrub: 0,
        start:"top 70%",
        end: "bottom 70%"
    });
}