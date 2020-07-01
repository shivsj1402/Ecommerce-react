import {createSelector}  from 'reselect';

const selectShop = (state)=> state.shop;

export const selectShopCollection= createSelector(
    [selectShop],
    shop=>shop.collections
)

export const selectCollection = collectionID => createSelector(
    [selectShopCollection],
    collections => collections ? collections[collectionID] : null
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollection],
    collections=>collections ? Object.keys(collections).map(keys=>collections[keys]) : []
)