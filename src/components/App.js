import { useState } from 'react'
import ShoppingList from './ShoppingList'
import itemData from '../data/items'

const App = () => {
  const [mode, setMode] = useState(false)
  const appClass = mode ? 'App dark' : 'App light'
  const handleTheme = () => setMode(mode => !mode)

	return (
		<div className={appClass}>
			<header>
				<h2>Shopster</h2>
				<button id='toggleMode' onClick={handleTheme} className={appClass}>{mode ? 'Dark Mode' : 'Light Mode'}</button>
			</header>
			<ShoppingList items={itemData} />
		</div>
)}

export default App