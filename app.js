
const generateBtn = document.querySelector(".generate");

const code = document.getElementById("code");
const download = document.querySelector(".download");

//function for code generation
const generateQrCode = (e) => {
    e.preventDefault();
    clearUI();
    const input = document.querySelector(".input-url");
    if(input.value === ""){
        alert("Please enter URL")
    }
    else {
        let qrcode = new QRCode(code,{
            text : input.value,
            width : 275,
            height : 275,
            

        })
        
        download.classList.remove("hidden");
    }
}

//function for downloading qr code image
function downloadCode(){
    download.setAttribute('href',code.querySelector('img').src);
    //code.querySelector('img').src;

}
//event listener
generateBtn.addEventListener('click',generateQrCode);
download.addEventListener('click',() => {
    downloadCode();
})
//function for clearing previous qr image
function clearUI(){
    code.innerHTML = "";
}