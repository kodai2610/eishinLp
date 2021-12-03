//スクローラー開始
var s = skrollr.init({
  easing:'swing',
  smoothScrolling: true,
});
//自動再生
$('.scroll-button').click(function (e) {
  // var nowPos = $(window).scrollTop();
  var nowPos = s.getScrollTop();
  var goal = window.scene10js.stay;
  var distance = goal - nowPos;
  // 速度を定数にして、durationを求めることにより一定にする
  var speed = 0.9;
  var durationTime = distance / speed;
  console.log('durationTime' + durationTime);
  console.log('goal' + goal);
  console.log('speed' + speed);
  console.log('nowPos' + nowPos);
  console.log('distance' + distance);
  console.log('durationTime' + durationTime);
  s.animateTo(goal, {
    duration: durationTime,
  });
  e.stopPropagation();
  $('body').click(function() {
    if(s.isAnimatingTo()) {
      s.stopAnimateTo();
    }
  });
});
//トップへ戻る
$('#scroll-button-top').click(function(e){
  s.animateTo(0, {
    duration: 100,
  });
  e.stopPropagation();
  $('body').click(function() {
    if(s.isAnimatingTo()) {
      s.stopAnimateTo();
    }
  });
})
// スクロールボタンとトップボタン出し分ける処理
window.addEventListener('scroll', () => {
  let scroll = s.getScrollTop();
  // console.log('scroll' + scroll);
  if(window.scene10js.base <= scroll) {
    $('#scroll-button-top').addClass('isShow');
    $('.scroll-button').removeClass('isShow');
  }else {
    $('#scroll-button-top').removeClass('isShow');
    $('.scroll-button').addClass('isShow');
  }
})

//スクロールナビ


//ローディング画面
$(window).on('load', function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(900).fadeOut(800);
  $('.loader-wrapper').delay(600).fadeOut(300);
});

// 5秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()', 1800);
});

function stopload(){
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}

//モーダルボタン
$('#modal-button-2').click(function() {
    $('.js-modal2').fadeIn();
    // const modal = document.getElementById('js-modal2').style.display ="block";
    $("body").css({"overflow":"hidden","height":"100%"});
    $('#modal-button-2').addClass('isOpen');
    $('.scroll-button').addClass('isOpen');
});
$('#modal-button-4').click(function() {
    $('.js-modal4').fadeIn();
    // const modal = document.getElementById('js-modal2').style.display ="block";
    $("body").css({"overflow":"hidden","height":"100%"});
    $('#modal-button-4').addClass('isOpen');
    $('.scroll-button').addClass('isOpen');
});
$('#modal-button-5').click(function() {
    $('.js-modal5').fadeIn();
    // const modal = document.getElementById('js-modal2').style.display ="block";
    $("body").css({"overflow":"hidden","height":"100%"});
    $('#modal-button-5').addClass('isOpen');
    $('.scroll-button').addClass('isOpen');
});
$('#modal-button-7').click(function() {
    $('.js-modal7').fadeIn();
    // const modal = document.getElementById('js-modal2').style.display ="block";
    $("body").css({"overflow":"hidden","height":"100%"});
    $('#modal-button-7').addClass('isOpen');
    $('.scroll-button').addClass('isOpen');
});
  
// modalを閉じる
$('.modal-close__btn').click(function(){
  $(this).parent().parent().parent('.modal').fadeOut();
  $("body").css({"overflow":"visible","height":"auto"});
  $('#modal-button-2').removeClass('isOpen');
  $('.scroll-button').removeClass('isOpen');
})
$('.modal .all-bg').click(function(){
  $(this).parent().parent('.modal').fadeOut();
  $("body").css({"overflow":"visible","height":"auto"});
  $('#modal-button-2').removeClass('isOpen');
  $('.scroll-button').removeClass('isOpen');
})
    








/*
//モーダル
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    console.log(scroll);
    if (window.scene2js.base <= scroll && scroll <= window.scene2js.close) {
      $('#modal-button-2').addClass('isShow');
    }
    // modalを出す
    $('#modal-button-2').click(function() {
    if (window.scene2js.base <= scroll <= window.scene2js.close) {
      $('.js-modal2').fadeIn();
      // const modal = document.getElementById('js-modal2').style.display ="block";
      $("body").css({"overflow":"hidden","height":"100%"});
      $('#modal-button-2').addClass('inModal');
      $('.scroll-button').addClass('inModal');
    }
    })
  
    // modalを閉じる
    $('.modal-close__btn').click(function(){
      $(this).parent().parent().parent('.modal').fadeOut();
      $("body").css({"overflow":"visible","height":"auto"});
      $('#modal-button-2').removeClass('inModal');
      $('.scroll-button').removeClass('inModal');
    })
    $('.modal .all-bg').click(function(){
      $(this).parent().parent('.modal').fadeOut();
      $("body").css({"overflow":"visible","height":"auto"});
      $('#modal-button-2').removeClass('inModal');
      $('.scroll-button').removeClass('inModal');
    })
    
  });
*/



/*
// CLICK HERE 画面幅,高さに応じて
var windowWidth = window.innerWidth;
var windowHeight = $(window).height();

if( 768 <= windowWidth && windowWidth <= 1280){
  $('.modal-button').css('left','82.4%');
  // $('.scroll-button').css('left','97%');
}

///デバイス

// if(windowHeight <= 800){
//   $('.modal-button').css('top','95%');
//   $('.scroll-button').css('top','95%');
// }




// CLICK HERE 画面幅のリサイズにも対応
$(window).resize(function() { //リサイズ中
  var windowWidth = window.innerWidth;
  var windowHeight = $(window).height();

  if(768 <= windowWidth <= 1280){
    $('.modal-button').css('left','84.4%');
    // $('.scroll-button').css('left','97%');
  } else {
    $('.modal-button').css('left','calc(50% + 440px)');
    // $('.scroll-button').css('left','calc(50% + 590px)');
  }

  if(windowHeight <= 800){
    $('.modal-button').css('top','95%');
    // $('.scroll-button').css('top','95%');
  } else {
    $('.modal-button').css('top','calc(50% + 360px)');
    // $('.scroll-button').css('top','calc(50% + 360px)');
  }
});
*/