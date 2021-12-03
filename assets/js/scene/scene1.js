function pcScene1(){
  //要素の取得
  const scene1 = document.getElementById('scene-1');
  const contents = document.getElementById('contents-1');
  const gear = document.getElementById('gear-1');


  window.scene1js = {
    base: 0,
  }
  let zoomContents = window.scene1js.base + 1000;
  let zoomGear = zoomContents;
  let stayScene1 = zoomContents + 500;
  window.scene1js.close = stayScene1 + 500;
  
  
  contents.setAttribute(`data-${window.scene1js.base}`,'width: 100%; bottom: 0rem;');
  gear.setAttribute(`data-${window.scene1js.base}`,'width: 16.1rem; height: 5.6rem; top: 28%;')
  contents.setAttribute(`data-${zoomContents}`,'width: 250%; bottom: -94rem;');//1000
  gear.setAttribute(`data-${zoomGear}`,'width: 32.2rem; height: 11.2rem; top: 26%;');
  scene1.setAttribute(`data-${stayScene1}`,'display: block; opacity: 1;');
  scene1.setAttribute(`data-${window.scene1js.close}`,'opacity: 0; display: none;');
}


const spScene1 = () => {
  const scene1 = document.getElementById('scene-1');
  const desk = document.getElementById('desk-1');
  const gear = document.getElementById('gear-1');

  window.scene1js = {
    base: 0,
  }

  let zoomDesk = window.scene1js.base + 1000;
  let zoomGear = zoomDesk;
  let stayScene1 = zoomDesk + 500;
  window.scene1js.close = stayScene1 + 500;
  
  desk.setAttribute(`data-${window.scene1js.base}`, 'transform: translate(-50%,0%) scale(1,1)');
  desk.setAttribute(`data-${zoomDesk}`, 'transform: translate(-50%, 125%) scale(4,5)');
  // desk.setAttribute(`data-${zoomDesk}`, 'transform: translate(-50%, 150%) scale(3,6)');
  gear.setAttribute(`data-${window.scene1js.base}`,'width:7rem; top: 41%;');
  gear.setAttribute(`data-${zoomGear}`,'width:16rem; top: 50%;');

  scene1.setAttribute(`data-${stayScene1}`,'display: block; opacity: 1;');
  scene1.setAttribute(`data-${window.scene1js.close}`,'opacity: 0; display: none;');
}


if(window.innerWidth >= 768) {
  window.addEventListener('DOMContentLoaded	', pcScene1());
} else {
  window.addEventListener('DOMContentLoaded	', spScene1());
}