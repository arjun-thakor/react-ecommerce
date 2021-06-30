import { Button, Menu, Icon } from "semantic-ui-react";

function Navbar() {
	return (
		<Menu stackable style={{ borderRadius: "0" }}>
			<Menu.Item name="Home">
				<Icon loading name="react" color="blue" size="large"></Icon>
			</Menu.Item>
			<Menu.Item name="Girls" active>
				Girls
			</Menu.Item>
			<Menu.Item name="Guys">Guys</Menu.Item>
			<Menu.Item name="Kids">Kids</Menu.Item>
			<Menu.Item name="Login" position="right">
				<Button color="facebook">
					<Icon name="sign-in" /> Login
				</Button>
			</Menu.Item>
		</Menu>
	);
}

export default Navbar;
