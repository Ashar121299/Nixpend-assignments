window.onsubmit  = function generateQR() {
    var doc = new jsPDF()
    var FullName=document.getElementById('fname').value;
    var Email=document.getElementById('email').value;
    var Phone=document.getElementById('phone').value;
     
    QrImage="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=Name:"+FullName +"Email:"+Email+"Phone:"+Phone;

    var img = new Image();
    img.crossOrigin = ""; 
    img.src = QrImage;
    doc.addImage(img, 10, 10);
    doc.save("QR_info.pdf");

}
