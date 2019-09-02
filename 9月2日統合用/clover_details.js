var event=document.getElementsByClassName('event');

for(let i=0;i<event.length;i++){
    event[i].addEventListener('click',function(event){//event
      
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
    var elementPage18 = document.getElementById( "details18" );
    var elementPage19 = document.getElementById( "details19" );
    var elementPage20 = document.getElementById( "details20" );
    var elementPage21 = document.getElementById( "details21" );
    var elementPage22 = document.getElementById( "details22" );
    var elementPage23 = document.getElementById( "details23" );
    var elementPage24 = document.getElementById( "details24" );
    var elementPage25 = document.getElementById( "details25" );
    var elementPage26 = document.getElementById( "details26" );
    var elementPage27 = document.getElementById( "details27" );
    var elementPage28 = document.getElementById( "details28" );
    var elementPage29 = document.getElementById( "details29" );
    var elementPage30 = document.getElementById( "details30" );
    var elementPage31 = document.getElementById( "details31" );
    var elementPage32 = document.getElementById( "details32" );
    var elementPage33 = document.getElementById( "details33" );
    var elementPage34 = document.getElementById( "details34" );
    var elementPage35 = document.getElementById( "details35" );




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
        case 18:
          elementPage18.style.display='block';
          break;
        case 19:
          elementPage19.style.display='block';
          break;
        case 20:
            elementPage20.style.display='block';
          break;
        case 21:
            elementPage21.style.display='block';

            break;
        case 22:
            elementPage22.style.display='block';
        break;
        case 23:
            elementPage23.style.display='block';
        break;
        case 24:
            elementPage24.style.display='block';
        break;
        case 25:
            elementPage25.style.display='block';
        break;
        case 26:
            elementPage26.style.display='block';
        break;
        case 27:
            elementPage27.style.display='block';
        break;
        case 28:
            elementPage28.style.display='block';
        break;
        case 29:
            elementPage29.style.display='block';
        break;
        case 30:
            elementPage30.style.display='block';
        break;
        case 31:
            elementPage31.style.display='block';
        break;
        case 32:
            elementPage32.style.display='block';
        break;
        case 33:
            elementPage33.style.display='block';
        break;
        case 34:
            elementPage34.style.display='block';
        break;
        case 35:
            elementPage35.style.display='block';
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
           elementPage18.style.display = 'none';
           elementPage19.style.display = 'none';
           elementPage20.style.display = 'none';
           elementPage21.style.display = 'none';
           elementPage22.style.display = 'none';
           elementPage23.style.display = 'none';
           elementPage24.style.display = 'none';
           elementPage25.style.display = 'none';
           elementPage26.style.display = 'none';
           elementPage27.style.display = 'none';
           elementPage28.style.display = 'none';
           elementPage29.style.display = 'none';
           elementPage30.style.display = 'none';
           elementPage31.style.display = 'none';
           elementPage32.style.display = 'none';
           elementPage33.style.display = 'none';
           elementPage34.style.display = 'none';
           elementPage35.style.display = 'none';

            console.log("終了");
                        break;
    }
    console.log(elementPage0);
}