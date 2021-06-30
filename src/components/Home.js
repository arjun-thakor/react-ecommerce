import { Container, Card, Icon, Image, Header } from "semantic-ui-react";

function Home() {
	return (
		<Container>
			<Header>Products</Header>
			<Card>
				<Image
					src="https://uxwing.com/wp-content/themes/uxwing/download/12-people-gesture/man-person.png"
					wrapped
					ui={false}
				/>
				<Card.Content>
					<Card.Header>Daniel</Card.Header>
					<Card.Meta>Joined in 2016</Card.Meta>
					<Card.Description>
						Daniel is a comedian living in Nashville.
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<a>
						<Icon name="user" />
						10 Friends
					</a>
				</Card.Content>
			</Card>
		</Container>
	);
}

export default Home;
