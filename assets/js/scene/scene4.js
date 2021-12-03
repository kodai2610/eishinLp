const pcScene4 = () => {
  const scene = document.getElementById('scene-4');
  const di = document.getElementById('di-4');
  const diG = document.getElementById('di-g-4');
  const diP = document.getElementById('di-p-4');
  const ti = document.getElementById('ti-4');
  const pop = document.getElementById('pop-4');
  const yn = document.getElementById('yn-4');
  const pen = document.getElementById('pen-4');
  const ss = document.getElementById('ss-4');
  const calendar = document.getElementById('calendar-4');
  const poster = document.getElementById('poster-4');
  const bigBox = document.getElementById('big-box-4');
  const cup = document.getElementById('cup-4');
  const tiP = document.getElementById('ti-p-4');
  const ssC = document.getElementById('ss-c-4');
  const chestBox = document.getElementById('chestbox-4');
  const plant = document.getElementById('plant-4');
  const book = document.getElementById('book-4');
  const cactus = document.getElementById('cactus-4');
  const modalBtn = document.getElementById('modal-button-4');


  window.scene4js = {
    base : window.scene3js.close,
  }
  let showScene = window.scene4js.base + 300;
  let setDi = showScene;
  let setTi = setDi;
  let showDi = setTi + 1000;
  // let showDi = showScene + 1000;
  let showTi = showDi;
  let stayDiG = showDi + 500;
  let setDiP = stayDiG - 1;
  let upDiP = stayDiG;
  // let vanishDiG = stayDiG + 100;
  let dropDiG = stayDiG + 1;
  // let dropDiG = stayDiG + 100;
  let showDiP = dropDiG; //13000
  let setPop = showDiP + 500;
  let showPop = setPop + 500;
  let stayPop = showPop + 500; //15000
  let setYn = stayPop;
  let dropPop = stayPop + 500; //15500
  let showYn = setYn + 1000; //16000
  let setPen = showYn + 500;
  let setSs = setPen;
  let showPen = setPen + 500;
  let showSs = setSs + 1000; //17500
  let setCalendar = showSs + 500; 
  let showCalendar = setCalendar + 1000;
  let setPoster = setCalendar + 500;
  let showPoster = setCalendar + 1000; //19000
  let setCup = showPoster;
  let showCup = setCup + 1000; //20000
  let setTiP = setCup;
  let showTiP = showCup;
  let setSsC = setCup;
  let showSsC = showCup;
  let setBigBox = showPoster + 500; //19500
  let showBigBox = setBigBox + 500; //20000
  let setPlant = showBigBox;
  let showPlant = setPlant + 1000; 
  let setChestBox = setBigBox;
  let showChestBox = setChestBox + 1000;
  let setBook = setPlant + 500;
  let showBook = setBook + 1000;
  let setCactus = setBigBox;
  let showCactus = setCactus + 1000; 
  let setModalBtn = showBook;
  let activeModalBtn = setModalBtn + 1;
  let showModalBtn = setModalBtn + 300;
  let stayScene = showModalBtn + 1500;
  window.scene4js.close = stayScene + 500;



  




  scene.setAttribute(`data-${window.scene4js.base}`,'display: none; opacity: 0;');
  scene.setAttribute(`data-${showScene}`,'display: block; opacity: 1;');
  scene.setAttribute(`data-${stayScene}`,'opacity: 1;');
  scene.setAttribute(`data-${window.scene4js.close}`,'opacity: 0; display:none;');

  di.setAttribute(`data-${setDi}`,'right: -128rem;' );
  di.setAttribute(`data-${showDi}`,'right: 36.2rem;' );
  diG.setAttribute(`data-${stayDiG}`,'opacity: 1;' );
  // diG.setAttribute(`data-${vanishDiG}`,'opacity: .25;' );
  diG.setAttribute(`data-${dropDiG}`,'opacity: 0;' );
  diP.setAttribute(`data-${setDiP}`, 'opacity:0;');
  diP.setAttribute(`data-${showDiP}`, 'opacity:1;');


  ti.setAttribute(`data-${setTi}`, 'left:-128rem;');
  ti.setAttribute(`data-${showTi}`, 'left:31.9rem;');
  cup.setAttribute(`data-${setCup}`, 'opacity:0;');
  cup.setAttribute(`data-${showCup}`, 'opacity:1;');
  tiP.setAttribute(`data-${setTiP}`, 'opacity:0;');
  tiP.setAttribute(`data-${showTiP}`, 'opacity:1;');
  


  pop.setAttribute(`data-${setPop}`, 'opacity:0;');
  pop.setAttribute(`data-${showPop}`, 'opacity:1;');
  pop.setAttribute(`data-${stayPop}`, 'opacity:1;');
  pop.setAttribute(`data-${dropPop}`, 'opacity:0;');


  yn.setAttribute(`data-${setYn}`, 'right: -128rem;');
  yn.setAttribute(`data-${showYn}`, 'right: 2rem;');

  pen.setAttribute(`data-${setPen}`, 'opacity:0;');
  pen.setAttribute(`data-${showPen}`, 'opacity:1;');

  ss.setAttribute(`data-${setSs}`, 'left: -128rem;');
  ss.setAttribute(`data-${showSs}`, 'left: 4.9rem;');

  calendar.setAttribute(`data-${setCalendar}`, 'opacity: 0;');
  calendar.setAttribute(`data-${showCalendar}`, 'opacity: 1;');

  poster.setAttribute(`data-${setPoster}`, 'opacity: 0;');
  poster.setAttribute(`data-${showPoster}`, 'opacity: 1;');


  ssC.setAttribute(`data-${setSsC}`, 'opacity: 0;');
  ssC.setAttribute(`data-${showSsC}`, 'opacity: 1;');


  bigBox.setAttribute(`data-${setBigBox}`, 'opacity: 0;');
  bigBox.setAttribute(`data-${showBigBox}`, 'opacity: 1;');


  chestBox.setAttribute(`data-${setChestBox}`, 'opacity: 0;');
  chestBox.setAttribute(`data-${showChestBox}`, 'opacity: 1;');


  book.setAttribute(`data-${setBook}`, 'opacity: 0;');
  book.setAttribute(`data-${showBook}`, 'opacity: 1;');

  cactus.setAttribute(`data-${setCactus}`, 'opacity: 0;');
  cactus.setAttribute(`data-${showCactus}`, 'opacity: 1;');

  plant.setAttribute(`data-${setPlant}`, 'opacity: 0;');
  plant.setAttribute(`data-${showPlant}`, 'opacity: 1;');

  // modalBtn.setAttribute(`data-${setModalBtn}`, 'visibility: visible;opacity:0;');
  // modalBtn.setAttribute(`data-${showModalBtn}`,'opacity:1;');
  modalBtn.setAttribute(`data-${setModalBtn}`, 'opacity:0;display:none;');
  modalBtn.setAttribute(`data-${activeModalBtn}`, 'display:flex; opacity:0;');
  modalBtn.setAttribute(`data-${showModalBtn}`,'opacity:1;display:flex; ');
  modalBtn.setAttribute(`data-${stayScene}`,'display:flex; opacity:1;');
  modalBtn.setAttribute(`data-${window.scene4js.close}`,'display:none; opacity:0;');
}

const spScene4 = () => {
  const scene = document.getElementById('scene-4');
  const di = document.getElementById('di-4');
  const diG = document.getElementById('di-g-4');
  const diP = document.getElementById('di-p-4');
  const ti = document.getElementById('ti-4');
  const pop = document.getElementById('pop-4');
  const yn = document.getElementById('yn-4');
  const pen = document.getElementById('pen-4');
  const ss = document.getElementById('ss-4');
  const calendar = document.getElementById('calendar-4');
  const poster = document.getElementById('poster-4');
  const bigBox = document.getElementById('big-box-4');
  const cup = document.getElementById('cup-4');
  const tiP = document.getElementById('ti-p-4');
  const ssC = document.getElementById('ss-c-4');
  const chestBox = document.getElementById('chestbox-4');
  const plant = document.getElementById('plant-4');
  const book = document.getElementById('book-4');
  const cactus = document.getElementById('cactus-4');
  const modalBtn = document.getElementById('modal-button-4');


  window.scene4js = {
    base : window.scene3js.close,
  }

  let showScene = window.scene4js.base + 300;
  let setDi = showScene;
  let setTi = setDi;
  let showDi = setDi + 1000;  
  let showTi = showDi;
  let stayDiG = showDi + 500;
  let setDiP = stayDiG - 1;
  let upDiP = stayDiG;
  // let vanishDiG = stayDiG + 100;
  let dropDiG = stayDiG + 1;
  let showDiP = dropDiG; //13000
  let setPop = showDiP + 500;
  let showPop = setPop + 500;
  let stayPop = showPop + 500; //15000
  let setYn = stayPop;
  let dropPop = stayPop + 500; //15500
  let showYn = setYn + 1000; //16000
  let setPen = showYn + 500;
  let setSs = setPen;
  let showPen = setPen + 500;
  let showSs = setSs + 1000; //17500
  let setCalendar = showSs + 500; 
  let showCalendar = setCalendar + 1000;
  let setPoster = setCalendar + 500;
  let showPoster = setCalendar + 1000; //19000
  let setCup = showPoster;
  let showCup = setCup + 1000; //20000
  let setTiP = setCup;
  let showTiP = showCup;
  let setSsC = setCup;
  let showSsC = showCup;
  let setChestBox = showCalendar;
  let showChestBox = setChestBox + 1000;
  let setBook = showChestBox + 500;
  let showBook = setBook + 1000;
  let setModalBtn = showBook;
  let activeModalBtn = setModalBtn + 1;
  let showModalBtn = setModalBtn + 300;
  let stayScene = showModalBtn + 1500;
  window.scene4js.close = stayScene + 500;


  scene.setAttribute(`data-${window.scene4js.base}`,'display: none; opacity: 0;');
  scene.setAttribute(`data-${showScene}`,'display: block; opacity: 1;');
  scene.setAttribute(`data-${stayScene}`,'opacity: 1;');
  scene.setAttribute(`data-${window.scene4js.close}`,'opacity: 0; display:none;');

  di.setAttribute(`data-${setDi}`,'transform: translateX(300%)' );
  di.setAttribute(`data-${showDi}`,'transform: translateX(0%)' );
  diG.setAttribute(`data-${stayDiG}`,'opacity: 1;' );
  // diG.setAttribute(`data-${vanishDiG}`,'opacity: .25;' );
  diG.setAttribute(`data-${dropDiG}`,'opacity: 0;' );
  diP.setAttribute(`data-${setDiP}`, 'opacity:0;');
  diP.setAttribute(`data-${showDiP}`, 'opacity:1;');


  ti.setAttribute(`data-${setTi}`, 'transform: translateX(-300%);');
  ti.setAttribute(`data-${showTi}`, 'transform: translateX(0%);');
  cup.setAttribute(`data-${setCup}`, 'opacity:0;');
  cup.setAttribute(`data-${showCup}`, 'opacity:1;');
  tiP.setAttribute(`data-${setTiP}`, 'opacity:0;');
  tiP.setAttribute(`data-${showTiP}`, 'opacity:1;');
  


  pop.setAttribute(`data-${setPop}`, 'opacity:0;');
  pop.setAttribute(`data-${showPop}`, 'opacity:1;');
  pop.setAttribute(`data-${stayPop}`, 'opacity:1;');
  pop.setAttribute(`data-${dropPop}`, 'opacity:0;');


  yn.setAttribute(`data-${setYn}`, 'transform:translateX(300%);');
  yn.setAttribute(`data-${showYn}`, 'transform:translateX(0%);');

  pen.setAttribute(`data-${setPen}`, 'opacity:0;');
  pen.setAttribute(`data-${showPen}`, 'opacity:1;');

  ss.setAttribute(`data-${setSs}`, 'transform: translateX(-300%);');
  ss.setAttribute(`data-${showSs}`, 'transform: translateX(0);');

  calendar.setAttribute(`data-${setCalendar}`, 'opacity: 0;');
  calendar.setAttribute(`data-${showCalendar}`, 'opacity: 1;');

  poster.setAttribute(`data-${setPoster}`, 'opacity: 0;');
  poster.setAttribute(`data-${showPoster}`, 'opacity: 1;');


  ssC.setAttribute(`data-${setSsC}`, 'opacity: 0;');
  ssC.setAttribute(`data-${showSsC}`, 'opacity: 1;');


  chestBox.setAttribute(`data-${setChestBox}`, 'opacity: 0;');
  chestBox.setAttribute(`data-${showChestBox}`, 'opacity: 1;');


  book.setAttribute(`data-${setBook}`, 'opacity: 0;');
  book.setAttribute(`data-${showBook}`, 'opacity: 1;');

  modalBtn.setAttribute(`data-${setModalBtn}`, 'display:none;opacity:0;');
  modalBtn.setAttribute(`data-${activeModalBtn}`, 'display:flex;opacity:0;');
  modalBtn.setAttribute(`data-${showModalBtn}`,'display:flex;opacity:1;');
  modalBtn.setAttribute(`data-${stayScene}`,'display:flex; opacity:1;');
  modalBtn.setAttribute(`data-${window.scene4js.close}`,'display:none;opacity:0;');

}



if(window.innerWidth >= 768) {
  window.addEventListener('DOMContentLoaded', pcScene4());
}else {
  window.addEventListener('DOMContentLoaded', spScene4());
}



