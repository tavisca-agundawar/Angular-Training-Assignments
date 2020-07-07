class Product {
    public Id: number;
    constructor(
        public Name: string,
        public Category: string,
        public Manufacturer: string,
        public Description: string,
        public Price: number
    ){
        this.Id = -1; //Initialize with invalid Id, then reassign Id in addProduct()
    }
}

class ProductLogic{
    private products: Array<Product>;
    private validator: ValidationHelper;
    private getNextId: Function;
    constructor(){
        this.products = new Array<Product>();
        this.validator = new ValidationHelper();
        this.getNextId = (function () {
            var idCounter = 0;
            return function () {idCounter += 1; return idCounter}
          })();
    }

    addProduct(prd: Product) : Array<Product> {
        if(this.IsValidProduct(prd))
        {
            prd.Id = this.getNextId();
            this.products.push(prd);
        }
        else{
            console.log("Invalid product details.");
        }
        return this.products;
    }
    IsValidProduct(product: Product) : boolean{
        if(product == null || product == undefined){
            return false;
        }
        else if(!this.validator.IsString(product.Name)){
            return false;
        }
        else if(!this.validator.IsString(product.Category)){
            return false;
        }
        else if(!this.validator.IsString(product.Manufacturer)){
            return false;
        }
        else if(!this.validator.IsString(product.Description)){
            return false;
        }
        else if(!this.validator.IsWithinCharLimit(product.Description,100)){
            return false;
        }
        else if (!this.validator.IsPositiveNumberValue(product.Price)) {
            return false;
        }
        return true;
    }
    getAllProducts(): Array<Product>{
        return this.products;
    }
    getProductsInCategory(category: string): Array<Product> | string{
        var matchingProducts = new Array<Product>();
        this.products.forEach((product) => {
            if (product.Category === category) {
                matchingProducts.push(product);
            }
        })
        if (matchingProducts.length > 0) {
            return matchingProducts;
        }
        else{
            return `No matching products for category: ${category} !`;
        }
    }
    getProductsByManufacturer(manufacturer: string): Array<Product> | string{
        var matchingProducts = new Array<Product>();
        this.products.forEach((product) => {
            if (product.Manufacturer === manufacturer) {
                matchingProducts.push(product);
            }
        })
        if (matchingProducts.length > 0) {
            return matchingProducts;
        }
        else{
            return `No matching products for manufacturer: ${manufacturer} !`;
        }
    }
    deleteProductById(id: number): string{
        var matchingProductIndex = this.products.findIndex(product => product.Id === id);
        if (matchingProductIndex !== -1) {
            this.products.splice(matchingProductIndex,1);
            return "Removed successfully!";
        }
        else{
            return "No matching Id!";
        }
    }
    updateProduct(prd: Product, id: number): Product | string{
        var matchingProductIndex = this.products.findIndex(product => product.Id === id);
        if (matchingProductIndex !== -1) {
            if (this.IsValidProduct(prd)) {
                prd.Id = id;
                this.products[matchingProductIndex] = prd;
            }
            else{
                return "Invalid product details";
            }
            return this.products[matchingProductIndex];
        }
        else{
            return "No matching Id!";
        }
    }
}

class ValidationHelper{
    constructor(){}
    IsString(obj: any): boolean{
        if(typeof(obj) === "string")
            return true;
        else
            return false;
    }
    IsWithinCharLimit(str: string, limit: number): boolean{
        if(str.length <= limit)
            return true;
        else
            return false;
    }
    IsPositiveNumberValue(obj: any): boolean{
        if (typeof(obj) === "number") {
            if (obj >= 0) {
                return true;
            }
            return false;
        }
        return false;
    }
}

// let logic = new ProductLogic();
// logic.addProduct(new Product("Mask","Health","Medico+","Protect from Covid19",100));
// logic.addProduct(new Product("Sanitizer","Health","Medico+","Protect from Covid19",200));
// logic.addProduct(new Product("HandWash","Health","Dettol","Protect from Covid19",150));
// logic.addProduct(new Product("Bakarwadi","Food","Chitale","Pune's famous farsan",180));
// console.log(logic.getAllProducts());