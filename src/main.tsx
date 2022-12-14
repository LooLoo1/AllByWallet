import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { App } from '../src/App'
import { setupStore } from '../src/store/store'
import './index.css'

const store = setupStore()

const root = createRoot(document.getElementById('root')!)
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)