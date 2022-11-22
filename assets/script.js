function Getinfo(){
const newName = document.getElementById ("cityInput");
const cityName = document.getElementById ("cityName");
cityName.innerHTML ="--"+newName.value+"--"
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=ed61eb31d1ec0933f7ad88885d73f8bc")
.then (response => response.json ())
.then (data =>{
    for (i=0;i<5;i++){
        document.getElementById("day" + (i+1)+ "Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min -278.42).toFixed(1)+"°";
    }
    for (i=0;i<5;i++){
        document.getElementById("day" + (i+1)+ "Man").innerHTML = "Man:" + Number(data.list[i].main.temp_min -279.26).toFixed(1)+"°";
    }
})