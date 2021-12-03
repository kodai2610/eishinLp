function scene8() {
  //要素の取得
  const scene8 = document.getElementById('scene-8');
  const logo = document.getElementById('logo-8');
  const text1 = document.getElementById('text1-8');
  const text2 = document.getElementById('text2-8');
  const text3 = document.getElementById('text3-8');
  const text4 = document.getElementById('text4-8');
  const marker = document.getElementById('marker-8').firstElementChild;


  //55800
  //スクロール量
  window.scene8js = {
    base : window.scene7js.close,
  };
  // let base = 56300;
  let showScene = window.scene8js.base + 300;
  let setLogo = showScene + 500;
  let showLogo = setLogo + 500;
  let setText1 = showLogo + 500;
  let showText1 = setText1 + 500;
  let setText2 = showText1 + 500;
  let showText2 = setText2 + 500;
  let setText3 = showText2 + 500;
  let showText3 = setText3 + 500;
  let setText4 = showText3 + 500;
  let showText4 = setText4 + 500;
  let setMarker = showText4 + 300;
  let setMarkerVisible = setMarker + 200;
  let showMarker = setMarker + 300;
  let stayScene = showMarker + 1000;
  window.scene8js.close = stayScene + 500;


  //セット作業
  scene8.setAttribute(`data-${window.scene8js.base}`, 'display: none; opacity: 0;');
  scene8.setAttribute(`data-${showScene}`, 'display: block; opacity: 1;');
  scene8.setAttribute(`data-${stayScene}`, 'display: block; opacity: 1;');
  scene8.setAttribute(`data-${window.scene8js.close}`, 'display: none; opacity: 0;');
  logo.setAttribute(`data-${setLogo}`, 'opacity: 0;');
  logo.setAttribute(`data-${showLogo}`, 'opacity: 1;');
  text1.setAttribute(`data-${setText1}`, 'opacity: 0;');
  text1.setAttribute(`data-${showText1}`, 'opacity: 1;');
  text2.setAttribute(`data-${setText2}`, 'opacity: 0;');
  text2.setAttribute(`data-${showText2}`, 'opacity: 1;');
  text3.setAttribute(`data-${setText3}`, 'opacity: 0;');
  text3.setAttribute(`data-${showText3}`, 'opacity: 1;');
  text4.setAttribute(`data-${setText4}`, 'opacity: 0;');
  text4.setAttribute(`data-${showText4}`, 'opacity: 1;');
  marker.setAttribute(`data-${setMarker}`, 'opacity:0; transform: translateX(-50%) translateZ(300px);');
  marker.setAttribute(`data-${setMarkerVisible}`, 'opacity:1;');
  marker.setAttribute(`data-${showMarker}`, 'transform:translateX(-50%) translateZ(0);opacity:1;');
};
window.addEventListener('DOMContentLoaded	', scene8());


