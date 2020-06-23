class Product{
    // title = "DEFAULT";
    // imageUrl;
    // description;
    // price;

    constructor(title,image, desc, price){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ShoppingCart{

    items = [];

    render(){
        const cartEl = document.createElement("section")
        cartEl.innerHTML = `
        <h2>\$${0}</h2>
        <button> Order Now</button>
        `
        cartEl.className = "cart"
    }

}

class ProductItem{
    constructor(product){
        this.product = product;
    }

    addToCart(){
        console.log("Adding to cart");
        console.log(this.product);       
        
    }

    render(){
        const prodEl = document.createElement('li');
            prodEl.className = "product-item";
            prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt = "${this.product.title}">
                <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button> Add To Cart</button>
            </div>
            `;
            const addCartBtn = prodEl.querySelector("button")
            addCartBtn.addEventListener("click", this.addToCart.bind(this));
            return prodEl;
    }
}

class ProductList{
    products = [
        new Product(
            "A Pillow",
            "./img/fairfield-store-ffi-108-s-down-alternative-eco-pillow_lrg.jpg",
            'A soft pillow',
            19.99
        ),
        new Product(
            "A Carpet",
            "./img/unnamed.jpg",
            'A cheap carpet',
            14.99
        ),     
    ];
    constructor(){}

    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement("ul");
        prodList.className = 'product-list';       
        for(const prod of this.products){
            const productItem =  new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl)
        }
            
        renderHook.append(prodList);
    }

}


const productList = new ProductList();
productList.render();