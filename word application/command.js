let titleSize = document.getElementById("titleSize");
let textSize = document.getElementById("textSize");
let titleColor = document.getElementById("titleColor");
let textColor = document.getElementById("textColor");
let fontFamily = document.getElementById("family");

let titleToWrite = document.getElementById("title-area");
let textToWrite = document.getElementById('text');

titleSize.addEventListener("input",()=>{
    titleToWrite.style.fontSize = titleSize.value;
})

textSize.addEventListener("input",()=>{
    textToWrite.style.fontSize=textSize.value;
})

titleColor.addEventListener("input",()=>{
    titleToWrite.style.color = titleColor.value;
})

textColor.addEventListener("input",()=>{
    textToWrite.style.color=textColor.value;
})

fontFamily.addEventListener("input",()=>{
    textToWrite.style.fontFamily = fontFamily.value;
    titleToWrite.style.fontFamily = fontFamily.value;
})



const createButton = document.getElementById('save');
		createButton.addEventListener('click', () => {
            let titleSize = document.getElementById("titleSize").value;
            let textSize = document.getElementById("textSize").value;
            let titleColor = document.getElementById("titleColor").value;
            let textColor = document.getElementById("textColor").value;
            let fontFamily = document.getElementById("family").value;
            let titleToWrite = document.getElementById("title-area").value;
            let textToWrite = document.getElementById('text').value;
		  const htmlContent = `
		      <html>
		        <head>
		          <meta charset="utf-8">
		          <style>
                  h1{
                    font-size:${titleSize};
                    color:${titleColor};
                    font-family:${fontFamily};
                  }
		            body {
		              font-size: ${textSize};
                      color:${textColor};
                      font-family:${fontFamily};
		            }
		          </style>
		        </head>
		        <body>
                  <h1>${titleToWrite}</h1>
		          <p>${textToWrite}</p>
		        </body>
		      </html>
		  `;
		  const blob = new Blob([htmlContent], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
		  const anchor = document.createElement('a');
		  anchor.download = 'myFile.docx';
		  anchor.href = window.URL.createObjectURL(blob);
		  anchor.target = '_blank';
		  anchor.click();
		});