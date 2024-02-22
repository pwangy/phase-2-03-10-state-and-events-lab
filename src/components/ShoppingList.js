import { useState } from 'react'
import Item from './Item'

function ShoppingList({ items }) {
	const [selectedCategory, setSelectedCategory] = useState('All')

	const handleFilter = (e) => {
		console.log(e.target.value)
		setSelectedCategory(e.target.value)
	}

	const renderList = items.filter(item => { 
		return selectedCategory === 'All' ? true : item.category === selectedCategory
	})

	return (
		<div className='ShoppingList'>
			<div className='Filter'>
				<select name='filter' className='filter' onChange={handleFilter}>
					<option value='All'>Filter by category</option>
					<option value='Produce'>Produce</option>
					<option value='Dairy'>Dairy</option>
					<option value='Dessert'>Dessert</option>
				</select>
			</div>
			<ul className='Items'>
				{renderList.map(item =>
					<Item key={item.id} name={item.name}category={item.category} />
				)}
			</ul>
		</div>
)}

export default ShoppingList