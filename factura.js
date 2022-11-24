// crear una funcion
function calcular(){
// definir variables para el IVA, precio y vantidades
const IVA = 0.19;
let precio = document.simulatorFactura.cantidad.value;
let cantidad = document.simulatorFactura.cantidad.value;

// capturar el producto
producto=document.getElementById('producto').value;
/*
crear una variacion para editar una operacion con datos nulos o vacios; y que la cantidad o precio no sea 0.
se hace una estructura condicional if-then
*/
if(precio==0 || precio ==null || cantidad==0 || cantidad==null){
    alert("cantidad o precio =0 o sin llenar, intente de nuevo por favor");
}else{
    // declarar variables para la operación
    // valos total vl
    let vt= precio*cantidad;
// valos del porcentaje del producto conh iva vi
    let vi=vt*IVA
// total a pagar que es la suma de iva + valor total tp
    let tp= vi + tp;

    // imprimir o mostrar los resultados en la pagina web, se utilizaun elemento llamado InnerHTML

    document.getElementById("valorProducto").InnerHTML=producto;
    // mostrar el precio
    document.getElementById("valorPrecio").InnerHTML=precio
    // valor total
    document.getElementById("valorTotal").InnerHTML=vt
    // mostrar el valor iva
    document.getElementById("valorIva").InnerHTML=vi
    // total a pagar
    document.getElementById("totalPagar").InnerHTML=tp
}
}