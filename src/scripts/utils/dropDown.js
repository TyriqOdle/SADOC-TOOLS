

export default function dropDownCreator(dropDown){
    if(dropDown.classList.contains("d-none")){
        dropDown.classList.remove("d-none")
    } else {
        dropDown.classList.add("d-none")
    }
}