var x=0;
const d=new Date();
var saat=document.querySelector("#saat");
var dakika=document.querySelector("#dakika");
var saniye=document.querySelector("#saniye");
setInterval(zaman,1000);
function zaman(){
  x++;
  if(x%1==0){
    
    saat.innerHTML=new Date().getHours();
    dakika.innerHTML=new Date().getMinutes();
    saniye.innerHTML=new Date().getSeconds();
    
  }
  if(x%2==0){
    
    document.getElementById("nokta").innerHTML=":";
   document.getElementById("nokta").style.color="#222"; 
  }
  else if(x%2!=0){
    document.getElementById("nokta").style.color="#fff";
  }
  

  
}
