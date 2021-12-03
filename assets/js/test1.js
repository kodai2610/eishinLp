//要素の取得
const sceneFirst = document.querySelector('.scene-first');
const firstContents = document.querySelector('.first-contents');
const firstContensGear = document.querySelector('.first-contens__gear');

//スクロール量
let scroll1_base = 0;
let scroll1_1 = scroll1_base + 1000;
let scroll1_2 = scroll1_base + 1500;
let scroll1_3 = scroll1_base + 2500;


//セット作業
sceneFirst.setAttribute(`data-${scroll1_2}`, "display: block; opacity: 1;");
sceneFirst.setAttribute(`data-${scroll1_3}`, "opacity: 0; display: none;");

firstContents.setAttribute(`data-${scroll1_base}`, "width: 100%; bottom: 0rem;");
firstContents.setAttribute(`data-${scroll1_1}`, "width: 250%; bottom: -94rem;");

firstContensGear.setAttribute(`data-${scroll1_base}`, "width: 16.1rem; height: 5.6rem; top: 28%;");
firstContensGear.setAttribute(`data-${scroll1_1}`, "width: 32.2rem; height: 11.2rem; top: 26%;");




