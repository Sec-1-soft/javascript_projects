let button = document.getElementsByTagName("button"),
      buttonleng = button.length,
      i=0,
inp = document.getElementById("_girdi");


for(i =0;i<buttonleng;i++){
  button[i].onclick = hesapla;
}

function hesapla(){
  
  getir = this.innerHTML;
  
  if(getir == "="){
  
  try{
    inp.value = eval(inp.value);
    
  }
  
  catch(err){
    inp.value = "0";
  }
  
  return 0;
  
  
  
}
  
  inp.value +=getir;
  
}


function myfunc(){
 
  inp.value ="";
  
}
