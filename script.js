
function Reload(){
    location.reload();
}

function myEnterFunction(id){

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let selectedDiv = document.getElementById(id);
    selectedDiv.style.backgroundColor = "#" + randomColor;

}



function gridCreation(){

    const grid = prompt("select a grid from 0 to 100!")
    const size = 800;
    const divsSize = size/grid;
    const divContainer = document.getElementById("container")


    for (let i = 0; i<grid; i++){
        for (let j = 0; j<grid; j++){
            const newDiv = document.createElement("div");
            newDiv.id = `${i}_${j}_div`;
            newDiv.style.width = `${divsSize}px`
            newDiv.style.height = `${divsSize}px`
            newDiv.style.boxSizing = "border-box"
            newDiv.style.border = "1px solid #7a7a7a"
            newDiv.style.backgroundColor = "#FFFFFF"
            newDiv.setAttribute("onmouseenter", `myEnterFunction('${newDiv.id}')`);

            divContainer.append(newDiv);
        }
    }


}


gridCreation();