
// styles
import "../_common/common.scss";
import "./main.scss";

// free area

// simple parallax demo
import simpleParallax from 'simple-parallax-js';
const img01 = document.getElementById("background-test-01") !
new simpleParallax(img01);

const img02 = document.getElementById("background-test-02") !
new simpleParallax(img02,{
  orientation:"right"
});

const img03 = document.getElementById("background-test-03") !
new simpleParallax(img03,{
  scale:1.5,
});
