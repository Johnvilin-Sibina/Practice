/* var res = fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>console.log(data1));*/
// console.log(res);

// var res = fetch("https://restcountries.com/v3.1/all").then((data)=>console.log(data.json()));

/* var res1 = fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
.then((data)=>data.json()).then((data1)=>console.log(data1)); */

/* var res2 = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
.then((data)=>data.json()).then((data1)=>console.log(data1)); */

var res = fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>bar(data1));

function bar(data1){
    for(var i=0;i<data1.length;i++){
        var res = data1[i].latlng
        foo(...res)
    }
}
// here we are using open weather
function foo(lat,lon){
   var final_res = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5eb779a14d85a8b363191098dc26c5ef`)
.then((data2)=>data2.json()).then((data3)=>console.log(data3.main.temp))
}
