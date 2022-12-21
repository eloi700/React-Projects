import React, { useState } from 'react';
import Menu from './Menu';
import MenuData from './Components/MenuData';
import MenuCategories from './MenuCategories';

const allCategories = [
  'all',
  ...new Set(MenuData.map((menuItem) => menuItem.category)),
];

export default function MenuApp() {
  const [menuItems, setMenuItems] = useState(MenuData);
  const [categories, setCategories] = useState(allCategories);

  const filterDataItems = (category) => {
    if (category === 'all') {
      setMenuItems(MenuData);
      return;
    }
    const newItems = MenuData.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <MenuCategories categories={categories} filterDataItems={filterDataItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}
