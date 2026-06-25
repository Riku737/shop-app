import './css/App.css';
import {Routes, Route} from "react-router-dom"

import Cart from './pages/Cart';
import Home from './pages/Home';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {

	return (
		<>
		<NavBar />
		<div className="container mt-4 mb-4">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</div>
		<Footer />
		</>
	);
}


export default App;
