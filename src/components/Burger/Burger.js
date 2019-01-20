import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let ingredients = Object.keys(props.ingredients)
        // .map((ingrKey) => {
        //     return [...Array(props.ingredients[ingrKey])]
        //         .map((_, index) => {
        //             return <BurgerIngredient key={ingrKey + index} type={ingrKey}/>
        //         });
        // }).reduce((arr, elem) => {
        //     return arr.concat(elem);
        // }, []);
        .reduce((arr, elem) => {
            [...Array(props.ingredients[elem])]
                .forEach((e, i) => arr.push(<BurgerIngredient key={elem + i} type={elem}/>));
            return arr;
        }, []);
    if (ingredients.length === 0) {
        ingredients = <p>Please, add ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={'bread-top'}/>
            {ingredients}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
};

export default burger;
