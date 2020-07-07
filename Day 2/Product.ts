const { v4: uuidv4 } = require('uuid');
class Product {
    constructor(
        public ProductId: string,
        public ProductName: string,
        public Category: string,
        public Price: number
    ){
        ProductId = uuidv4();
    }
}