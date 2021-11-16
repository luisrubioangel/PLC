document.addEventListener("DOMContentLoaded", function () {
  SensorA();
  SensorB();
  SensorC();
});
let MacadorA=0;
let MacadorB=0;
let Macadortotal=0;


function SensorA() {
  
  let btnA=document.getElementById('sensorA')
  btnA.addEventListener('click',(e)=>{
    MacadorA=MacadorA+1;

  },false)
}
function SensorB() {
    let btnB=document.getElementById('sensorB')
    btnB.addEventListener('click',(e)=>{
        MacadorB=MacadorB+1;
      },false)
  
}

function SensorC() {
    let btnC=document.getElementById('pulsadorReset')
    btnC.addEventListener('click',(e)=>{
        MacadorB=0;
        MacadorA=0;
        Macadortotal=0;
      },false)

}
setInterval(function(){
    Macadortotal=MacadorA+MacadorB;
    let MAterialA=document.getElementById('MAterialA')
    let MAterialB=document.getElementById('MAterialB')
    let MAterialT=document.getElementById('MAterialT')
    MAterialA.innerHTML=MacadorA;
    MAterialB.innerHTML=MacadorB;
    MAterialT.innerHTML=Macadortotal;
    console.log(MacadorA,MacadorB,Macadortotal) 

}, 100);
