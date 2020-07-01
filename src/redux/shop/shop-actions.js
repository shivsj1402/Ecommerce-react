import ShopActionTypes from './shop-actiontypes'

export const updateCollections = collectionsMap =>({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload : collectionsMap
});