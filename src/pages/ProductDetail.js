import { useParams } from "react-router-dom";

const ProductDetailPage = ()=>{

    const params = useParams();
    // params.productId

    return (
    <>
        <h1>ProductDetailPage</h1>
        <p>{params.productId}</p>
    </>
    )
}

export default ProductDetailPage;