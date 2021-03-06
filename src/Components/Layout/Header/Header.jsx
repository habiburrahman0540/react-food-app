import React, {Fragment} from 'react';
import classes from "./Header.module.css"
import mealImages from "../../../assets/meals.jpg"
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClickModal={props.openModal}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImages}/>
            </div>
        </Fragment>
    );
};

export default Header;