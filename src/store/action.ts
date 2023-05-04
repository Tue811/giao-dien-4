import { ADDTOCART } from "../contants/cart";
import { GETPRODUCT } from "../contants/productDetail";
import { ADDWL, DELETEWL } from "../contants/wishlist";


export function addWl(){
    return{
        type: ADDWL,
    }
}

export function deleteWl(){
    return{
        type: DELETEWL,
    }
}

export  function addToCart(payload: any){
    return{
        type: ADDTOCART,
        payload: payload
    }
}

export function getProduct(payload : any){
    return{
        type: GETPRODUCT,
        payload: payload
    }
}