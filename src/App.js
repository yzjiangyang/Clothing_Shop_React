import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import { Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
	return (
		<div className="App">
			{/* header is always present despite the page */}
			<Header /> 
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInAndSignOutPage} />
			</Switch>
		</div>
	);
}

export default App;
