const productos = {
    id: 101,
    nombre: "Laptop",
    precio: 2500,
    detalle: {
        marca: "HP",
        modelo: "Pavilion",
        color: "Gris"
    }
}
const { id, nombre, precio, detalle: { marca, modelo, color } } = productos;

console.log(`Producto: ${nombre}`);
console.log(`ID: ${id}`);
console.log(`Precio: $${precio}`);
console.log(`Marca: ${marca}`);
console.log(`Modelo: ${modelo}`);
console.log(`Color: ${color}`);