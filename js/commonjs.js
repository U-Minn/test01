
let t_close_btn = document.getElementById('close_btn');
let t_banner = document.getElementById('top_banner');
let header = document.getElementById('header');
let h_o_top = header.offsetTop;

t_close_btn.addEventListener('click', function(){
    top_banner.style.display = "none"
    h_o_top = h_o_top.offsetTop;
})

let search_icon = document.getElementById('search_icon');
let header_bot = document.getElementsByClassName('header_bot')[0];
search_icon.addEventListener('click', function() {
    header_bot.style.display = "flex"
})

let close_btn2 = document.getElementById('close_btn2');
close_btn2.addEventListener('click', function(){
    header_bot.style.display = "none"
})

// 요소잡기 dot 잡아서 black 클래스 넣고 빼기...
function plus(el) {

    let dots = document.getElementsByClassName('dot');
    for(let i=0; i<dots.length; i++) {
        console.log(i)
        dots[i].classList.remove('black')
    }

    // console.log(el)
    console.log(el.children)
    console.log(el.children[0].classList)
    // console.log(el.children.classList.add('black'))

    el.children[0].classList.add('black')
        // el.children('.dot').classList.add('black')
}

// 여기까지 헤더

// 하단 문의창과 top키
let inquiry_btn = document.getElementById('inquiry_btn');
let inquiry_box = document.getElementById('inquiry_box');
let x_btn = document.getElementsByClassName('x_btn')[0];
inquiry_btn.addEventListener('click', function() {
    inquiry_box.style.display = "block";
    setTimeout(function() { 
        inquiry_box.style.bottom = "100px"; 
        inquiry_box.style.opacity = "1";  
    }, 10); 
    inquiry_btn.style.display = "none"; 
    x_btn.style.display = "block"; 
});

x_btn.addEventListener('click', function(){
    inquiry_box.style.bottom = "70px";
    inquiry_box.style.opacity = "0";

    setTimeout(function() {
        inquiry_box.style.display = "none"; 
    }, 500); 

    inquiry_btn.style.display = "block";
    x_btn.style.display = "none";
});

// 스크롤이 내려가면 top키에 diplay block 속성 추가
// top키를 누르면 페이지 제일 상단으로 이동하기
let topBtn = document.getElementById("top_btn");
window.onscroll = function() {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block"; 
    } else {
        topBtn.style.display = "none"; 
    }
};
topBtn.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'

    })
})
// personal 버튼 누르면 뜨는 창
let personal = document.getElementsByClassName('inner_li')[0];
personal.addEventListener('click', function(){
    alert('회원만 접근권한이 있습니다.')
})

// 반응형 헤더 버튼이벤트
let m_btn = document.getElementsByClassName('mobile_menu_btn')[0];
let menu_pan = document.getElementsByClassName('menu_pan')[0];
let layer = document.getElementsByClassName('layer')[0];

m_btn.addEventListener('click', function(){
    menu_pan.style.left="0";
    layer.style.left="75%";
})

layer.addEventListener('click', function(){
    menu_pan.style.left="-100%";
    layer.style.left="-100%";
}) 

//글로벌버튼 누르면 나오는거

let global_btn = document.getElementsByClassName('global_btn')[0];
let m_menu = document.getElementsByClassName('m_menu_inner_ul')[0];
global_btn.addEventListener('click', function(){
    m_menu.classList.toggle('active')
})
