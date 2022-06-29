import { ReactElement, CSSProperties } from 'react';
import {PropsImage, PropsButtons, PropsTitle} from '../components';

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number ) => void;
    product: Product;
}


export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Title: (Props: PropsTitle) => JSX.Element,
    Image: (Props: PropsImage) => JSX.Element,
    Buttons: (Props : PropsButtons) => JSX.Element
}


