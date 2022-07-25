import React from 'react';
import { Route, Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const PumaComp = ({match}) => {
    const productsData = [
        {
          id: 1,
          name: "NIKE Liteforce Blue Sneakers",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
          status: "Available",
        },
        {
          id: 2,
          name: "Stylised Flip Flops and Slippers",
          description:
            "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
          status: "Out of Stock",
        }
    ];
    const LinkList = productsData.map((product, index) => <li key={index}><Link to={`${match.url}/${product.id}`}>{product.name}</Link></li>);
    
    return(
        <>
            <ul>
                { LinkList }
            </ul>
            <Route path={`${match.url}/:productId`} render={ (props) => <ProductDetails data={productsData} {...props}/>}/>
        </>
    )
};

export default PumaComp;