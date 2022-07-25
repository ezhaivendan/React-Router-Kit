import React from 'react';

const ProductDetails = ({match, data}) => {
    const Prod = data.find((prod) => prod.id === Number(match.params.productId));
    return(
        <>
        <div>
            <p>{Prod.name}</p>
            <p>{Prod.description}</p>
            <p>{Prod.status}</p>
        </div>
        </>
    )
};

export default ProductDetails;
