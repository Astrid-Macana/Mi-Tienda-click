import instance from"../Config/axios"

export function getAllProductos(){
    return instance.get("'https://fakestoreapi.com/products'");
}
export function getByIdProductos(id) {
    return instance.get(`items/${id}`);
}
export function createProductos() {
    
}