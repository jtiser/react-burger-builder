import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients) //extract all keys into an object 
        .map(igKey => {   //map all keys to new arrays. Arrays length = number of ingredients (2 salad, 3 cheese, etc)
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />; //populate each arrays with appropriate BurgerIngredient element
            });
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;