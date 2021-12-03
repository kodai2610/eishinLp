const pcScene6 = () => {
  //要素の取得
  const scene_6 = document.getElementById('scene_6');
  const ek_6 = document.getElementById('ek-6');
  const yk_6 = document.getElementById('yk-6');
  const pop_6 = document.getElementById('pop-6');
  const dog1_6 = document.getElementById('dog1-6');
  const dog2_6 = document.getElementById('dog2-6');
  const dog3_6 = document.getElementById('dog3-6');
  const dog4_6 = document.getElementById('dog4-6');
  const slide_6 = document.getElementById('slide-6');
  const dog_hand1_6= document.getElementById('dog-hand1-6');
  const dog_hand2_6 = document.getElementById('dog-hand2-6');
  
  
  //スクロール量
  // let s6_base = 31000;
  //30000にscene5終了
  
  window.scene6js = {};
  window.scene6js.base = window.scene5js.close;
  let s6_base = window.scene6js.base;
  let s6_base_1 = s6_base + 300;
  let s6_1 = s6_base + 1000; 
  let s6_2 = s6_base_1; 
  // let s6_2 = s6_1; 
  let s6_3 = s6_2 + 1000;
  let s6_4 = s6_3 + 1000;
  let s6_5 = s6_4 + 500;  
  let s6_6 = s6_5 + 500;
  let s6_7 = s6_6 + 500;
  let s6_8 = s6_7 + 500;
  let s6_9 = s6_8 + 900;
  let s6_10 = s6_9 + 100;
  // let s6_11 = s6_10 + 500;
  let s6_11 = s6_10 + 100;
  let s6_12 = s6_11 + 500;
  let s6_13 = s6_12 + 500;
  let s6_14 = s6_13 + 1000;
  let s6_15 = s6_14 + 500; //40500
  window.scene6js.close = s6_15;
  
  
  
  
  
  //セット作業
  scene_6.setAttribute(`data-${s6_base}`, 'display: none; opacity: 0;' ); 
  scene_6.setAttribute(`data-${s6_base_1}`, 'display: block; opacity: 1;' ); 
  scene_6.setAttribute(`data-${s6_14}`, 'display: block; opacity: 1;' ); 
  scene_6.setAttribute(`data-${s6_15}`, 'opacity:0; display:none;' ); 
  
  
  ek_6.setAttribute(`data-${s6_2}`, 'left: -100rem;' ); 
  ek_6.setAttribute(`data-${s6_3}`, 'left: 46rem;' ); 
  ek_6.setAttribute(`data-${s6_9}`, 'visibility: visible; opacity: 1;' );  //38.9
  ek_6.setAttribute(`data-${s6_10}`, 'visibility:hidden; opacity:0;' );  //39
  
  yk_6.setAttribute(`data-${s6_2}`, 'right: -100rem;' ); 
  yk_6.setAttribute(`data-${s6_3}`, 'right: 47rem;' ); 
  yk_6.setAttribute(`data-${s6_9}`, 'visibility: visible; opacity: 1;' );  //38.9
  yk_6.setAttribute(`data-${s6_10}`, 'visibility:hidden; opacity:0;' );  //39
  
  pop_6.setAttribute(`data-${s6_4}`, 'opacity: 0;' ); 
  pop_6.setAttribute(`data-${s6_5}`, 'opacity: 1;' ); 
  pop_6.setAttribute(`data-${s6_9}`, 'visibility: visible; opacity: 1;' );  //38.9
  pop_6.setAttribute(`data-${s6_10}`, 'visibility:hidden; opacity:0;' );  //39
  
  dog1_6.setAttribute(`data-${s6_6}`, 'left:-100rem;' );  //37
  dog1_6.setAttribute(`data-${s6_7}`, 'left:18.6rem;' );  //37.5
  dog1_6.setAttribute(`data-${s6_9}`, 'visibility: visible; opacity: 1;' );  //38.9
  dog1_6.setAttribute(`data-${s6_10}`, 'visibility:hidden; opacity:0;' );  //39
  
  
  dog2_6.setAttribute(`data-${s6_5}`, 'left:-100rem;' );
  dog2_6.setAttribute(`data-${s6_7}`, 'left:36.9rem;' );
  dog2_6.setAttribute(`data-${s6_9}`, 'visibility: visible; opacity: 1;' );  //38.9
  dog2_6.setAttribute(`data-${s6_10}`, 'visibility:hidden; opacity:0;' );  //39
  
  dog3_6.setAttribute(`data-${s6_5}`, 'right: -100rem;' );
  dog3_6.setAttribute(`data-${s6_7}`, 'right: 35.1rem;' );
  dog3_6.setAttribute(`data-${s6_9}`, 'visibility: visible; opacity: 1;' );  //38.9
  dog3_6.setAttribute(`data-${s6_10}`, 'visibility:hidden; opacity:0;' );  //39
  
  
  dog4_6.setAttribute(`data-${s6_6}`, 'right: -100rem;' );
  dog4_6.setAttribute(`data-${s6_7}`, 'right: 16.3rem;' ); 
  
  
  slide_6.setAttribute(`data-${s6_8}`, 'transform: translate(-200%,200%);' ); //38
  slide_6.setAttribute(`data-${s6_10}`, 'transform: translate(-50%,-50%);' ); //39
  
  dog_hand1_6.setAttribute(`data-${s6_11}`, 'transform: translate(-200%,200%);' );
  dog_hand1_6.setAttribute(`data-${s6_12}`, 'transform: translate(0,0);' );
  
  dog_hand2_6.setAttribute(`data-${s6_12}`, 'transform: translate(-200%,200%);' );
  dog_hand2_6.setAttribute(`data-${s6_13}`, 'transform: translate(0,0);' );
  
}  

const spScene6 = () => {
  //要素の取得
  const scene_6 = document.getElementById('scene_6');
  const ek_6 = document.getElementById('ek-6');
  const yk_6 = document.getElementById('yk-6');
  const pop_6 = document.getElementById('pop-6');
  const dog1_6 = document.getElementById('dog1-6');
  const dog2_6 = document.getElementById('dog2-6');
  const dog3_6 = document.getElementById('dog3-6');
  const dog4_6 = document.getElementById('dog4-6');
  const slide_6 = document.getElementById('slide-6');
  const dog_hand1_6= document.getElementById('dog-hand1-6');
  const dog_hand2_6 = document.getElementById('dog-hand2-6');
  
  
  //スクロール量
  // let s6_base = 31000;
  //30000にscene5終了
  
  window.scene6js = {};
  window.scene6js.base = window.scene5js.close;
  let s6_base = window.scene6js.base;
  let s6_base_1 = s6_base + 300;
  let s6_1 = s6_base + 1000; 
  // let s6_2 = s6_1; 
  let s6_2 = s6_base_1; 
  let s6_3 = s6_2 + 500;
  let s6_4 = s6_3 + 1000;
  let s6_5 = s6_4 + 500;  
  let s6_6 = s6_5 + 200;
  let s6_7 = s6_6 + 400;
  let s6_8 = s6_7 + 500;
  let s6_9 = s6_8;
  let s6_10 = s6_9 + 500;
  let s6_11 = s6_10 + 200;
  let s6_12 = s6_11 + 200;
  let s6_13 = s6_12 + 200;
  let s6_14 = s6_13 + 1000;
  let s6_15 = s6_14 + 500; //40500
  window.scene6js.close = s6_15;


  
  
  
  
  
  //セット作業
  scene_6.setAttribute(`data-${s6_base}`, 'display: none; opacity: 0;' ); 
  scene_6.setAttribute(`data-${s6_base_1}`, 'display: block; opacity: 1;' ); 
  scene_6.setAttribute(`data-${s6_14}`, 'display: block; opacity: 1;' ); 
  scene_6.setAttribute(`data-${s6_15}`, 'opacity:0; display:none;' ); 
  
  
  ek_6.setAttribute(`data-${s6_2}`, 'transform: translateX(-500%);' ); 
  ek_6.setAttribute(`data-${s6_3}`, 'transform: translateX(0%);' ); 
  // ek_6.setAttribute(`data-${s6_9}`, 'visibility: visible; opacity: 1;' );  //38.9
  // ek_6.setAttribute(`data-${s6_10}`, 'visibility:hidden; opacity:0;' );  //39
  
  yk_6.setAttribute(`data-${s6_2}`, 'transform: translateX(500%);' ); 
  yk_6.setAttribute(`data-${s6_3}`, 'transform: translateX(0%);' ); 
  // yk_6.setAttribute(`data-${s6_9}`, 'visibility: visible; opacity: 1;' );  //38.9
  // yk_6.setAttribute(`data-${s6_10}`, 'visibility:hidden; opacity:0;' );  //39
  
  pop_6.setAttribute(`data-${s6_4}`, 'opacity: 0;' ); 
  pop_6.setAttribute(`data-${s6_5}`, 'opacity: 1;' ); 
  // pop_6.setAttribute(`data-${s6_9}`, 'visibility: visible; opacity: 1;' );  //38.9
  // pop_6.setAttribute(`data-${s6_10}`, 'visibility:hidden; opacity:0;' );  //39
  
  dog1_6.setAttribute(`data-${s6_6}`, 'transform: translateX(-800%);' );  //37
  dog1_6.setAttribute(`data-${s6_7}`, 'transform: translateX(0%);' );  //37.5
  // dog1_6.setAttribute(`data-${s6_9}`, 'visibility: visible; opacity: 1;' );  //38.9
  // dog1_6.setAttribute(`data-${s6_10}`, 'visibility:hidden; opacity:0;' );  //39
  
  
  dog2_6.setAttribute(`data-${s6_5}`, 'transform: translateX(-800%);' );
  dog2_6.setAttribute(`data-${s6_7}`, 'transform: translateX(0%);' );
  // dog2_6.setAttribute(`data-${s6_9}`, 'visibility: visible; opacity: 1;' );  //38.9
  // dog2_6.setAttribute(`data-${s6_10}`, 'visibility:hidden; opacity:0;' );  //39
  
  dog3_6.setAttribute(`data-${s6_5}`, 'transform:translateX(800%);' );
  dog3_6.setAttribute(`data-${s6_7}`, 'transform:translateX(0%);' );
  // dog3_6.setAttribute(`data-${s6_9}`, 'visibility: visible; opacity: 1;' );  //38.9
  // dog3_6.setAttribute(`data-${s6_10}`, 'visibility:hidden; opacity:0;' );  //39
  
  
  dog4_6.setAttribute(`data-${s6_6}`, 'transform:translateX(800%);' );
  dog4_6.setAttribute(`data-${s6_7}`, 'transform:translateX(0%);' ); 
  // dog4_6.setAttribute(`data-${s6_9}`, 'visibility: visible; opacity: 1;' );  //38.9
  // dog4_6.setAttribute(`data-${s6_10}`, 'visibility:hidden; opacity:0;' );
  
  slide_6.setAttribute(`data-${s6_8}`, 'transform: translate(-200%,200%);' ); //38
  slide_6.setAttribute(`data-${s6_10}`, 'transform: translate(-50%,-55%);' ); //39
  
  dog_hand1_6.setAttribute(`data-${s6_11}`, 'transform: translate(-200%,200%);' );
  dog_hand1_6.setAttribute(`data-${s6_12}`, 'transform: translate(0,0);' );
  
  dog_hand2_6.setAttribute(`data-${s6_12}`, 'transform: translate(-200%,200%);' );
  dog_hand2_6.setAttribute(`data-${s6_13}`, 'transform: translate(0,0);' );
  
}


// if(window.innerWidth >= 768) {
//   pcScene6();
// }else {
//   spScene6();
// }



if(window.innerWidth >= 768) {
  window.addEventListener('DOMContentLoaded', pcScene6());
}else {
  window.addEventListener('DOMContentLoaded', spScene6());
}
