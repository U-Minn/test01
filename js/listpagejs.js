let category = get_url_info("category")
// console.log("category: ",category)

let category_title = document.getElementsByClassName('category_title')[0];
category_title.innerText = `${CATEGORY_TITLE[category]}`

// ul에 아이템 li요소들 넣기기
let itemList = document.getElementsByClassName('list_ul')[0];
let itemCount = document.getElementsByClassName('item_li').length;


for(let i=0; i<ITEMMENU[category].length; i++){
    itemList.innerHTML += ` <li class="item_li">
                                <a href="./detailpage1.html">
                                    <div class="thumnail">
                                        <img src="./00.list_item/${ITEMMENU[category][i].src}" alt="">
                                    </div>
                                </a>
                                <div class="description">
                                    <div class="item_title">
                                        <a href="./detailpage1.html">${ITEMMENU[category][i].title}</a>
                                    </div>
                                    <div class="item_price">
                                        ${ITEMMENU[category][i].price}
                                    </div>
                                </div>
                            </li>`;
}

// 페이지 로드 되면 아이템 4개 뜨기...

let item_li = document.getElementsByClassName('item_li');
window.addEventListener('load', function(){
    for(let i=0; i< 4 && i < item_li.length; i++){
        item_li[i].classList.add('show');
    }
})


// 스크롤 하면 아이템 목록 나오기기
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
