import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = `<ul>`

    for (const product of products) {
        html += `<li data-type = "product" data-name = "${product.name}" data-price = "${product.price}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}


addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if ( itemClicked.dataset.type === "product"){
         window.alert(`${itemClicked.dataset.name} costs ${itemClicked.dataset.price}`)
         
        }
        
    }
)
