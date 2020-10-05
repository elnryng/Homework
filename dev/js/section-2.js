import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL = gsap.timeline();
section2TL.from(".rule", {duration:3, alpha:0, y:-300})
        .from("#section-2-content h3", {duration:5, alpha:0, x:300})

export function section2Animation(){
    ScrollTrigger.create({
        markers: true,
        animation: section2TL,
        toggleActions: "restart none reverse none",
        trigger: "#section-2",
        // scrub: 1,
        start:"top, 80%",
        end: "bottom, 80%"
    });
}