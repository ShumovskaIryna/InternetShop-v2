import {ADD_ITEM, DELETE_ITEM, DELETE_ALL_ITEMS} from '../../constants/actions'

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

export const deleteAllItems = (product) => {
    return {
        type : DELETE_ALL_ITEMS,
        payload : product
    }
}