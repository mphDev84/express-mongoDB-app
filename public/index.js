const myValue = "hello, this is a message!";
console.log(myValue);

//function to fetch MongoDB data from backend '/api' endpoint. 
let request = async()=>{
    const response = await fetch ('http://localhost:3000/api')
    const data = await response.json();
    console.log('Data received is: ', data);

    //display data on DOM
    for (let i=data.length-1;i>=0;i--){
        let myNameValue = data[i]["name"];
        let myRingsValue = data[i]["hasRings"];
        let myAtmosphereValue = data[i]["mainAtmosphere"];
        let myTemperatureValue = (data[i]["surfaceTemperatureC"]["mean"]).toFixed(2);
        let myOrderValue = data[i]["orderFromSun"];
       console.log(myOrderValue)
        document.querySelector("#textArea").innerHTML+=(myNameValue+" "+"<br>"+"  ");
        document.querySelector("#hasRings").innerHTML+=(myRingsValue+" "+"<br>");
        document.querySelector("#atmosphere").innerHTML+=(myAtmosphereValue+"<br>");
        document.querySelector("#temperature").innerHTML+=(myTemperatureValue+"<br>");
        document.querySelector("#order-from-sun").innerHTML+=(myOrderValue+"<br>");
    };
};
request();
