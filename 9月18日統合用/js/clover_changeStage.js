let main=document.getElementById("main"),
    mainStageName=document.getElementById("mainStageName");
let sub=document.getElementById('sub'),
    subStageName=document.getElementById('subStageName');
let planning=document.getElementById("planning"),
    planningName=document.getElementById("planningName");
let favorite=document.getElementById("favorite"),
    favoriteName=document.getElementById("favoriteName");


    function editSelects(event,num) {
        console.log(num);
        //document.getElementById('choose-main').removeAttribute('modifier');// removeAttribute()：指定された属性名の属性を除去する
        if(num===1){
        switch(event.target.value){
            case 'second':
                    document.getElementById("main1").style.display="block";
                    document.getElementById("main2").style.display="none";
                break;
        case 'third':
                document.getElementById("main1").style.display="none";
                document.getElementById("main2").style.display="block";
                break;
            default:
                alert("失敗");
                break;}
            }
            else if(num===2){
                switch(event.target.value){
                    case 'second':
                            document.getElementById("sub1").style.display="block";
                            document.getElementById("sub2").style.display="none";
                        break;
                case 'third':
                        document.getElementById("sub1").style.display="none";
                        document.getElementById("sub2").style.display="block";
                        break;
                    default:
                        alert("失敗");
                        break;}
                    }
                    // else if(num===3){
                    //     switch(event.target.value){
                    //         case 'second':
                    //                 document.getElementById("planning1").style.display="block";
                    //                 document.getElementById("planning2").style.display="none";
                    //             break;
                    //     case 'third':
                    //             document.getElementById("planning1").style.display="none";
                    //             document.getElementById("planning2").style.display="block";
                    //             break;
                    //         default:
                    //             alert("失敗");
                    //             break;}
                    //         }
                    else if(num===4){
                        switch(event.target.value){
                            case 'second':
                                    document.getElementById("fav-page1").style.display="block";
                                    document.getElementById("fav-page2").style.display="none";
                                break;
                        case 'third':
                                document.getElementById("fav-page1").style.display="none";
                                document.getElementById("fav-page2").style.display="block";
                                break;
                            default:
                                alert("失敗");
                                break;}
                            }
                        
                        else{
                            alert("大失敗");
                        }
            }



    //     if (event.target.value == 'second') {
    //       document.getElementById('choose-main').setAttribute('modifier', event.target.value);

    //     }
    //   }
    //   function addOption(event) {
    //     const option = document.createElement('option');
    //     var text = document.getElementById('optionLabel').value;
    //     option.innerText = text;
    //     text = '';
    //     document.getElementById('dynamic-sel').appendChild(option);
    // }

function change(num){
    
    switch(num){
        case 1://メインステージ
            main.style.display= "block";
            mainStageName.style.display= "block";
            sub.style.display= "none";
            subStageName.style.display= "none";
            planning.style.display= "none";
            planningName.style.display= "none";
            favorite.style.display="none";
            favoriteName.style.display="none";
            break;
        case 2://メモリアルステージ
                main.style.display= "none";
                mainStageName.style.display= "none";
                sub.style.display= "block";
                subStageName.style.display= "block";
                planning.style.display= "none";
                planningName.style.display= "none";
                favorite.style.display="none";
                favoriteName.style.display="none";
            break;
        case 3://企画
                main.style.display= "none";
                mainStageName.style.display= "none";
                sub.style.display= "none";
                subStageName.style.display= "none";
                planning.style.display= "block";
                planningName.style.display= "block";
                favorite.style.display="none";
                favoriteName.style.display="none";
            break;
        case 4://お気に入り
                main.style.display= "none";
                mainStageName.style.display= "none";
                sub.style.display= "none";
                subStageName.style.display= "none";
                planning.style.display= "none";
                planningName.style.display= "none";
                favorite.style.display="block";
                favoriteName.style.display="block";
               
            break;
           
    }
}