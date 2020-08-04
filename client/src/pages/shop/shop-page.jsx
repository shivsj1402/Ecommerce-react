import React, {useEffect , lazy, Suspense} from 'react';
import { Route } from 'react-router-dom'
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop-actions';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionLoaded} from '../../redux/shop/shop-selector'
import Spinner from '../../Components/spinner/spinner'

const CollectionsOverviewContainer = lazy(()=> import('../../Components/Collection-overview/collections-overview.container'));
const CollectionsPageContainer = lazy(()=> import('../Collection/collection.container'));


const ShopPage = ({ fetchCollectionsStart, match }) =>{
    useEffect(()=>{
        fetchCollectionsStart();
    }, [fetchCollectionsStart])
    
    return(
        <div className="shop-page">
            <Suspense fallback={<Spinner />}>
            <Route exact path={`${match.path}`} component = {CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component = {CollectionsPageContainer}/>
            </Suspense>
        </div>
    );

}

const mapStateToProps = createStructuredSelector({
    isCollectionLoaded : selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch =>({
    fetchCollectionsStart: () =>dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);