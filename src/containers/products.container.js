
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {getProductsError, getProducts, getProductsPending} from '../redux/reducers';
import fetchProducts from '../services/products.service';
import { ProductListComponent } from '../components/product-list/product';


const mapStateToProps = state => ({
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state)
})


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts: fetchProducts
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListComponent);
