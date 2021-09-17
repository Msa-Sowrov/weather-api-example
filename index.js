document.getElementById('search-btn').addEventListener('click', ()=>{
    const input = document.getElementById('search-filed');
    const inputValue = input.value;
    const key = "d6f0d0035f1093af52d7f89d5acd410d"
    fetch(`https://api.openweathermap.org/data/2.5/find?q=${inputValue}&appid=${key}`)
    .then(res=>res.json())
    .then(data => displayData(data))

})

const displayData = data => {
    console.log(data)
    //city name
    const name = data.list[0].name;
    const showName = document.getElementById('name');
    showName.innerText = name;
    console.log(name)
    
    //tempreture in kalven to farenhite
    const tempK = data.list[0].main.temp;
    const tempValue = tempK - 273.15;
    const math =  Math.round(tempValue)
    const showTemp = document.getElementById('temp');
    showTemp.innerText = math;

    //weather status
    const status = data.list[0].weather[0].main 
    console.log(status)
    const lead = document.getElementById('lead');
    lead.innerText = status;
    //weather image
    const image = document.getElementById('image');
    if(status == "Rainy"){
        image.src = "images/rainy.png"
    }
    else if(status == 'Clouds'){
        image.src = 'images/cloud.png';
    }
    else if(status == 'Clear'){
        image.src = 'images/clear.png';
    }
    else if(status == 'Sunny'){
        image.src = 'images/sunny.png'
    }
    else{
        image.src = "https://openweathermap.org/img/wn/02d@2x.png"
    }
}


