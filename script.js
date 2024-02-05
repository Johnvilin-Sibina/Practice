/*var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
for(var i=0;i<res.length;i++){
    //console.log(res[i].name.common);
    if(res[i].capital){
        console.log(res[i].capital[0]+" "+res[i].area)
    }
    else{
        console.log("Invalid Capital"+" "+res[i].area)
    }
}
}*/
//05/02/2024
let request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function(){
    let res = JSON.parse(request.response);
    console.log(res);
    //Print only those countries which belong to Asia region.
    let asia = res.filter((ele)=>ele.region=="Asia");
    console.log(asia);
    let asian_countries = asia.map((ele)=>ele.name);
    console.log(asian_countries);
    //Print the capitals of those countries whose population is less than 2lakhs.
    let popu = res.filter((ele)=>ele.population<200000);
    console.log(popu);
    let popu_countries = popu.map((ele)=>ele.capital);
    console.log(popu_countries);
    //Print the sum of total population of all the countries.
    let pop = res.reduce((acc,cv)=>acc+cv.population,0);
    console.log(pop);
}
