//要素の取得
const sceneSecond = document.querySelector('.scene-second');
const di_2 = document.getElementById('di_2');
const ti_2 = document.getElementById('ti_2');
const pop1_2 = document.getElementById('pop1_2');
const pop2_2 = document.getElementById('pop2_2');

//スクロール量
let s2_base = 2000;
let s2_1 = s2_base + 500;
let s2_2 = s2_1 + 500;
let s2_3 = s2_2 + 500;
let s2_4 = s2_3 + 1000;
let s2_5 = s2_4 + 500; //45
let s2_6 = s2_5 + 800; //53
let s2_7 = s2_6 + 500; //58
let s2_8 = s2_7 + 200; //60
let s2_9 = s2_8 + 200; //62
let s2_10 = s2_9 + 500; //67
let s2_11 = s2_10 + 300; //70
let s2_12 = s2_11 + 500; //75



//セット作業
sceneSecond.setAttribute(`data-${s2_base}`, "display: block; opacity: 0;");
sceneSecond.setAttribute(`data-${s2_1}`, "opacity: 1;");
sceneSecond.setAttribute(`data-${s2_11}`, "opacity: 1;");
sceneSecond.setAttribute(`data-${s2_12}`, "opacity: 0; display: none;");





