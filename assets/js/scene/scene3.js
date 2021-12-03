const pcScene3 = () => {
  const scene = document.getElementById('scene-3');
  const logo = document.getElementById('logo-3');
  window.scene3js = {
    base: window.scene2js.close,
  };
  let showScene = window.scene3js.base + 100;
  let topLogo = showScene + 100; //9000
  let showLogo = topLogo + 200; //9200
  let dropCenterLogo = topLogo + 500; //9700
  // let dropLogo = centerLogo; //9700
  let stayScene = dropCenterLogo + 500; 
  window.scene3js.close = stayScene + 500;

  scene.setAttribute(`data-${window.scene3js.base}`,'display: none; opacity: 0;');
  scene.setAttribute(`data-${showScene}`,'display: block; opacity: 1;');
  logo.setAttribute(`data-${topLogo}`,'top: 150%;');
  logo.setAttribute(`data-${showLogo}`,'opacity: 1');
  logo.setAttribute(`data-${dropCenterLogo}`,'top: 50%;');
  scene.setAttribute(`data-${stayScene}`,'opacity: 1');
  scene.setAttribute(`data-${window.scene3js.close}`,'opacity: 0; display: none;');
}


const spScene3 = () => {
  const scene = document.getElementById('scene-3');
  const logo = document.getElementById('logo-3');
  window.scene3js = {
    base: window.scene2js.close,
  };
  let showScene = window.scene3js.base + 100;
  let topLogo = showScene + 100; //9000
  let showLogo = topLogo + 200; //9200
  let dropCenterLogo = topLogo + 700; //9700
  // let dropLogo = centerLogo; //9700
  let stayScene = dropCenterLogo + 500; 
  window.scene3js.close = stayScene + 500;

  scene.setAttribute(`data-${window.scene3js.base}`,'display: none; opacity: 0;');
  scene.setAttribute(`data-${showScene}`,'display: block; opacity: 1;');
  logo.setAttribute(`data-${topLogo}`,'top: 150%;');
  logo.setAttribute(`data-${showLogo}`,'opacity: 1');
  logo.setAttribute(`data-${dropCenterLogo}`,'top: 50%;');
  scene.setAttribute(`data-${stayScene}`,'opacity: 1');
  scene.setAttribute(`data-${window.scene3js.close}`,'opacity: 0; display: none;');
}

if(window.innerWidth >= 768) {
  window.addEventListener('DOMContentLoaded	', pcScene3());
}else {
  window.addEventListener('DOMContentLoaded	', spScene3());
}


