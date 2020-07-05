import {connect} from 'react-redux';
import WithSpinner from '../With-spinner/with-spinner.component';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {selectIsCollectionFetching} from '../../redux/shop/shop-selector'
import CollectionsOverview from './collections-overview';


const mapStateToProps = createStructuredSelector({
    isCollectionFetching : selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;