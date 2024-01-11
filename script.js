let circle = document.getElementById("circle");
let shape = document.getElementById("shape");
let colorbtn = document.getElementById("colorbtn");
let shapebtn =document.getElementById("shapebtn");


colorbtn.addEventListener("click",()=>{
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let color =`rgb(${r},${g},${b})`
    console.log(color);
    circle.style.backgroundColor = color;
})

shapebtn.addEventListener("click",()=>{
    // let shapeArr = ["#square","#rectangle", "#circle"," #oval","#triangle-up"," #triangle-down","#triangle-left"];

    // let shapeArr1 = ["square","rectangle", "A","oval","triangle-up","triangle-down","triangle-left", "triangle-right","triangle-topleft","triangle-topright","triangle-bottomleft","triangle-bottomright","parallelogram","trapezoid","star-six","star-five","pentagon","hexagon","octagon","heart","infinity","diamond","moon","cross","pacman"];

    let shapeArr1 = ["square","abc","rectangle",'oval','trapezoid','parallelogram','triangle-up','triangle-down','triangle-left']
    let index = Math.floor(Math.random()*shapeArr1.length)
    // shape.classList.add(shapeArr[index])
    shape.classList.remove(...shapeArr1);
    console.log(shapeArr1[index]);
    shape.classList.add(shapeArr1[index]);

})




