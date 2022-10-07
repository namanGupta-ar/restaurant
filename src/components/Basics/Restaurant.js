import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import NavBar from './NavBar';


// it give all the unique categories
const uniqueList = [
    ...new Set(Menu.map((curElem) => {
        return curElem.category;
    })),
    "All"
];

const Restaurant = () => {
    // [stateVariable, updatedFunction]
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);


    // it gives categoryWise items
    const filterItem = (category) => {

        if(category == 'All'){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((currELem) => {
            return currELem.category == category;
        });

        setMenuData(updatedList);
    };

    return (
        <>  
            <NavBar filterItem={filterItem} menuList={menuList}></NavBar>
            <MenuCard menuData={menuData}/>
        </>
    )
}

export default Restaurant
