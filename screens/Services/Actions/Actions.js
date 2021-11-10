import { ADD_TO_CART,REMOVE_TO_CART,COUNTER} from "../Constants"


export const addToCart = (data) => {
    console.log("actions",data)

    return {
        type: ADD_TO_CART,
        data: data
    }

}
export const removeToCart = () => {
console.log("actions")
    return {
        type: REMOVE_TO_CART,
    }

}

export const counter = (data) => {
    console.log("actions")
        return {
            type: COUNTER,
            data
        }
    
    }
