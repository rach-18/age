const date = document.querySelector(".dob");
const calculateBtn = document.querySelector(".calculate");
const yearNumber = document.querySelector(".year-number");
const monthNumber = document.querySelector(".month-number");
const dayNumber = document.querySelector(".day-number");

calculateBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let old = new Date(date.value);
    let ne = new Date();

    let diff = ne - old;
    const fullYear = diff/(365.25 * 24 * 60 * 60 * 1000)
    const year = Math.floor(fullYear)
    
    const remainingResults = (fullYear-year)*12
    const months = Math.floor(remainingResults)
    
    const remaingDay = (remainingResults-months)*(365.25/12)

    yearNumber.innerHTML = year;
    monthNumber.innerHTML = months;
    dayNumber.innerHTML = Math.floor(remaingDay);
});
