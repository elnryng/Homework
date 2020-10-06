import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL = gsap.timeline();
section2TL.from(".rule", {duration:3, alpha:0, x:-300 })
        .from("#section-2-image", {duration:3, alpha:0, stagger: 2})
        .from("#section-2-content h3", {duration:3, alpha:0, x:300, stagger: 2})
        .from("#section-2-content h5", {duration:4, alpha: 0, stagger: 3});
        

export function section2Animation(){
    ScrollTrigger.create({
        markers: true,
        animation: section2TL,
        toggleActions: "restart none reverse none",
        trigger: ".trigger",
        scrub: 1,
        start:"top bottom",
        end: "bottom 30%"
    });
}