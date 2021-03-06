import React from 'react'
import { useSelector } from 'react-redux'
import { Shop } from './Shop'
import { AddShopping } from './AddShopping'


export const ShoppingList = () => {
  const list = useSelector(store => store.shopping.list)

  return (
    <div>
      <AddShopping />
      {list.items.map((item, index) => (
        <Shop key={index} itemIndex={index}></Shop>
        ))}
    </div>
  )
}