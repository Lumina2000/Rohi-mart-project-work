const products = document.getElementsByClassName('product');

const cartList = [];
const cartCounter = document.getElementById('itemCount');

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    
    const cartBtn = product.querySelector("button");
    const productName = product.querySelector("h3");
    // const productPrice = product.querySelector()
    
    cartBtn.addEventListener("click", () => {
        window.alert(productName.innerHTML);
        cartList.push(productName.innerHTML);
        const cartCount = cartList.length;
        cartCounter.innerHTML = cartCount;

        console.log(cartList.length);
    })
};