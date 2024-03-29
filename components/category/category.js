import React from 'react';
import CategoryItem from './categoryItem/categoryItem';

// category component
const Category = () => {
    return (
        <section className='categoryLink col-xs-12 col-s-12 col-l-3' id='category'>
            <ul>
                <li>
                    Browse Categories
                </li>
                <CategoryItem link="/products/category/men's clothing" text="Men's clothing" />
                <CategoryItem link="/products/category/women's clothing" text="Women's clothing" />
                <CategoryItem link='/products/category/electronics' text='Electronics' />
                <CategoryItem link='/products/category/jewelery' text='Jewelery' />
            </ul>
        </section>
    )
}

export default Category
