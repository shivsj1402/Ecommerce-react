import React from 'react';
import { Route } from 'react-router-dom'
import CollectionsOverviewContainer from '../../Components/Collection-overview/collections-overview.container'
import CollectionsPageContainer from '../Collection/collection.container';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop-actions';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionLoaded} from '../../redux/shop/shop-selector'


class ShopPage extends React.Component{
    componentDidMount(){
        const { fetchCollectionsStart } = this.props; 
        fetchCollectionsStart();
    }

    render(){ 
        const { match} = this.props;
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component = {CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component = {CollectionsPageContainer}/>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionLoaded : selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch =>({
    fetchCollectionsStart: () =>dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);