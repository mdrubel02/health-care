import { Stack, Tooltip } from '@mui/material';
import React from 'react';
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../Styles/Product';
import { ProductMeta } from './ProductMeta';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';

const SingleProduct = ( product, matches) => {
    return (
        <>
        <Product >
          <ProductImage src={product.picture} />
          <ProductMeta product={product} matches={matches} />
          <ProductActionsWrapper>
            <Stack direction={matches ? "row" : "column"}>
              <ProductFavButton isfav={0}>
                <FavoriteIcon />
              </ProductFavButton>
              <ProductActionButton>
                <Tooltip placement="left" title="share this product">
                  <ShareIcon color="primary" />
                </Tooltip>
              </ProductActionButton>
              <ProductActionButton >
                <Tooltip placement="left" title="Full view">
                  <FitScreenIcon color="primary" />
                </Tooltip>
              </ProductActionButton>
            </Stack>
          </ProductActionsWrapper>
        </Product>
        <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
        {/* <ProductDetailDialog product={product} /> */}
      </>
    );
};

export default SingleProduct;