
// styles
import "../_common/common.scss";
import "./main.scss";

// free area
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Parallax from 'parallax-js';

/*
========================================
cycle visual
========================================
*/

const animateCycle = () => {
  const cycle = gsap.timeline();

  cycle.fromTo(".cycle-kv__layer.-back-01",{// background flower circle
    rotation:0,
    delay:6,
  },{
    rotation:180,
    duration:4,
    ease:"cubic-bezier(.23,.78,.45,-0.01)",
    onComplete:(()=>{
      const scene = document.getElementById('cycle-kv-wrap') !
      var parallaxInstance = new Parallax(scene,{
        hoverOnly:true,
        frictionX: 0.1, //移動の速度 0～1
        frictionY: 0.1, //移動の速度 0～1
      });
      console.log("complete");
    })
  })
  .fromTo(".cycle-kv__layer.-back-02",{// monky
    rotation:0,
    opacity:0,
    scale:0.5,
  },{
    rotation:90,
    duration:6.2,
    ease:"cubic-bezier(.23,.78,.45,-0.01)",
    opacity:1,
    scale:1,
  },"<")
  .fromTo(".cycle-kv__layer.-n-01",{
    x:0,
    rotate:0,
    opacity:0,
  },{
    x:"50vw",
    rotate:"-60",
    duration:1.5,
    opacity:1,
  },"<")
  .fromTo(".cycle-kv__layer.-n-02",{
    y:0,
    rotate:0,
    opacity:0,
  },{
    y:"50vh",
    rotate:"-60",
    duration:1.5,
    opacity:1,
  },"<")
  .fromTo(".cycle-kv__layer.-n-03",{
    x:0,
    rotate:0,
    opacity:0,
  },{
    x:"-20vw",
    rotate:"-17",
    duration:1.5,
    opacity:1,
  },"<")
  // .fromTo(".cycle-kv__layer.-n-02",{},{},"<")
  // .fromTo(".cycle-kv__layer.-n-03",{},{},"<")
}

window.addEventListener("load",animateCycle,false);