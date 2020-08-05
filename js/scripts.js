    const nameLink = document.querySelector('#contentText');
    const imageSize = document.querySelector('#image-size');
    
    const generateBtn = document.querySelector('#generateCode');
    
    const qrOutput = document.querySelector('#qrOutput');
    
    
    
    
    generateBtn.addEventListener('click',()=>{
        qrOutput.innerHTML += `<img src="https://api.qrserver.com/v1/create-qr-code/?data=${nameLink.value}&size=${imageSize.value}x${imageSize.value}">`;
        console.log(qrOutput.innerHTML)
})
