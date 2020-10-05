import {gsap} from "gsap";


export function section1Animation(){
    gsap.from("#section-1",{duration:1, alpha:0, x:400});
}
