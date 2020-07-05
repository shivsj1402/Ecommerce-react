import {connect} from 'react-redux';
import WithSpinner from '../../Components/With-spinner/with-spinner.component';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {selectIsCollectionLoaded} from '../../redux/shop/shop-selector'
import CollectionPage from './collection';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;