import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtons } from './ProductButtons';
export type { Props as PropsButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export type { Props as PropsImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export type { Props as PropsTitle } from './ProductTitle';


export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})


export default ProductCard;

