import {ADD_ITEM, DELETE_ITEM} from '../../constants/actions'

export const addItem = (product) => {
    return {
        type : ADD_ITEM,
        payload : product
    }
}

export const deleteItem = (product) => {
    return {
        type : DELETE_ITEM,
        payload : product
    }
}