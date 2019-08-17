
var button=document.querySelectorAll('[id^=star');//idがstarであるものをget
var num;
var str=[];
var table=[];
var check=[];
arrayList();

function arrayList(){
var table=document.querySelectorAll("[id^=line");
    
    for(var i=0;i<table.length;i++){
         console.log(table[i-1]);
        
         
         str[i]=table[i].innerHTML;
         check[i]=0;
        
        }
    }


button.forEach((button)=>{
button.addEventListener("click",function(){

    console.log(button);
    var eventId=event.target.id;

    if(check[eventId[4]]==0){
    check[eventId[4]]=1;
    sort(eventId[4]);
    }

    else{
        check[eventId[4]]=0;
    }

    
});
});


function sort(num){

 
    
 document.querySelector('#point').insertAdjacentHTML('afterbegin',str[num]);

} 

