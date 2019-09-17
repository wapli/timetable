let eventEles=document.querySelectorAll("[id^=js-event]"),
    balTrEles=document.querySelectorAll("[id^=js-balButTr]"),
    balLeftEles=document.querySelectorAll("[id^=js-balButLeft]"),
    balRightEles=document.querySelectorAll("[id^=js-balButRight]"),
    table=document.querySelectorAll("[id^=js-event]"),//js-eventからline akazawa
    momtable=document.querySelectorAll("[id^=t]"),
    upEventObje=document.querySelectorAll('[id^=js-upevent]'),//reload.jsで更新される
    detailLists=document.querySelectorAll('[id^=details]'),
    balButClass=document.getElementsByClassName("balButTr"),
    allEles=document.documentElement,//html上のすべての要素を取得します　この値は生きているため、変更があったとしても再度読み込む必要はありません（おそらく。もし違ったら修正お願いします）
    str=[],   //表示する文字の配列
    balStr=[],
    check=[],   //お気に入りしているか、していないかの判断。1はお気に入り済み。０は未登録.
    balButFlag=false,//配列要素１[true:吹き出しボタンが出ている　false:吹き出しボタンは出ていない] 配列要素２[吹き出しの出ているページ数] 
    tagEle;
/**上にピン止めする関数です
 * 
 * 上のid:fav_buttonと同じで、同名のidが作成されるのを防ぐためidを変えました。
 *  この動作は、同名のidが複数ある場合にhtmlファイルのうち一番上にあるidに対して反応する仕様を利用しています
 * 本来は同名のidになることを避けるべきですが、今のところこの方法しか思いつきませんでした。
 * 
 * idなどが複雑になってきたので、ピン止めのtableに挿入される要素を書いておきます。
 * 例えば０番目のボタン（id:fav_button0）が押された場合、以下の要素がid:t0のtableに追加されます
 * 
 *<tbody>
 *<tr class='line' id='upline0'>
 *<th class="time9 time" id="js-time0">09:00<br>-<br>9:30</th>  
 *  <th class="event" id="js-upevent0">
 *      <div class="performer" id="upperformer0">
 *          開会式                                      
 *      </div>
 *      <th class="favorite">
 *          <button class="fav_button" id="upfav_button0">            
 *              <div  class="star" id="upstar0">★</div>
 *          </button>
 *      </th>
 *  </th>
 *</tr>
 *</tbody>
 * 
 * 
 * @param {Int} num ページの番号
 */
function sort(num){
    
    console.log("sort関数が実行されました");


    const StNum=num.toString();
    const uptableEle=document.getElementById('t'+StNum);
    const headEle=document.getElementsByTagName('head')[0];

    //上にピン止めする　きれいにする方法があったら教えていただきたいです・・・。
    uptableEle.insertAdjacentHTML('afterbegin',str[StNum]);
    console.log(str[StNum]);
    momtable[StNum].setAttribute("border","3");//ここ０にすると枠線消える
    //document.getElementById('performer'+StNum).setAttribute("id","upperformer"+StNum);
    document.getElementById('performer'+StNum).id="upperformer"+StNum;
    //document.getElementById('js-time'+StNum).setAttribute("id","js-uptime"+StNum);
    document.getElementById('js-time'+StNum).id="js-uptime"+StNum;
    document.getElementById('js-event'+StNum).setAttribute("id","js-upevent"+StNum);
    //document.getElementById("js-uptime"+StNum).parentNode.className="line"; //赤沢がやりました
    //document.getElementById("js-uptime"+StNum).parentNode.id="upline"+StNum;　//赤沢がやりました
   document.getElementById("js-upevent"+StNum).parentNode.id="tbody"+StNum; //赤沢がやりました
    
    //吹き出しボタン追加
    document.getElementById("tbody"+StNum).insertAdjacentHTML('afterbegin',balStr[StNum]);
    document.getElementById("js-balButTh"+StNum).id="js-upBalButTh"+StNum;
    document.getElementById("js-balButLeft"+StNum).id="js-upBalButLeft"+StNum;
    document.getElementById("js-balButRight"+StNum).id="js-upBalButRight"+StNum;
    document.getElementById("js-upBalButTh"+StNum).parentNode.className="balButTr";
    document.getElementById("js-upBalButTh"+StNum).parentNode.id="js-upBalButTr"+StNum;

    //吹き出しボタンの内容を調整
    document.getElementById("js-upBalButRight"+StNum).textContent="お気に入りから削除";
    document.getElementById("js-upBalButRight"+StNum).style.width="150px";
    //吹き出しボタンを消す
    document.getElementById("js-upBalButTr"+StNum).style.display="none";


    headEle.appendChild(creEle("script","src","reload.js"));
    /**
     * 選択した要素を上に持って行ったときに詳細ページを開けるようにするためにclover_details.jsを再度読み込みします。
     * もう一度タグを作ることで読み込ませています。しかしこれだと押した分だけタグが生成されてしまいます
     * jquery(中身はAjax)でも実行できそうです。この方法で処理が重すぎる場合はそちらを試してもいいかもしれません
     * 問題なければこのままでいいと思います。
     * 
    */
}
/**お気に入りから削除する関数です
 * 
 * @param {Int} num ページ番号
 */
const hide=(num)=>{
    console.log("hide関数が実行されました");
    document.querySelector('#t'+num.toString()).innerHTML="";//ここがうまくいかない
    momtable[num.toString()].setAttribute("border","0");
}
/**任意の属性を持ったタグを作ります
 * 
 * @param {String} tag 作りたいタグ
 * @param  {...String} atr 属性,属性値　
 * @returns {HTMLElement} tagEle
 */
const creEle=(tag,...atr)=>{
    tagEle=document.createElement(tag);
    if(atr.length%2===0){
        for(let i=0;i<atr.length;i+=2){tagEle.setAttribute(atr[i],atr[i+1]);}
        return tagEle;
    }else{
        console.log("creEle関数の引数が正しくありません");
    }
};
/**詳細ページを開く関数です
 * 
 * @param {Int} pageNum -1ならすべてのstyle.displayをnoneに。
 */
const SelectPage=(pageNum)=>{
    console.log("SelectPage関数が動きました");
    console.log("pagenum:"+pageNum.toString());
    if(pageNum!=-1){
        detailLists[pageNum].style.display='block';
    }else{
        detailLists.forEach((currentValue)=>{
            currentValue.style.display='none';
        })
    }
};
/**画面上に吹き出しがあるとき、それを消す関数です
 * 
 */
const hideEle=()=>{
    console.log("hideEle関数が実行されました");
    if(balButFlag){
        //下のfor文はすべての吹き出しを非表示にする
        for(let i=0;i<balButClass.length;i++){//getElementByClassNameが生きていることを利用したつもり
            balButClass[i].style.display="none";//class指定だと優先度的に不安だが現状うまく行ってるのでそのまま。
        }

        //画面に吹き出しボタンがなくなるので値を修正するとともに画面全体に対するeventListenerを削除
        balButFlag=false;
        allEles.removeEventListener("click",hideEle,true);
    }
}


//以上定義,以下動作始まり
console.log(table.length);
for(let i=0;i<table.length;i++){
    
    str[i]=table[i].innerHTML;
    check[i]=0;
        
}
for(let i=0;i<balTrEles.length;i++){
    balStr[i]=balTrEles[i].innerHTML;
}


//吹き出しボタンの表示を消します
balTrEles.forEach((ele)=>{
    ele.style.display="none";
});


eventEles.forEach((eventEle,pageNum)=>{
    //イベント部分が押されると吹き出しボタンを出現させる
    eventEle.addEventListener("click",()=>{
        balTrEles[pageNum].style.display="";
        //吹き出しが画面に1つしか表示されず、かつほかの場所を触っても吹き出しボタンを消せるように
        balButFlag=true;
        allEles.addEventListener("click",hideEle,true);//hideEle()とすると実行されてそれで終わりになるからつけちゃダメ（callback関数として登録されない？）

    });

    //「詳細」を押した際のイベント
    balLeftEles[pageNum].addEventListener("click",()=>{
        SelectPage(pageNum);
    });

    //「お気に入り」を押した際のイベント    
    balRightEles[pageNum].addEventListener("click",()=>{
        console.log(check[pageNum]);
        if(check[pageNum]===0){
            sort(pageNum);
            check[pageNum]=1;
            balRightEles[pageNum].textContent="お気に入りから削除";
            balRightEles[pageNum].style.width="150px";//これは画面の割合とかじゃないからcssと合わせて修正したい
        }else{
            hide(pageNum);
            check[pageNum]=0;
            balRightEles[pageNum].textContent="お気に入り";
            balRightEles[pageNum].style.width="100px";
        }
    });

    

    
});


/**おそらく僕が自作した距離のやつはjqueryを導入するよりも汚い
 * さらに1行で済むところをわざわざ複数行にわたってたらたら書いてる
 * だから、jqueryを導入することが最適解だろう
 * しかし僕はこのアプリを完成させることだけが最終目標ではないから
 * すこしだけ頑張らせてほしい　
 * jqueryにするなら後々消せばいいから、今作ってみたい
 */