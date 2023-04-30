// 헤더 이벤트
var header = document.querySelector('#header');
var menu = document.querySelector('.menu');
var logo_img = document.querySelector('.logo_img');
var li = document.querySelector('.menu > ul > li');
var all_menu = document.querySelector('.all_menu > a > img');

menu.onmouseover = function(){
    header.style.height = '350px';
    header.style.backgroundColor = 'white';
    header.style.transition = '0.5s ease-in-out';
    logo_img.src = "img/logo_black.svg";
    all_menu.src = "img/ico_24_allmenu_black.svg";
}
menu.onmouseout = function(){
    header.style.height = '100px';
    header.style.backgroundColor = '';
    header.style.transition = '0.5s ease-in-out';
    logo_img.src = "img/logo_white.svg";
    all_menu.src = "img/ico_24_allmenu_white.svg";
}

// 로고 이벤트
logo_img.onmouseover = function(){
    logo_img.src = "img/logo_black.svg";
}
logo_img.onmouseout = function(){
    logo_img.src = "img/logo_white.svg";
}

all_menu.onmouseover = function(){
    all_menu.src = "img/ico_24_allmenu_black.svg";
}
all_menu.onmouseout = function(){
    all_menu.src = "img/ico_24_allmenu_white.svg";
}

// 컨텐츠 이벤트
var pag_img = document.querySelector('#pag_1 img');
var left = document.querySelector('.scroll-1 .left');
var right = document.querySelector('.scroll-1 .right');
var center = document.querySelector('.scroll-1 .center');
var img_arr = ['img/MODS0030_20210617220407_xYuWGMXB.jpg','img/MODS0030_20210617220308_xgmVdukT.jpg', 'img/20230105102603_1672881963005_YaXqkjwizf.jpg', 'img/20221103091349_1667434429086_8v1DpqEfe5.jpg'];
var len = img_arr.length;

left.onclick = function(){
    var temp = center.innerHTML.split(' / ');
    var idx = parseInt(temp[0]);
    console.log('dd');
    if(idx == 1) {
        pag_img.src = img_arr[len-1];
        center.innerHTML = len+' / '+len;
    }else {
        pag_img.src = img_arr[idx-2];
        center.innerHTML = (idx-1)+' / '+len;
    }
}

right.onclick = function(){
    var temp = center.innerHTML.split(' / ');
    var idx = parseInt(temp[0]);
    if(idx == img_arr.length) {
        pag_img.src = img_arr[0];
        center.innerHTML = 1+' / '+len;
    }else {
        pag_img.src = img_arr[idx];
        center.innerHTML = (idx+1)+' / '+len;
    } 
}

// 맨 위로 이동 버튼
/* var quick_btn2 = document.querySelector('.quick_btn2 > a');
quick_btn2.onclick = function(){
    console.log('왓냐');
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
} */

