function pcScene2(){
  //要素の取得
  const scene2 = document.getElementById('scene-2');
  const di = document.getElementById('di-2');
  const ti = document.getElementById('ti-2');
  const pop1 = document.getElementById('pop1-2');
  const pop2 = document.getElementById('pop2-2');
  const modalBtn = document.getElementById('modal-button-2');
  

  // const contents = document.getElementById('contents-1');
  // const gear = document.getElementById('gear-1');
  
  window.scene2js = {
    base : window.scene1js.close + 0,
  };
  let showScene = window.scene2js.base + 300; //2500;
  let setPeople = showScene;
  let showPeople = setPeople + 1000; //4000
  let setPop1 = showPeople + 500;
  let showPop1 = setPop1 + 800;
  let stayPop1 = showPop1 + 500;
  let dropPop1 = stayPop1 + 200; //6000
  let setPop2 = dropPop1 + 200;
  let showPop2 = setPop2 + 500;
  let setModalBtn = showPop2;
  let activeModalBtn = setModalBtn + 1;
  let showModalBtn = setModalBtn + 300;
  let stayScene = showModalBtn + 500;
  window.scene2js.close = stayScene + 500;  

  console.log(setPop1);


  scene2.setAttribute(`data-${window.scene2js.base}`,'display: none; opacity: 0;');
  scene2.setAttribute(`data-${showScene}`,'opacity: 1;display:block;');
  di.setAttribute(`data-${setPeople}`,'right:-100%;');
  ti.setAttribute(`data-${setPeople}`,'left:-100%;');
  di.setAttribute(`data-${showPeople}`,'right: 14%');
  ti.setAttribute(`data-${showPeople}`,'left: 14%');
  pop1.setAttribute(`data-${setPop1}`, 'opacity:0;');
  pop1.setAttribute(`data-${showPop1}`, 'opacity:1;');
  pop1.setAttribute(`data-${stayPop1}`, 'opacity:1;');
  pop1.setAttribute(`data-${dropPop1}`, 'opacity:0;');
  pop2.setAttribute(`data-${setPop2}`, 'opacity:0;');
  pop2.setAttribute(`data-${showPop2}`, 'opacity:1;');
  modalBtn.setAttribute(`data-${setModalBtn}`, 'opacity:0;display:none;');
  modalBtn.setAttribute(`data-${activeModalBtn}`, 'display:flex; opacity:0;');
  modalBtn.setAttribute(`data-${showModalBtn}`,'opacity:1;display:flex; ');
  modalBtn.setAttribute(`data-${stayScene}`,'display:flex; opacity:1;');
  modalBtn.setAttribute(`data-${window.scene2js.close}`,'display:none; opacity:0;');
  // modalBtn.setAttribute(`data-${setModalBtn}`, 'visibility: visible;opacity:0;');
  // modalBtn.setAttribute(`data-${showModalBtn}`,'opacity:1;');
  scene2.setAttribute(`data-${stayScene}`,'opacity: 1;display:block;');
  scene2.setAttribute(`data-${window.scene2js.close}`,'opacity: 0; display: none;');
};

const spScene2 = () => {
  //要素の取得
  const scene2 = document.getElementById('scene-2');
  const di = document.getElementById('di-2');
  const ti = document.getElementById('ti-2');
  const pop1 = document.getElementById('pop1-2');
  const pop2 = document.getElementById('pop2-2');
  const modalBtn = document.getElementById('modal-button-2');
  

  // const contents = document.getElementById('contents-1');
  // const gear = document.getElementById('gear-1');
  
  window.scene2js = {
    base : window.scene1js.close + 0,
  };
  
  let showScene = window.scene2js.base + 300; //2500;
  let setPeople = showScene;
  let showPeople = setPeople + 1000; //4000
  let setPop1 = showPeople + 500;
  let showPop1 = setPop1 + 800;
  let stayPop1 = showPop1 + 500;
  let dropPop1 = stayPop1 + 200; //6000
  let setPop2 = dropPop1 + 200;
  let showPop2 = setPop2 + 500;
  let setModalBtn = showPop2;
  let activeModalBtn = setModalBtn + 1;
  let showModalBtn = setModalBtn + 300;
  let stayScene = showModalBtn + 500;
  window.scene2js.close = stayScene + 500;

  scene2.setAttribute(`data-${window.scene2js.base}`,'display: none; opacity: 0;');
  scene2.setAttribute(`data-${showScene}`,'opacity: 1;display:block;');
  di.setAttribute(`data-${setPeople}`,'right:-100%;');
  ti.setAttribute(`data-${setPeople}`,'left:-100%;');
  di.setAttribute(`data-${showPeople}`,'right: 5%');
  ti.setAttribute(`data-${showPeople}`,'left: 8%');
  pop1.setAttribute(`data-${setPop1}`, 'opacity:0;');
  pop1.setAttribute(`data-${showPop1}`, 'opacity:1;');
  pop1.setAttribute(`data-${stayPop1}`, 'opacity:1;');
  pop1.setAttribute(`data-${dropPop1}`, 'opacity:0;');
  pop2.setAttribute(`data-${setPop2}`, 'opacity:0;');
  pop2.setAttribute(`data-${showPop2}`, 'opacity:1;');
  modalBtn.setAttribute(`data-${setModalBtn}`, 'opacity:0;display:none;');
  modalBtn.setAttribute(`data-${activeModalBtn}`, 'display:flex; opacity:0;');
  modalBtn.setAttribute(`data-${showModalBtn}`,'opacity:1;display:flex; ');
  modalBtn.setAttribute(`data-${stayScene}`,'display:flex; opacity:1;');
  scene2.setAttribute(`data-${stayScene}`,'opacity: 1;display:block;');
  scene2.setAttribute(`data-${window.scene2js.close}`,'opacity: 0; display: none;');
  modalBtn.setAttribute(`data-${window.scene2js.close}`,'display:none; opacity:0;');
};


if(window.innerWidth >= 768) {
  window.addEventListener('DOMContentLoaded	', pcScene2());
} else {
  window.addEventListener('DOMContentLoaded	', spScene2());
}

// //モーダル
//   $(window).scroll(function() {
//     var scroll = $(this).scrollTop();
//     console.log(scroll);
//     if (window.scene2js.base <= scroll && scroll <= window.scene2js.close) {
//       $('#modal-button-2').addClass('isShow');
//     }
//     // modalを出す
//     $('#modal-button-2').click(function() {
//     if (window.scene2js.base <= scroll <= window.scene2js.close) {
//       $('.js-modal2').fadeIn();
//       // const modal = document.getElementById('js-modal2').style.display ="block";
//       $("body").css({"overflow":"hidden","height":"100%"});
//       $('#modal-button-2').addClass('inModal');
//       $('.scroll-button').addClass('inModal');
//     }
//     })
  
//     // modalを閉じる
//     $('.modal-close__btn').click(function(){
//       $(this).parent().parent().parent('.modal').fadeOut();
//       $("body").css({"overflow":"visible","height":"auto"});
//       $('#modal-button-2').removeClass('inModal');
//       $('.scroll-button').removeClass('inModal');
//     })
//     $('.modal .all-bg').click(function(){
//       $(this).parent().parent('.modal').fadeOut();
//       $("body").css({"overflow":"visible","height":"auto"});
//       $('#modal-button-2').removeClass('inModal');
//       $('.scroll-button').removeClass('inModal');
//     })
    
//   });




