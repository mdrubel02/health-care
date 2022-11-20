import { Stack, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../Styles/Product';
import { ProductMeta } from './ProductMeta';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';

const SingleProductDesktop = ({ product, matches }) => {
    const [showOptions, setShowOptions] = useState(false);

    const handleMouseEnter = () => {
        setShowOptions(true);
      };
      const handleMouseLeave = () => {
        setShowOptions(false);
      };
    return (
        <>
        <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <ProductImage src={product.picture} />
          <ProductFavButton isfav={0}>
            <FavoriteIcon  />
          </ProductFavButton>
          {(showOptions || matches) && (
            <ProductAddToCart show={showOptions} variant="contained">
              Add to cart
            </ProductAddToCart>
          )}
          <ProductActionsWrapper show={showOptions || matches}>
            <Stack direction={matches ? "row" : "column"}>
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
        <ProductMeta product={product} />
        {/* <ProductDetailDialog product={product} /> */}
      </>
    );
};

export default SingleProductDesktop;