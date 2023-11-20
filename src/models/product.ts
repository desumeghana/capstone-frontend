import { NgbRating } from "@ng-bootstrap/ng-bootstrap"
import { Rating } from "./rating"

export class Product {
    productId:string
    title:string
    images:string[]
    category:string
    price:number
    description:string
    rating:Rating
    discount:number
    available:number
    quantity:number
    constructor( productId:string,
        title:string,
        images:string[],
        category:string,
        price:number,
        description:string,
        rating:Rating,
        discount:number,
        available:number,
        quantity:number){
            this.title=title;
            this.productId=productId;
            this.images=images;
            this.category=category;
            this.price=price;
            this.description=description;
            this.discount=discount;
            this.rating=rating;
            this.available=available;
            this.quantity=quantity;
    }

}
