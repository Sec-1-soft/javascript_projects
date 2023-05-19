

function file(file){
  var fr = new FileReader();
  fr.readAsText(file.files[0]);
  fr.onload = function(){
     document.getElementById("file-display").innerHTML = fr.result;
  }
}