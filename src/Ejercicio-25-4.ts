let precio: number = Number(450.5);
let porcentajedescuento: number = Number(0.1);
let descuento: number = precio * porcentajedescuento;
let preciofinal: number = precio - descuento;
let btnEnv = document.getElementById("btnEnv");
btnEnv.addEventListener("click", () => {
  console.log("Precio Final:", preciofinal);
});
