const dropDown = document.querySelector(".dropdown");
const dropDownToggle = document.querySelector(".dropdown-toggle")

dropDownToggle.addEventListener("click", ()=>{
    if(dropDown.classList.contains("d-none")){
        dropDown.classList.remove("d-none")
    } else {
        dropDown.classList.add("d-none")
    }
})