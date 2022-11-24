function Getinfo(){

var newName = document.getElementById ("cityInput");
var cityName = document.getElementById ("cityName");
cityName.innerHTML ="--"+newName.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=ed61eb31d1ec0933f7ad88885d73f8bc')
.then (response => response.json ())
.then (data =>{
//gettign the min and max values for each day//
    for (i=0;i<5;i++){
        document.getElementById("day" + (i+1)+ "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min -278.42).toFixed(1)+"°";
    }

    for (i=0;i<5;i++){
        document.getElementById("day" + (i+1)+ "Max").innerHTML = "Max:" + Number(data.list[i].main.temp_max -279.26).toFixed(1)+"°";
    }
   //getting weather icons//
    for (i=0;i<5;i++){
        document.getElementById("img" +(i+1)).src=" http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
    }

    console.log(data)

})
.catch(err => alert("Something Went Wrong"))

}
function DefaultScreen(){
    document.getElementById("cityInput").defaultValue ="Kigali";
    Getinfo();
}
//getting and displaying the text for the upcoming five days of the week//
var d =new Date();
var weekday=["Sundays","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
//function to get the correct integer for the index of the days array//
function CheckDay(day){
    if (day +d.getDay()>6){
        return day + d.getDay() -7;
    }
    else{
        return day + d.getDay();
    }
}

for (i=0;i<5;i++){
    document.getElementById("day" + (i+1)).innerHTML= weekday[CheckDay(i)];
}