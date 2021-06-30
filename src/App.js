import { Container, Grid } from "semantic-ui-react";
import Home from "./components/Home";
import NavBar from "./components/Navbar";

function App() {
	return (
		<Grid>
			<Grid.Row>
				<Grid.Column>
					<NavBar />
				</Grid.Column>
			</Grid.Row>
			<Container>
				<Home />
			</Container>
		</Grid>
	);
}

export default App;
