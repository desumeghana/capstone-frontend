import { Product } from "./product"

export class User {
    userId:string
    userName:string
    password:string
    email:string
    mobileNo?:string
    Address?:string[]
    cart?:Product[]
    wishlist?:Product[]
    constructor(userId:string,
        userName:string,
        password:string,
        email:string,
        cart:Product[],
        wishlist:Product[],
        mobileNo?:string,
        Address?:string[],
        ){
        this.userId=userId;
        this.userName=userName;
        this.password=password;
        this.email=email;
        this.cart=cart;
        this.wishlist=wishlist;
        this.mobileNo=mobileNo;
        this.Address=Address;
    }

}
