let inputCantidad = document.querySelector("#cantidadCol1");
let inputColor = document.querySelector("#colorCol1");
let inputPrecio = document.querySelector("#precioCol1");
let calculoPedido = document.querySelector("#calculoPedido");
let outputCantidad = document.querySelector("#cantidadCol2");
let outputColor = document.querySelector("#colorCol2");
let outputTotal = document.querySelector("#totalCol2");

calculoPedido.addEventListener("click",()=>{
    total = (Number(inputPrecio.textContent) * Number(inputCantidad.value)).toLocaleString();
    cantidad = inputCantidad.value;
    color = inputColor.value;

    outputTotal.textContent = total;
    outputCantidad.textContent = cantidad;
    outputColor.style.backgroundColor = color;
})