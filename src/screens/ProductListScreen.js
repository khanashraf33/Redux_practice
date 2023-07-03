import Header from "../components/Header"
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './../actions/cartAction';


const ProductListScreen = () => {
    const dispatch = useDispatch()

    const products = [
        {id: 1, title: 'product 1', description: 'description 1', price: '100'},
        {id: 2, title: 'product 2', description: 'description 2', price: '200'},
        {id: 3, title: 'product 3', description: 'description 3', price: '300'},
        {id: 4, title: 'product 4', description: 'description 4', price: '400'},
        {id: 5, title: 'product 5', description: 'description 5', price: '500'},
        {id: 5, title: 'product 6', description: 'description 6', price: '600'}
    ]

    const onAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const onRemoveToCart = (product) => {
        dispatch(removeFromCart(product))
    }

    return (
        <div>
            <Header title="Products"/>

            <div className="row">
            {products.map((product)=>{
                return (
                    <div className="product col-md-5">
                        <div className="title">{product.title}</div>
                        <div className="description">{product.description}</div>
                        <div className="price">Price: {product.price}</div>
                        <button
                         onClick={() => {
                            onAddToCart(product)
                         }}
                        className="btn btn-sm btn-success btn-add-to-cart">
                            Add To Cart
                            </button>
                        <button
                         onClick={() => {
                            onRemoveToCart(product)
                         }}
                        className="btn btn-sm btn-danger btn-add-to-cart">
                           <span>remove from cart</span> 
                            </button>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default ProductListScreen