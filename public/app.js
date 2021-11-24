// console.log(axios)

const templateSource = document.querySelector(".carTemplate").innerText;
const templateSource2 = document.querySelector(".carModelTemplate").innerText;
const carTemplate = Handlebars.compile(templateSource)
const template2 = Handlebars.compile(templateSource2)


const colorElement = document.querySelector('.colors');
const brandsElement = document.querySelector('.brands')
const carsElement = document.querySelector('.cars')

axios
    .get('http://api-tutor.herokuapp.com/v1/colors')
    .then(function (result) {
        colorElement.innerHTML = carTemplate({ color: result.data })
    })

axios
    .get('http://api-tutor.herokuapp.com/v1/makes')
    .then(function (result) {
        brandsElement.innerHTML = carTemplate({ color: result.data })
    })

axios
    .get('http://api-tutor.herokuapp.com/v1/cars')
    .then(function (result) {
        carsElement.innerHTML = template2({ color: result.data})
    })

    // console.log()

