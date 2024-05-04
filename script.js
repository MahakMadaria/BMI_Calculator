let heightInput=document.querySelector(".height-input");
let weightInput=document.querySelector(".weight-input");
let result=document.querySelector(".result");
let btn= document.querySelector("button");
let bmi=document.querySelector(".bmi")
btn.addEventListener("click",()=>{
    let height= parseFloat(heightInput.value)/100;
    let weight= parseFloat(weightInput.value);
    let c= weight/(height*height);
    bmi.innerHTML="Your BMI is "+ c.toFixed(2);
    if (c < 18.5) {
        result.innerHTML = "Underweight";
    } else if (c >= 18.5 && c < 24.9) {
        result.innerHTML = "Normal";
    } else if (c >= 24.9 && c < 29.9) {
        result.innerHTML = "Overweight";
    } else {
        result.innerHTML = "Obese";
    }
});
