
// styles
import "../_common/common.scss";
import "./main.scss";

// free area

// scroll pencil moving
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const pencilA = "#pen-a";
const pencilB = "#pen-b";
const createObj = (elName:string,flag:boolean) => {
  return {
    x: flag ? "60%" : "-40%",
    duration: 2.5,
    ease: "power4.out",
    // スクロールトリガーの設定
    scrollTrigger: {
      trigger:elName, // 対象物
      scrub: -0.5,
      start:"top center"
    },
  }
}

gsap.to(pencilA, {...createObj(pencilA,false)});
gsap.to(pencilB, {...createObj(pencilB,true)});
