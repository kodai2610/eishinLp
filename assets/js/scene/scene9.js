function scene9() {
  //要素の取得
  const scene9 = document.getElementById('scene-9');
  const garally = document.getElementById('garally-9');
  const di = document.getElementById('di-9');
  const text1 = document.getElementById('text1-9');
  const text2 = document.getElementById('text2-9');
  const text3 = document.getElementById('text3-9');
  const text4 = document.getElementById('text4-9');
  const pyramid = document.getElementById('pyramid-9');

  //スクロール量
  window.scene9js = {
    base : window.scene8js.close,
  };

  let showScene = window.scene9js.base + 300;
  let setGarally = showScene;
  let showGarally = setGarally + 300;
  let setDi = showGarally + 500;
  let showDi = setDi + 500;
  let setText1 = showDi + 1000;
  let visibleText1 = setText1 + 1;
  let showText1 = setText1 + 500;
  let stayText1 = showText1 + 1000;
  let dropText1 = stayText1 + 500;
  let invisibleText1 = dropText1 + 1;
  let setText2 = dropText1 + 500;
  let visibleText2 = setText2 + 1;
  let showText2 = setText2 + 500;
  let stayText2 = showText2 + 1500;
  let dropText2 = stayText2 + 500;
  let invisibleText2 = dropText2 + 1;
  let setText3 = dropText2 + 500;
  let visibleText3 = setText3 + 1;
  let showText3 = setText3 + 500;
  let stayText3 = showText3 + 1000;
  let dropText3 = stayText3 + 500;
  let invisibleText3 = dropText3 + 1;
  let setText4 = dropText3 + 500;
  let visibleText4 = setText4 + 1;
  let showText4 = setText4 + 500;
  let stayText4 = showText4 + 1000;
  let dropText4 = stayText4 + 500;
  let invisibleText4 = dropText4 + 1;
  let setPyramid = dropText4 + 500;
  let visiblePyramid = setPyramid + 1;
  let showPyramid = setPyramid + 500;
  let stayPyramid = showPyramid + 1000;
  let stayScene = stayPyramid + 1000;
  window.scene9js.close = stayScene + 500;

  //設定
  scene9.setAttribute(`data-${window.scene9js.base}`, 'display:none; opacity:0;');
  scene9.setAttribute(`data-${showScene}`, 'display:block; opacity:1;');
  scene9.setAttribute(`data-${stayScene}`, 'display:block; opacity:1;');
  scene9.setAttribute(`data-${window.scene9js.close}`, 'display:none; opacity:0;');
  garally.setAttribute(`data-${setGarally}`, 'opacity:0');
  garally.setAttribute(`data-${showGarally}`, 'opacity:1;');
  di.setAttribute(`data-${setDi}`, 'transform: translateX(105%)');
  di.setAttribute(`data-${showDi}`, 'transform: translateX(0)');
  text1.setAttribute(`data-${setText1}`, 'visibility:hidden;opacity:0');
  text1.setAttribute(`data-${visibleText1}`, 'visibility:visible;');
  text1.setAttribute(`data-${showText1}`, 'opacity:1;');
  text1.setAttribute(`data-${stayText1}`, 'opacity:1;');
  text1.setAttribute(`data-${dropText1}`, 'opacity:0;');
  text1.setAttribute(`data-${invisibleText1}`, 'visibility:hidden;');
  text2.setAttribute(`data-${setText2}`, 'visibility:hidden;opacity:0');
  text2.setAttribute(`data-${visibleText2}`, 'visibility:visible;');
  text2.setAttribute(`data-${showText2}`, 'opacity:1;');
  text2.setAttribute(`data-${stayText2}`, 'opacity: 1;');
  text2.setAttribute(`data-${dropText2}`, 'opacity: 0;');
  text2.setAttribute(`data-${invisibleText2}`, 'visibility:hidden;');
  text3.setAttribute(`data-${setText3}`, 'visibility:hidden;opacity:0;');
  text3.setAttribute(`data-${visibleText3}`, 'visibility:visible;');
  text3.setAttribute(`data-${showText3}`, 'opacity:1;');
  text3.setAttribute(`data-${stayText3}`, 'opacity:1;');
  text3.setAttribute(`data-${dropText3}`, 'opacity:0;');
  text3.setAttribute(`data-${invisibleText3}`, 'visibility:hidden;');
  text4.setAttribute(`data-${setText4}`, 'visibility:hidden;opacity:0;');
  text4.setAttribute(`data-${visibleText4}`, 'visibility:visible;');
  text4.setAttribute(`data-${showText4}`, 'opacity:1;');
  text4.setAttribute(`data-${stayText4}`, 'opacity:1;');
  text4.setAttribute(`data-${dropText4}`, 'opacity:0;');
  text4.setAttribute(`data-${invisibleText4}`, 'visibility:hidden;');
  pyramid.setAttribute(`data-${setPyramid}`, 'visibility:hidden;opacity:0;');
  pyramid.setAttribute(`data-${visiblePyramid}`, 'visibility:visible;');
  pyramid.setAttribute(`data-${showPyramid}`, 'opacity:1;');
  pyramid.setAttribute(`data-${stayPyramid}`, 'opacity:1;');
}
window.addEventListener('DOMContentLoaded	', scene9());