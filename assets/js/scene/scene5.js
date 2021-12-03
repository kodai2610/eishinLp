const pcScene5 = () => {
  const scene = document.getElementById('scene-5');
  const sales = document.getElementById('sales-5');
  const pop = document.getElementById('pop-5');
  const modalBtn = document.getElementById('modal-button-5');
  
  window.scene5js = {};
  window.scene5js.base = window.scene4js.close;
  let showScene = window.scene5js.base + 300;
  let setSales = showScene;
  let showSales = setSales + 1000;
  let setPop = showSales + 300;
  let showPop = setPop + 200;
  let setModalBtn = showPop + 300;
  let activeModalBtn = setModalBtn + 1;
  let showModalBtn = setModalBtn + 300;
  let stayScene = showModalBtn + 1000;
  window.scene5js.close = stayScene + 500;


  scene.setAttribute(`data-${window.scene5js.base}`,'display: none; opacity: 0;');
  scene.setAttribute(`data-${showScene}`,'display: block; opacity: 1;');
  sales.setAttribute(`data-${setSales}`,'left: -128rem;');
  sales.setAttribute(`data-${showSales}`,'left: 17.2rem;');
  pop.setAttribute(`data-${setPop}`,'opacity:0;');
  pop.setAttribute(`data-${showPop}`,'opacity:1;');
  // modalBtn.setAttribute(`data-${setModalBtn}`, 'visibility: visible;opacity:0;');
  // modalBtn.setAttribute(`data-${showModalBtn}`,'opacity:1;');
  modalBtn.setAttribute(`data-${setModalBtn}`, 'opacity:0;display:none;');
  modalBtn.setAttribute(`data-${activeModalBtn}`, 'display:flex; opacity:0;');
  modalBtn.setAttribute(`data-${showModalBtn}`,'opacity:1;display:flex; ');
  modalBtn.setAttribute(`data-${stayScene}`,'display:flex; opacity:1;');
  modalBtn.setAttribute(`data-${window.scene5js.close}`,'display:none; opacity:0;');
  scene.setAttribute(`data-${stayScene}`,'display: block; opacity: 1;');
  scene.setAttribute(`data-${window.scene5js.close}`,'display: none; opacity: 0;');

}

const spScene5 = () => {
  const scene = document.getElementById('scene-5');
  const sales = document.getElementById('sales-5');
  const pop = document.getElementById('pop-5');
  const modalBtn = document.getElementById('modal-button-5');

  window.scene5js = {};
  window.scene5js.base = window.scene4js.close;
  let showScene = window.scene5js.base + 300;
  let setSales = showScene;
  let showSales = setSales + 1000;
  let setPop = showSales + 300;
  let showPop = setPop + 200;
  // let showPop = setPop + 800;
  let setModalBtn = showPop + 300;
  let activeModalBtn = setModalBtn + 1;
  let showModalBtn = setModalBtn + 300;
  let stayScene = showModalBtn + 1000;

  window.scene5js.close = stayScene + 500;


  scene.setAttribute(`data-${window.scene5js.base}`,'display: none; opacity: 0;');
  scene.setAttribute(`data-${showScene}`,'display: block; opacity: 1;');
  sales.setAttribute(`data-${setSales}`,'transform: translateX(-300%);');
  sales.setAttribute(`data-${showSales}`,'transform: translateX(0%);');
  pop.setAttribute(`data-${setPop}`,'opacity:0;');
  pop.setAttribute(`data-${showPop}`,'opacity:1;');
  modalBtn.setAttribute(`data-${setModalBtn}`, 'display:none;;opacity:0;');
  modalBtn.setAttribute(`data-${activeModalBtn}`, 'display:flex;opacity:0;');
  modalBtn.setAttribute(`data-${showModalBtn}`,'display:flex;opacity:1;');
  modalBtn.setAttribute(`data-${stayScene}`,'display:flex;opacity:1;');
  modalBtn.setAttribute(`data-${window.scene5js.close}`,'display:none;opacity:0;');
  scene.setAttribute(`data-${stayScene}`,'display: block; opacity: 1;');
  scene.setAttribute(`data-${window.scene5js.close}`,'display: none; opacity: 0;');
}


if(window.innerWidth >= 768) {
  window.addEventListener('DOMContentLoaded', pcScene5());
}else {
  window.addEventListener('DOMContentLoaded', spScene5());
}


//モーダル
// $(window).scroll(function() {
//     var scroll = $(this).scrollTop();
//     console.log(scroll);
//     if (window.scene5js.base <= scroll && scroll <= window.scene5js.close) {
//       $('#modal-button-5').addClass('isShow');
//     }
//     // modalを出す
//     $('#modal-button-5').click(function() {
//     if (window.scene5js.base <= scroll <= window.scene5js.close) {
//       // $('#js-modal5').fadeIn();
//       const modal = document.getElementById('js-modal5').style.display ="block";
//       $("body").css({"overflow":"hidden","height":"100%"});
//       $(this).addClass('inModal');
//       $('.scroll-button').addClass('inModal');
//     }
//     })

//     // modalを閉じる
//     $('.modal-close__btn').click(function(){
//       $(this).parent().parent().parent('.modal').fadeOut();
//       $("body").css({"overflow":"visible","height":"auto"});
//       $('#modal-button-5').removeClass('inModal');
//       $('.scroll-button').removeClass('inModal');
//     })
//     $('.modal .all-bg').click(function(){
//       $(this).parent().parent('.modal').fadeOut();
//       $("body").css({"overflow":"visible","height":"auto"});
//       $('#modal-button-5').removeClass('inModal');
//       $('.scroll-button').removeClass('inModal');
//     })
  
// });

