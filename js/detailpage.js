//  결제창 플러스 마이너스
function qtyplus() {
    let qty = document.getElementById('item_qty');
    
    if(qty.value < 3) {
        qty.value = +qty.value + 1;
    }
    else {
        alert("최대 주문수량은 3개 입니다.")
    }
}
function qtyminus() {
    let qty = document.getElementById('item_qty');
    
    if(qty.value > 1) {
        qty.value = +qty.value - 1;
    }

    else {
        alert("최소 주문 수량은 1개 입니다.")
    }
}
// 탭 버튼 누르면 해당 탭 판이 보이게끔 탭버튼누르면 해당판에 tap_show 클래스 추가
//  나머지 클래스에선 tap_show 제거
// 순서1 버튼과 판 요소 잡기
//  순서2 버튼을 누르면 판 요소에 에드 클래스로 tap_show 주기
// for문으로 tap_show 클래스 제거하기


let tapbtn = document.getElementsByClassName('tapbtn');
let tap = document.getElementsByClassName('tap');
let arrsvg = document.getElementsByClassName('arr_svg')[0];

for(let i=0; i< tapbtn.length; i++) {
    tapbtn[i].addEventListener('click', function(){
        
        for(let j =0; j < tap.length; j++) {
            arrsvg.classList.remove('arrblack')
            tap[j].classList.remove('tap_show')
            tapbtn[j].classList.remove('tapbtn_show')
        }
        tap[i].classList.add('tap_show');
        tapbtn[i].classList.add('tapbtn_show')

        if(i==tapbtn.length-1) {
            arrsvg.classList.add('arrblack')
        }
    });
}

// 아이템 이미지 for문으로 돌려서 넣기

let img_list = document.getElementsByClassName('img_list')[0];

for(let i= 1; i<PRODUCT01.length; i++) {
    let li = document.createElement('li');
    li.className = 'detail_img'

    let img = document.createElement('img');
    img.src = PRODUCT01[i];
    img.alt = `제품이미지`;

    li.appendChild(img);
    img_list.appendChild(li);

}

let itemList = document.getElementsByClassName('r_item_ul')[0];
let itemCount = document.getElementsByClassName('item_li').length;
for(let i=1; i<6; i++){
    itemList.innerHTML += ` <li class="item_li">
                                <a href="#">
                                    <div class="thumnail">
                                        <img src="./01.WestFleece/${FLEECE[i].src}" alt="">
                                    </div>
                                </a>
                                <div class="description">
                                    <div class="item_title">
                                        <a href="#">${FLEECE[i].title}</a>
                                    </div>
                                    <div class="item_price">
                                        ${FLEECE[i].price}
                                    </div>
                                </div>
                            </li>`;
}

// 스크롤하면 하단 아이템 보이게하기
document.addEventListener('scroll', scrollMove);
let chk = true;

function scrollMove() {
    let scrollY = window.scrollY; 
    let windowHeight = window.innerHeight; 

    let item_li = document.getElementsByClassName('item_li');  

    for (let i = 0; i < item_li.length; i++) {
        let item_o_top = item_li[i].offsetTop;  

        if ((scrollY + windowHeight) >= item_o_top) {
            item_li[i].classList.add('show');
        } else {
            item_li[i].classList.remove('show'); 
        }
    }
}
