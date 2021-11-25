const carSelectedDisplay = document.querySelector(".carSelectedDisplay").innerText;
const tobeDisplayedCarFiltered = Handlebars.compile(carSelectedDisplay)

const widgetElement = document.querySelector('.widgetDisplay')

function carSelectedFunction(){
    colorSelected = document.getElementById("color").value;
    carSelected = document.getElementById("make").value;
    axios
    .get('http://api-tutor.herokuapp.com/v1/cars')
    .then(function(result) {
        var data = result.data
        data = data.filter((currentCar) => (currentCar.make == carSelected && currentCar.color == colorSelected) )
        console.log(data)
        widgetElement.innerHTML = tobeDisplayedCarFiltered({ model: data})
    })
}
