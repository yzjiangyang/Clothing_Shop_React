import Homepage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'

const Hatspage = () => {
	return (
		<div>
			This is Hatspage!
		</div>
	)
}

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop/hats" component={Hatspage} />
			</Switch>
		</div>
	);
}

export default App;
