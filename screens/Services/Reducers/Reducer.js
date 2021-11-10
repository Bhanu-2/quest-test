import { ADD_TO_CART, REMOVE_TO_CART,COUNTER} from "../Constants"


const Intialstate = {
    cardData: {},
    counter:0
}

var cart={}
export const cardItems = (state = Intialstate, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            var id=action.data.item?action.data.item.id:null;
            if(cart["item_"+id]){
                if(id===cart["item_"+id].id){
                    console.log("cart+id]",cart["item_"+id].count)
    
                    cart["item_"+id]={...action.data.item,count:cart["item_"+id].count+1}
                }
            }
            else{
                cart["item_"+id]={...action.data.item,count:1}
            }
            console.log(cart)
            return {
                ...state,
                cardData: cart
            }
        case REMOVE_TO_CART:
            state.pop()
            return {
                ...state,
        }
        case COUNTER:
            return{
                ...state,
                counter:action.data
            }
        default:
            return state
    }


}