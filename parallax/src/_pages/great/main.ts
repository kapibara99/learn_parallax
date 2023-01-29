
// styles
import "../_common/common.scss";
import "./main.scss";

// free area
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const topTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".top",
    start: "top top",
    end: "+=900",
    scrub: true,
    // .top要素が固定される
    pin: true,
  },
});
// スクロール時のアニメーション
topTl.fromTo(".top__title", {
    opacity: 0,
    scale: 0.2,
  },
  { opacity: 1, scale: 1, ease: "Power4.out" }
);
topTl.to("#top_title_innerLeft", {
  x: -innerWidth / 2,
  scrollTrigger: {
    end: "+=900",
  },
});
topTl.to("#top_title_innerRight", {
  x: innerWidth / 2,
},"<");


const copiedKv = gsap.timeline({
  scrollTrigger: {
    trigger: ".kv",
    start: "top top",
    end: "+=2400",
    scrub: true,
    // .top要素が固定される
    pin: true,
  },
})
copiedKv.to(".kv__background.-leaf",{
  scale:2.5,
  duration:5
})
.to(".kv__background.-town",{
  scale:1.5,
},"<")
.to(".kv__title",{
  opacity:1,
  duration:3
})
.to(".kv__content",{
  opacity:1,
  duration:3
})
.to(".kv__title",{
  opacity:0
},"<")
.to(".kv__background",{
  opacity:0,
  duration:2
})
.to(".kv__content",{
  scrollTrigger:{
    toggleClass: {targets: document.querySelector(".kv__content"), className: "-white"},
  }
})
.to(".kv__content",{
  opacity:0,
  duration:2
},"=+1");


