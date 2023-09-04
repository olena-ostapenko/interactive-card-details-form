

let validateInputs = {
    'name': {
        input: document.getElementById('name'),
        regex: /^[a-z ,.'-]+$/i,
        errorElement: document.getElementById("error-text_name")
    },

    'card-number': {
        input: document.getElementById('card-number'),
        regex: /^(?:4\d{3}|5[1-5]\d{2}|6011|3[47]\d{2})([- ]?)\d{4}\1\d{4}\1\d{4}$/,
        errorElement: document.getElementById("error-text_number")
    },
    'numbers-mm': {
        input: document.getElementById('numbers-mm'),
        regex: /^(1[0-2]|[1-9])$/,
        errorElement: document.getElementById("error-text_data")
    },
    'numbers-yy': {
        input: document.getElementById('numbers-yy'),
        regex: /^[0-9]{2}$/,
        errorElement: document.getElementById("error-text_data")
    },
    'cvc': {
        input: document.getElementById('cvc'),
        regex: /^[0-9]{3,4}$/,
        errorElement: document.getElementById("error-text_cvc")
    },

}


function check (input, regex, errorElement){


    let result = (input.value.match(regex))
    if(result === null){
        input.classList.add("error")
        errorElement.classList.remove("hidden")
        return  false
    }
    
    else{
        input.classList.remove("error")
        errorElement.classList.add("hidden")
        return true
    }
    
 }



let submitButton = document.getElementById('submit')
let form = document.querySelector(".formWithValidation")

form.addEventListener('submit', function (event) {
    event.preventDefault()

//   check(validateInputs['card-number'].input, validateInputs['card-number'].regex, validateInputs['card-number'].errorElement)

//   check(validateInputs['name'].input, validateInputs['name'].regex, validateInputs['name'].errorElement)

//   check(validateInputs['numbers-mm'].input, validateInputs['numbers-mm'].regex, validateInputs['numbers-mm'].errorElement)

//   check(validateInputs['numbers-yy'].input, validateInputs['numbers-yy'].regex, validateInputs['numbers-yy'].errorElement)

//   check(validateInputs['cvc'].input, validateInputs['cvc'].regex, validateInputs['cvc'].errorElement)

let checkResult 
let formIsValid = true
for (let key in validateInputs){
    checkResult = check(
        validateInputs[key].input,
        validateInputs[key].regex,
        validateInputs[key].errorElement
    )
    if(checkResult === false){
        formIsValid=false
    }
}
if (formIsValid === true) {
    form.classList.add("hidden")
    document.querySelector(".thank").classList.remove("hidden")
}
});





validateInputs['card-number'].input.addEventListener("input", () => {
    validateInputs['card-number'].input.value = formatNumber(validateInputs['card-number'].input.value.replaceAll(" ", ""));
    showNumbers.innerHTML = validateInputs['card-number'].input.value
})
validateInputs['name'].input.addEventListener("input", () => {
    validateInputs['name'].input.value = (validateInputs['name'].input.value).toUpperCase()
    showName.innerHTML = validateInputs['name'].input.value

})

validateInputs['numbers-mm'].input.addEventListener("input", () => {
    showMM.innerHTML = validateInputs['numbers-mm'].input.value
})

validateInputs['numbers-yy'].input.addEventListener("input", () => {
    showYY.innerHTML = validateInputs['numbers-yy'].input.value

})
validateInputs['cvc'].input.addEventListener("input", () => {
    showCvc.innerHTML = validateInputs['cvc'].input.value

})



    


const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
    if (index !== 0 && !(index % 4)) seed += " ";
    return seed + next;
}, "")


let showNumbers = document.getElementById("show-numbers")

let showName = document.getElementById("show-name")


let showMM = document.getElementById("show-date_mm")
let showYY = document.getElementById("show-date_yy")

let showCvc = document.getElementById("show-cvc")

let errorCardNumber = document.getElementById("error-text_number")
