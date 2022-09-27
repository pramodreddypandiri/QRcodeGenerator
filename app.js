
const generateBtn = document.querySelector(".generate");

const code = document.getElementById("code");
const download = document.querySelector(".download");
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
function downloadCode(){
    download.setAttribute(download,"code");
    
}
//event listener
generateBtn.addEventListener('click',generateQrCode);
download.addEventListener('click',() => {
    downloadCode();
})
function clearUI(){
    code.innerHTML = "";
}