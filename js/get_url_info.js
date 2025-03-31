function get_url_info(key) {
    let url = location.href; // 224-2.페이지이동_연습2(상세페이지).html?cateNo=0&itemNo=2 
    url = url.split("?");// [224-2.페이지이동_연습2(상세페이지).html  ,  cateNo=0&itemNo=2 ]
    if(url.length > 1) { // 1개보다 크면 정보가(?) 1개 이상 있다 라는 뜻
        // url = url[1].split("&"); 
        // cateNo=0&itemNo=2  =>  [cateNo=0, itemNo=2]

        for(let i=0; i<url.length; i++){
            let tmp_url=url[i].split("=") // i=0, cateNo=0 => [cateNo , 0]
                                        // i=1, itemNo=2 => [itemNo , 2]
                
            if(tmp_url[0] == key) {
                console.log(tmp_url[1])
                return tmp_url[1];
            }
        }   
    }
} 
