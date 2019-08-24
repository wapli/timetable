var event=document.getElementsByClassName('event');

for(let i=0;i<event.length;i++){
    event[i].addEventListener('click',function(e){
      
      a_eventID=event.target.id;
      console.log(i);
      console.log(a_eventID);
      SelectPage(i);
    })}

function SelectPage(page){
   
    var elementPage0 = document.getElementById( "details0" );
    var elementPage1 = document.getElementById( "details1" );
    var elementPage2 = document.getElementById( "details2" );
    var elementPage3 = document.getElementById( "details3" );
    var elementPage4 = document.getElementById( "details4" );
    var elementPage5 = document.getElementById( "details5" );
    var elementPage6 = document.getElementById( "details6" );
    var elementPage7 = document.getElementById( "details7" );
    var elementPage8 = document.getElementById( "details8" );
    var elementPage9 = document.getElementById( "details9" );
    var elementPage10 = document.getElementById( "details10" );
    var elementPage11 = document.getElementById( "details11" );
    var elementPage12 = document.getElementById( "details12" );
    var elementPage13 = document.getElementById( "details13" );
    var elementPage14 = document.getElementById( "details14" );
    var elementPage15 = document.getElementById( "details15" );
    var elementPage16 = document.getElementById( "details16" );
    var elementPage17 = document.getElementById( "details17" );
    switch( page) {
        case 0:
          elementPage0.style.display = 'block';
            break;
        case 1:
          elementPage1.style.display = 'block';
            break;
        case 2:
          elementPage2.style.display = 'block';
            break;
        case 3:
          elementPage3.style.display = 'block';      
            break;
        case 4:
          elementPage4.style.display = 'block';
          break;
        case 5:
          elementPage5.style.display = 'block';
          break;
        case 6:
          elementPage6.style.display ='block';
          break;
        case 7:
          elementPage7.style.display='block';
          break;
        case 8:
          elementPage8.style.display='block';
          break;
        case 9:
          elementPage9.style.display='block';
          break; 
        case 10:
          elementPage10.style.display='block';
          break;
        case 11:
          elementPage11.style.display = 'block';
          break;
        case 12:
          elementPage12.style.display = 'block';
          break;
        case 13:
          elementPage13.style.display = 'block';      
          break;
        case 14:
          elementPage14.style.display = 'block';
          break;
        case 15:
          elementPage15.style.display = 'block';
          break;
        case 16:
          elementPage16.style.display ='block';
          break;
        case 17:
          elementPage17.style.display='block';
          break;
        default:
          
            console.log(page);
            elementPage0.style.display = 'none';
           
            elementPage1.style.display = 'none';
           
            elementPage2.style.display = 'none';
              
            elementPage3.style.display = 'none';
          
            elementPage4.style.display = 'none';
            elementPage5.style.display = 'none';
          
            elementPage6.style.display = 'none';

            elementPage7.style.display = 'none';
           elementPage8.style.display='none';
           elementPage9.style.display='none';
           elementPage10.style.display = 'none';
         elementPage11.style.display = 'none';
            elementPage12.style.display = 'none';
            elementPage13.style.display = 'none';
            elementPage14.style.display = 'none';
            elementPage15.style.display = 'none';
            elementPage16.style.display = 'none';
           elementPage17.style.display = 'none';  
            console.log("終了");
                        break;
    }
}