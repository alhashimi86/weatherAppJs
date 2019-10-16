let city= document.querySelector('input');
city.addEventListener('keyup',(e)=>{
  if(e.keyCode==13){
    getUser();
  // }
 
   // if (city.value != ""){
  } 
 // } 
})
// city.keyup(e=>{
//   if(e.keyCode == 13){
    
//   }
// }



async function getUser(){
       let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city.value}&units=metric&APPID=1829fa4b735c5df44522c1a982e779fd`;
       let res = await fetch(url);
       let data = await res.json() ;
      console.log(data.list[0].weather[0].description);
       console.log(data)
       getImage();
       bringData(data);
 }


function bringData(data){
  document.getElementById('over').style.background = '#00000070';
  document.getElementById('side').style.background = '#00000080';
  document.getElementById('icon').innerHTML=`<img src='icons/${data.list[0].weather[0].icon}.png'>`
  document.getElementById('desc').innerHTML= `${data.list[0].weather[0].description}`;
  document.getElementById('name').innerHTML=`${data.city.name},${data.city.country}`;
  document.getElementById('temp').innerHTML=`${Math.round(data.list[0].main.temp)}${String.fromCharCode(176)} C`;
  document.getElementById('today').innerHTML=`${today}`;
  document.getElementById('watch').innerHTML=`${time}`;
  document.getElementById('other').innerHTML=`<div>
  ${days[date.getDay()+1]}  ${Math.round(data.list[1].main.temp)}${String.fromCharCode(176)} C <br><br><br>
   ${days[date.getDay()+2]} ${Math.round(data.list[2].main.temp)}${String.fromCharCode(176)} C<br><br><br>
    ${days[0]}     ${Math.round(data.list[3].main.temp)}${String.fromCharCode(176)} C
  </div>`
}
 /*function bringData(data){
   let str = `<div id ='container'>
    <h2>${city.value}</h2>
    <h4>Temp : ${Math.round(data.list[0].main.temp)} </h4>
    <h4>Wind speed :  ${data.list[0].wind.speed}</h4> 
    <h4>Deg:  ${data.list[0].wind.deg}</h4> 
    <h4>description:  ${data.list[0].weather[0].description}</h4> </div>
    `;
     document.getElementById("side").innerHTML = str;
}*/

function getImage(){
  let url = `https://api.teleport.org/api/urban_areas/slug:${city.value}/images/`
  fetch(url).then(
    response=>response.json()
  ).then(
    data=>{
      console.log(data) 
      console.log(data.photos[0].image.mobile)
      document.getElementById('main').style.backgroundImage= `url(${data.photos[0].image.mobile})`
    }
  )
}
let month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

 let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let date = new Date();
let today = days[date.getDay()]
console.log(today)
let time = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`
console.log(time)



function toFahrenheit(temp){
  return (temp  * 9/5) + 32
}
document.getElementById('temp').addEventListener('click',()=>{
  
})

