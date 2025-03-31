
// 메인배너 이미지부분
window.addEventListener('load', function(){
    let banner = this.document.getElementsByClassName('main_banner')[0];
    banner.classList.add('show');
})
document.addEventListener('scroll', scrollMove);
let chk = true;
function scrollMove() {
    let scrollY = window.scrollY;
    let window_height = window.innerHeight;
    let sec1 = document.getElementsByClassName('sec1')[0];
    let sec2 = document.getElementsByClassName('sec2')[0];
    let sec1_o_top = sec1.offsetTop;
    let sec2_o_top = sec2.offsetTop;
    // let sec_o_top = document.getElementsByClassName('section')[0].offsetTop;

    if (chk == true && (scrollY + window_height) >= sec1_o_top) {
        sec1.classList.add('show');
        sec2.classList.add('show');
        chk = false;
    }
    else if (chk == false && (scrollY + window_height) < sec1_o_top) {
        sec1.classList.remove('show');
        sec2.classList.remove('show');
        chk = true;
    }
    /////////////////////
    
    if (chk == true && (scrollY + window_height) >= sec2_o_top) {
        sec2.classList.add('show');
        chk = false;
    }
    else if (chk == false && (scrollY + window_height) < sec2_o_top) {
        sec2.classList.remove('show');
        chk = true;
    }
}
// 여기까지 메인배너







