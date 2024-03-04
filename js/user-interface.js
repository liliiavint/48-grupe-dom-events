import { header } from "./header.js";
header();

function showPage(page){
    document.querySelectorAll('div .y').forEach(div => {
        div.style.display = 'none';
    })
    document.querySelector(`#${page}`).style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function (){
    document.querySelectorAll('button .x').forEach(button =>{
        button.onclick = function () {
            showPage(this.dataset.page);
                  
        }
    })
})