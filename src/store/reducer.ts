
import { ADDTOCART } from '../contants/cart';
import { GETPRODUCT } from '../contants/productDetail';
import { ADDWL, DELETEWL } from '../contants/wishlist';

const initialState = {
    wishlistCount:0,
    cartCount:0,
    product:{},
    
};


function reducer(state=initialState,action : any){
    console.log(state)
    
    switch(action.type){
        case ADDWL:
            return{
                ...state,
                wishlistCount: state.wishlistCount + 1
            };

            case DELETEWL:
                return{
                    ...state,
                    wishlistCount: state.wishlistCount - 1
                };

            case ADDTOCART:
                return{
                    ...state,
                    cartCount: state.cartCount + 1
                }

            case GETPRODUCT:
                return{
                    ...state,
                    product: action.payload
                    
                }
                
            default:
                return state;


    }
    
}

export default reducer;