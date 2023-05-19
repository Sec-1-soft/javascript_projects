
    const webSocket = new WebSocket('ws://localhost:3000');

webSocket.addEventListener("open",(event)=>{
    document.getElementById('state').innerHTML = "Çevrimiçisin"
});

webSocket.addEventListener('message',(event)=>{
   const frame = document.querySelector('.message-frame');
   const div = document.createElement('div');
   if(event.origin){
    div.style.backgroundColor='green';
   }
   div.style.width='30%';
   div.style.margin='10px';
   div.style.display='block';
   div.style.whiteSpace='pre-wrap';
   div.style.padding='1px';
   div.style.backgroundColor='rgba(220,220,220,0.6)';
   div.style.borderWidth="1px";
   div.style.borderColor='grey';
   div.style.borderRadius='10px';
   div.style.textAlign='center';
   const p = document.createElement('p');
   p.style.fontFamily='arial';
   p.innerHTML = event.data;
   div.appendChild(p);
   frame.appendChild(div);

})

function sendMessage(){
  const message = document.getElementById('message-input');
  messageItem = message.value;
  webSocket.send(messageItem);
  message.value = "";
}

const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', sendMessage);