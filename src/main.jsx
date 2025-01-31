import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import '../src/app/index.css'

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
