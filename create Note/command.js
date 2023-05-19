let deleteBtn = document.querySelectorAll(".delete");
let frame = document.querySelectorAll(".frm_1");

for(let i=0;i<deleteBtn.length;i++){
    deleteBtn[i].onclick=function(){
        let divId = frame[i].getAttribute("data-id");
        console.log(divId);
    // AJAX ile ilgili div'in veritabanından silinmesi burada yapılabilir.
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log("Veri başarıyla silindi.");
      } else if (this.readyState === 4 && this.status !== 200) {
        console.log("Veri silme hatası: " + this.status);
      }
    };
    xhr.open("POST", "delete.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("id=" + divId);
    frame[i].parentNode.removeChild(frame[i]);
    }
}





let note_frame = document.getElementById("note-frame");

function no_display(){
  note_frame.style.display ="none";
}



let disp_ = ()=>{
  if(note_frame.style.display =="none"){
    note_frame.style.display = "block";
  }

  else{
    note_frame.style.display = "none";
  }
}


let logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click",()=>{

  window.location.href= "index.php";

  var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log("Veri başarıyla silindi.");
      } else if (this.readyState === 4 && this.status !== 200) {
        console.log("Veri silme hatası: " + this.status);
      }
    };
    xhr.open("POST", "logout.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();     
})