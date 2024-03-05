import { header } from "./header.js";
header();

function showPage(page){
    document.querySelectorAll('div').forEach(div => {
        div.style.display = 'none';
    })
    document.querySelector(`#${page}`).style.display = 'block';
}

document.addEventListener('click', function (){
    document.querySelectorAll('button').forEach(button =>{
        button.onclick = function () {
            showPage(this.dataset.page);
                  
        }
    })
})