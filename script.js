// Async

/* async function foo(){
    return "Hello World"
}
foo()*/

// Await

/* function bar(){
    return new Promise((resolve,reject)=>resolve("Hello World"))
}
async function foo(){
    var res = await bar()
    console.log(res)
}
foo() */

// async - await

/* async function foo(){
    var res = await fetch("https://restcountries.com/v3.1/all")
    var res1 = await res.json();
    console.log(res1)
}
foo() */
// Fetching data from covid api using async and await

/* async function foo(){
    var promise_data = await fetch("https://data.covid19india.org/v4/min/data.min.json");
    var res = await promise_data.json();
    console.log(res)
}
foo()*/

// Fetching data from restcountries and passing it to open weather map

/* async function foo(){
    var promise_data = await fetch("https://restcountries.com/v3.1/all");
    var res = await promise_data.json()
    for(let i=0;i<res.length;i++){
        var result = res[i].latlng
        bar(...result)
        // bar(result[0],result[1])
    }
    
    
}
async function bar(lat,lon){
    var promise_data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5eb779a14d85a8b363191098dc26c5ef`)
    var res = await promise_data.json()
    var result = res.main.temp
    console.log(result)
}
foo() */

// try-catch: error handling

/* function getlist(){
    return new Promise((resolve,reject)=>reject("This is rejected"))
}
async function foo(){
    try{
        var res = await getlist();
    }
    catch(error){
        console.log(error)
    }
}
foo() */
// Function having more than one promise

/* function getlist(){
    return new Promise((resolve,reject)=>reject("This is rejected"))
}
function getdata(){
    return new Promise((resolve,reject)=>resolve("This is resolved"))
}
async function foo(){
    try{
        var res = await getdata();
        console.log(res);
        var res1 = await getlist();
        console.log(`This is statement after the error block ${res1}`);
    }
    catch(error){
        console.log(error)
    }
}
foo() */


async function foo(){
    var promise_data = await fetch("https://data.covid19india.org/v4/min/data.min.json");
    var res = await promise_data.json();
    console.log(res)
    var container = document.createElement("div");
    container.className = "container"
    var row = document.createElement("div");
    row.className = "row"
    var col = document.createElement("div");
    col.calssName = "col-md-12"
    col.innerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Chennai</div>
    <div class="card-body text-primary">
      <h5 class="card-title">Confirmed: ${res.TN.districts.Chennai.total.confirmed}</h5>
      <h5 class="card-title">Deceased: ${res.TN.districts.Chennai.total.deceased}</h5>
      <h5 class="card-title">Recovered: ${res.TN.districts.Chennai.total.recovered}</h5>
      <h5 class="card-title">Tested: ${res.TN.districts.Chennai.total.tested}</h5>
      <h5 class="card-title">Vaccinated 1: ${res.TN.districts.Chennai.total.vaccinated1}</h5>
      <h5 class="card-title">Vaccinated 2: ${res.TN.districts.Chennai.total.vaccinated2}</h5>
    </div>
  </div>`
  row.append(col);
  container.append(row);
  document.body.append(container)}
foo()

    
