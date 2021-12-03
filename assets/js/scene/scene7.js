const pcScene7 = () => {
  //要素の取得
  const scene_7 = document.getElementById('scene-7');
  const di_7 = document.getElementById('di-7');
  const ta_7 = document.getElementById('ta-7');
  const yy_7 = document.getElementById('yy-7');
  const pop_7 = document.getElementById('pop-7');
  const hi_7 = document.getElementById('hi-7');
  const kt_7 = document.getElementById('kt-7');
  const eno_7 = document.getElementById('eno-7');
  const db1_7 = document.getElementById('db1-7');
  const db2_7 = document.getElementById('db2-7');
  const db3_7 = document.getElementById('db3-7');
  const modalBtn = document.getElementById('modal-button-7');

  // window.scene7js = { //グローバル変数
  //   base: 41000,
  // }
  
  window.scene7js = {};
  window.scene7js.base = window.scene6js.close;



  //スクロール量
  //40500でscene6終了
  let showScene = window.scene7js.base + 300;
  let setDi = showScene;
  let inDi = setDi + 1000;
  let setPop = inDi + 1000;
  let inPop = setPop + 500;
  let stayPop = inPop + 1500; 
  let outPop = stayPop + 500; 
  
  let setTa = inPop;
  let inTa = setTa + 1000;
  let stayTa = inTa + 1500;
  let stayDi = stayTa;
  let moveTa = stayTa + 300;
  let moveDi = moveTa;
  let setYy = moveTa; // = moveDi
  let inYy = setYy + 1000;
  let stayYy = inYy + 1000;
  let stayTa2 = stayYy;
  let stayDi2 = stayYy;
  let moveTa2 = stayTa2 + 500;
  let moveDi2 = moveTa2;
  let moveYy = moveDi2; // = moveTa2
  
  let setDb1 = moveYy + 500;
  let showDb1 = setDb1 + 500;
  
  let setHi = showDb1 - 500; 
  let inHi = setHi + 1000;
  
  let setDb2 = inHi + 500;
  let showDb2 = setDb2 + 500;
  
  let setKt = showDb2 - 500;
  let inKt = setKt + 1000;
  
  let setDb3 = inKt + 500;
  let showDb3 = setDb3 + 500;
  
  let setEno = showDb3 - 500;
  let inEno = setEno + 1000;

  let setModalBtn = inEno + 500;
  let activeModalBtn = setModalBtn + 1;
  let showModalBtn = setModalBtn + 700;
  let stayScene = showModalBtn + 1500;  
  window.scene7js.close = stayScene + 500; //55800
  
  
  
  
  
  //セット作業
  scene_7.setAttribute(`data-${window.scene7js.base}`, 'display: none; opacity: 0;');
  scene_7.setAttribute(`data-${showScene}`, 'display: block; opacity: 1;');
  scene_7.setAttribute(`data-${stayScene}`, 'display: block; opacity: 1;');
  scene_7.setAttribute(`data-${window.scene7js.close}`, 'display: none; opacity: 0;');
  
  di_7.setAttribute(`data-${setDi}`, 'right: -100rem;' );
  di_7.setAttribute(`data-${inDi}`, 'right: 40.3rem;' );
  
  di_7.setAttribute(`data-${stayDi}`, 'right: 40.3rem;' );
  di_7.setAttribute(`data-${moveDi}`, 'right: 53.7rem;' );
  di_7.setAttribute(`data-${stayDi2}`, 'right: 53.7rem;' );
  di_7.setAttribute(`data-${moveDi2}`, 'right: 91.7rem;' );
  
  
  
  pop_7.setAttribute(`data-${setPop}`, 'opacity: 0;' );
  pop_7.setAttribute(`data-${inPop}`, 'opacity: 1;' );
  pop_7.setAttribute(`data-${stayPop}`, 'opacity: 1;' );
  pop_7.setAttribute(`data-${outPop}`, 'opacity: 0;' );
  
  
  
  
  ta_7.setAttribute(`data-${setTa}`, 'right: -100rem;' );
  ta_7.setAttribute(`data-${inTa}`, 'right: 24.5rem;' );
  
  ta_7.setAttribute(`data-${stayTa}`, 'right: 24.5rem;' );
  ta_7.setAttribute(`data-${moveTa}`, 'right: 35.7rem;' );
  ta_7.setAttribute(`data-${stayTa2}`, 'right: 35.7rem;' );
  ta_7.setAttribute(`data-${moveTa2}`, 'right: 73.8rem;' );
  
  
  
  yy_7.setAttribute(`data-${setYy}`, 'right: -100rem;' );
  yy_7.setAttribute(`data-${inYy}`, 'right: 15.2rem;' );
  yy_7.setAttribute(`data-${stayYy}`, 'right: 15.2rem;' );
  yy_7.setAttribute(`data-${moveYy}`, 'right: 53.2rem;' );
  
  
  hi_7.setAttribute(`data-${setHi}`, 'right: -100rem;' );
  hi_7.setAttribute(`data-${inHi}`, 'right: 34.6rem;' );
  
  kt_7.setAttribute(`data-${setKt}`, 'right: -100rem;' );
  kt_7.setAttribute(`data-${inKt}`, 'right: 15.2rem;' );
  
  eno_7.setAttribute(`data-${setEno}`, 'right: -100rem;' );
  eno_7.setAttribute(`data-${inEno}`, 'right: 0rem;' );
  
  db1_7.setAttribute(`data-${setDb1}`, 'opacity: 0;' );
  db1_7.setAttribute(`data-${showDb1}`, 'opacity: 1;' );
  
  db2_7.setAttribute(`data-${setDb2}`, 'opacity: 0;' );
  db2_7.setAttribute(`data-${showDb2}`, 'opacity: 1;' );
  
  
  db3_7.setAttribute(`data-${setDb3}`, 'opacity: 0;' );
  db3_7.setAttribute(`data-${showDb3}`, 'opacity: 1;' );

  // modalBtn.setAttribute(`data-${setModalBtn}`, 'visibility: visible;opacity:0;');
  // modalBtn.setAttribute(`data-${showModalBtn}`,'opacity:1;');
  modalBtn.setAttribute(`data-${setModalBtn}`, 'opacity:0;display:none;');
  modalBtn.setAttribute(`data-${activeModalBtn}`, 'display:flex; opacity:0;');
  modalBtn.setAttribute(`data-${showModalBtn}`,'opacity:1;display:flex; ');
  modalBtn.setAttribute(`data-${stayScene}`,'display:flex; opacity:1;');
  modalBtn.setAttribute(`data-${window.scene7js.close}`,'display:none; opacity:0;');
}  

const spScene7 = () => {
   //要素の取得
  const scene_7 = document.getElementById('scene-7');
  const di_7 = document.getElementById('di-7');
  const ta_7 = document.getElementById('ta-7');
  const yy_7 = document.getElementById('yy-7');
  const pop_7 = document.getElementById('pop-7');
  const hi_7 = document.getElementById('hi-7');
  const kt_7 = document.getElementById('kt-7');
  const eno_7 = document.getElementById('eno-7');
  const db1_7 = document.getElementById('db1-7');
  const db2_7 = document.getElementById('db2-7');
  const db3_7 = document.getElementById('db3-7');
  const modalBtn = document.getElementById('modal-button-7');
  
  window.scene7js = {};
  window.scene7js.base = window.scene6js.close;



  //スクロール量
  //40500でscene6終了
  let showScene = window.scene7js.base + 300;
  let setDi = showScene;
  let inDi = setDi + 1000;
  let setPop = inDi + 1000;
  let inPop = setPop + 500;
  let stayPop = inPop + 1500; 
  let outPop = stayPop + 500; 
  
  let setTa = inPop;
  let inTa = setTa + 1000;
  let stayTa = inTa + 1500;
  let stayDi = stayTa;
  let moveTa = stayTa + 300;
  let moveDi = moveTa;
  let setYy = moveTa; // = moveDi
  let inYy = setYy + 1000;
  
  
  let setDb1 = inYy + 500;
  let showDb1 = setDb1 + 500;
  
  let setHi = showDb1 - 500; 
  let inHi = setHi + 1000;
  
  
  let setKt = inHi;
  let inKt = setKt + 1000;
  
  
  let setEno = inKt;
  let inEno = setEno + 1000;
  let setModalBtn = inEno + 700;
  let activeModalBtn = setModalBtn + 1;
  let showModalBtn = setModalBtn + 300;
  let stayScene = showModalBtn + 1500;
  window.scene7js.close = stayScene + 500; //55800
  
  
  
  
  
  //セット作業
  scene_7.setAttribute(`data-${window.scene7js.base}`, 'display: none; opacity: 0;');
  scene_7.setAttribute(`data-${showScene}`, 'display: block; opacity: 1;');
  scene_7.setAttribute(`data-${stayScene}`, 'display: block; opacity: 1;');
  scene_7.setAttribute(`data-${window.scene7js.close}`, 'display: none; opacity: 0;');
  
  di_7.setAttribute(`data-${setDi}`, 'right:-100rem;' );
  di_7.setAttribute(`data-${inDi}`, 'right: 11rem;' );
  
  di_7.setAttribute(`data-${stayDi}`, 'right: 11rem;' );
  di_7.setAttribute(`data-${moveDi}`, 'right: 18rem;' );
  // di_7.setAttribute(`data-${stayDi2}`, 'right: 18rem;' );
  // di_7.setAttribute(`data-${moveDi2}`, 'right: 91.7rem;' );
  
  
  
  pop_7.setAttribute(`data-${setPop}`, 'opacity: 0;' );
  pop_7.setAttribute(`data-${inPop}`, 'opacity: 1;' );
  pop_7.setAttribute(`data-${stayPop}`, 'opacity: 1;' );
  pop_7.setAttribute(`data-${outPop}`, 'opacity: 0;' );
  
  
  
  
  ta_7.setAttribute(`data-${setTa}`, 'right: -100rem;' );
  ta_7.setAttribute(`data-${inTa}`, 'right: 3rem;' );
  
  ta_7.setAttribute(`data-${stayTa}`, 'right: 3rem;' );
  ta_7.setAttribute(`data-${moveTa}`, 'right: 9rem;' );
  // ta_7.setAttribute(`data-${stayTa2}`, 'right: 9rem;' );
  // ta_7.setAttribute(`data-${moveTa2}`, 'right: 73.8rem;' );
  
  
  
  yy_7.setAttribute(`data-${setYy}`, 'right: -100rem;' );
  yy_7.setAttribute(`data-${inYy}`, 'right: 0rem;' );
  // yy_7.setAttribute(`data-${stayYy}`, 'right: 0rem;' );
  // yy_7.setAttribute(`data-${moveYy}`, 'right: 53.2rem;' );
  
  
  hi_7.setAttribute(`data-${setHi}`, 'right: -100rem;' );
  hi_7.setAttribute(`data-${inHi}`, 'right: 16rem;' );
  
  kt_7.setAttribute(`data-${setKt}`, 'right: -100rem;' );
  kt_7.setAttribute(`data-${inKt}`, 'right: 7rem;' );
  
  eno_7.setAttribute(`data-${setEno}`, 'right: -100rem;' );
  eno_7.setAttribute(`data-${inEno}`, 'right: -1rem;' );
  
  db1_7.setAttribute(`data-${setDb1}`, 'opacity: 0;' );
  db1_7.setAttribute(`data-${showDb1}`, 'opacity: 1;' );

  modalBtn.setAttribute(`data-${setModalBtn}`, 'display:none;opacity:0;');
  modalBtn.setAttribute(`data-${activeModalBtn}`, 'display:flex;opacity:0;');
  modalBtn.setAttribute(`data-${showModalBtn}`,'display:flex;opacity:1;');
  modalBtn.setAttribute(`data-${stayScene}`,'display:flex;opacity:1;');
  modalBtn.setAttribute(`data-${window.scene7js.close}`,'display:none;opacity:0;');
}



if(window.innerWidth >= 768) {
  window.addEventListener('DOMContentLoaded	', pcScene7());
}else {
  window.addEventListener('DOMContentLoaded	', spScene7());
}





// //モーダル
// $(window).scroll(function() {
//     var scroll = $(this).scrollTop();
//     if (window.scene7js.base <= scroll <= window.scene7js.close) {
//       $('#modal-button-7').addClass('isShow');
//     }
//     // modalを出す
//     $('#modal-button-7').click(function() {
//     if (window.scene7js.base <= scroll <= window.scene7js.close) {
//       $('#js-modal7').fadeIn();
//       $("body").css({"overflow":"hidden","height":"100%"});
//       $(this).addClass('inModal');
//       $('.scroll-button').addClass('inModal');
//     }
//     })
  
//     // modalを閉じる
//     $('.modal-close__btn').click(function(){
//       $(this).parent().parent().parent('.modal').fadeOut();
//       $("body").css({"overflow":"visible","height":"auto"});
//       $('#modal-button-7').removeClass('inModal');
//       $('.scroll-button').removeClass('inModal');
//     })
//     $('.modal .all-bg').click(function(){
//       $(this).parent().parent('.modal').fadeOut();
//       $("body").css({"overflow":"visible","height":"auto"});
//       $('#modal-button-7').removeClass('inModal');
//       $('.scroll-button').removeClass('inModal');
//     })
    
// });