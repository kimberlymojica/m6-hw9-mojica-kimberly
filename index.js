var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var feelslike = document.querySelector('.feelslike')
var img = document.querySelector('.image')

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=9872ed964a4b816726b7f0a14b0ec0b5')
.then(res => res.json())
.then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var feelslikeValue = data['main']['feels_like'];
        var imgValue = data['weather']['icon'];

        name.innerHTML =nameValue;
        temp.innerHTML =tempValue;
        desc.innerHTML =descValue;
        feelslike.innerHTML =feelslikeValue;
        img.innerHTML =imgValue;

     
})



.catch(err =>("Wrong name!"))
})






