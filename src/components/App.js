import { useState } from 'react'
import ShoppingList from './ShoppingList'
import itemData from '../data/items'

const App = () => {
  const [mode, setMode] = useState(false)
  const appClass = mode ? 'App dark' : 'App light'
  const handleClick = () => setMode(mode => !mode)

	return (
		<div className={appClass}>
			<header>
				<h2>Shopster</h2>
				<button id='toggleMode' onClick={handleClick} className={appClass}>{mode ? 'Dark Mode' : 'Light Mode'}</button>
			</header>
			<ShoppingList items={itemData} />
		</div>
)}

export default App