import { Cart } from "./cart"

export class Order {
    orderId:string
    userId:string
    products:Cart[]
    price:number
    address:string
    mobileNo:string
    orderStatus:string
    constructor( orderId:string,
        userId:string,
        products:Cart[],
        price:number,
        address:string,
        mobileNo:string,
        orderStatus:string){
           this.orderId=orderId;
           this.userId=userId;
           this.products=products;
           this.price=price;
           this.address=address;
           this.mobileNo=mobileNo;
           this.orderStatus=orderStatus
    }

}
