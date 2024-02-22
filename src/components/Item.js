import { useState } from 'react'

const Item = ({ name, category }) => {
	const [cart, setCart] = useState(false)
	const handleItemClick = () => setCart(cart => !cart)

	return (
		<li className={cart ? 'in-cart' : ''}>
			<span>{name}</span>
			<span className='category'>{category}</span>
			<button className={cart ? 'add' : 'remove'} onClick={handleItemClick}>{cart ? 'Add to Cart' : 'Remove From Cart'}</button>
		</li>
)}

export default Item