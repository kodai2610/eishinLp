function scene10() {
  const scene10 = document.getElementById('scene-10');

  window.scene10js = {
    base : window.scene9js.close,
  }
  
  let showScene = window.scene10js.base + 500;
  let stayScene = showScene + 500; //ただ表示するため
  window.scene10js.stay = showScene + 500;
  console.log(window.scene10js.stay);
  scene10.setAttribute(`data-${window.scene10js.base}`, 'opacity:0;display:none;'); 
  scene10.setAttribute(`data-${showScene}`, 'opacity:1;display:block;'); //2000スクロール
  scene10.setAttribute(`data-${window.scene10js.stay}`, 'opacity:1;display:block;');
}

window.addEventListener('load', scene10());