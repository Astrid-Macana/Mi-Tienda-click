import instance from"../Config/axios"

export function getAllProductos(){
    return instance.get("products");
}
export function getProducto() {
    return instance.get("/products/1");
}
export function createProductos() {
    
}