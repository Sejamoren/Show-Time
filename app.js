let userName = prompt("Lütfen adınızı giriniz");
let myname = document.querySelector("#myName");
myname.innerHTML = userName;



function myDate(){
const d = new Date();
let saat = d.getHours();
let dakika = d.getMinutes();
let saniye = d.getSeconds();
let gun = d.getDay();
if(gun==1){
    gun = "PAZARTESİ";
}else if(gun==2){
    gun = "SALI";
}else if(gun==3){
    gun = "ÇARŞAMBA";
}else if(gun==4){
    gun = "PERŞEMBE";
}else if(gun==5){
    gun = "CUMA";
}else if(gun==6){
    gun = "CUMARTESİ";
}else if(gun==7){
    gun = "PAZAR";
}
saat = (saat < 10) ? "0" + saat : saat;
dakika = (dakika < 10) ? "0" + dakika : dakika;
saniye = (saniye < 10) ? "0" + saniye : saniye;
let zaman = saat + ":" + dakika + ":" + saniye + " " + gun;
document.getElementById("time").innerText = zaman;

setTimeout(myDate, 1000);

}
myDate();


