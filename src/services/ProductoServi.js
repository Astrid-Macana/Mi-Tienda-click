import instance from"../Config/axios"

export function getAllProductos(){
    return instance.get("products");
}
export function getByIdiProductos(id) {
    return instance.get(`products/${id}`);
}
export function createProductos() {
    
}