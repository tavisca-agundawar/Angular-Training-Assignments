"use strict";
class Product {
    constructor(Name, Category, Manufacturer, Description, Price) {
        this.Name = Name;
        this.Category = Category;
        this.Manufacturer = Manufacturer;
        this.Description = Description;
        this.Price = Price;
        this.Id = -1; //Initialize with invalid Id, then reassign Id in addProduct()
    }
}
class ProductLogic {
    constructor() {
        this.products = new Array();
        this.validator = new ValidationHelper();
        this.getNextId = (function () {
            var idCounter = 0;
            return function () { idCounter += 1; return idCounter; };
        })();
    }
    addProduct(prd) {
        if (this.IsValidProduct(prd)) {
            prd.Id = this.getNextId();
            this.products.push(prd);
        }
        else {
            console.log("Invalid product details.");
        }
        return this.products;
    }
    IsValidProduct(product) {
        if (product == null || product == undefined) {
            return false;
        }
        else if (!this.validator.IsString(product.Name)) {
            return false;
        }
        else if (!this.validator.IsString(product.Category)) {
            return false;
        }
        else if (!this.validator.IsString(product.Manufacturer)) {
            return false;
        }
        else if (!this.validator.IsString(product.Description)) {
            return false;
        }
        else if (!this.validator.IsWithinCharLimit(product.Description, 100)) {
            return false;
        }
        else if (!this.validator.IsPositiveNumberValue(product.Price)) {
            return false;
        }
        return true;
    }
    getAllProducts() {
        return this.products;
    }
    getProductsInCategory(category) {
        var matchingProducts = new Array();
        this.products.forEach((product) => {
            if (product.Category === category) {
                matchingProducts.push(product);
            }
        });
        if (matchingProducts.length > 0) {
            return matchingProducts;
        }
        else {
            return `No matching products for category: ${category} !`;
        }
    }
    getProductsByManufacturer(manufacturer) {
        var matchingProducts = new Array();
        this.products.forEach((product) => {
            if (product.Manufacturer === manufacturer) {
                matchingProducts.push(product);
            }
        });
        if (matchingProducts.length > 0) {
            return matchingProducts;
        }
        else {
            return `No matching products for manufacturer: ${manufacturer} !`;
        }
    }
    deleteProductById(id) {
        var matchingProductIndex = this.products.findIndex(product => product.Id === id);
        if (matchingProductIndex !== -1) {
            this.products.splice(matchingProductIndex, 1);
            return "Removed successfully!";
        }
        else {
            return "No matching Id!";
        }
    }
    updateProduct(prd, id) {
        var matchingProductIndex = this.products.findIndex(product => product.Id === id);
        if (matchingProductIndex !== -1) {
            if (this.IsValidProduct(prd)) {
                prd.Id = id;
                this.products[matchingProductIndex] = prd;
            }
            else {
                return "Invalid product details";
            }
            return this.products[matchingProductIndex];
        }
        else {
            return "No matching Id!";
        }
    }
}
class ValidationHelper {
    constructor() { }
    IsString(obj) {
        if (typeof (obj) === "string")
            return true;
        else
            return false;
    }
    IsWithinCharLimit(str, limit) {
        if (str.length <= limit)
            return true;
        else
            return false;
    }
    IsPositiveNumberValue(obj) {
        if (typeof (obj) === "number") {
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
