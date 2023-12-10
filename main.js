let imgs = Array.from(document.images);

let imgWeb = document.querySelectorAll(" .gallery .web ");
let imgGfx= document.querySelectorAll(" .gallery .gfx ");
let imgMarketing = document.querySelectorAll(" .gallery .marketing ");
let switcherLis = document.querySelectorAll(".switcher li ");
imgWeb.onclick = function () {
    document.documentElement.style.color ='black';
}
switcherLis.forEach((li)=>{
    li.addEventListener("click" ,removeAdd );
    li.addEventListener("click" ,manageImgs )
});
    function removeAdd () {
        switcherLis.forEach((li)=>{
        li.classList.remove("active");
        this.classList.add("active")
})
    }
    
    function manageImgs () {
        imgs.forEach((img)=>{
            img.style.display="none"
    });
    document.querySelectorAll(this.dataset.cat).forEach((el)=>{
        el.style.display="block"
    })
    };
