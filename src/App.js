import logo from './img/logo.svg';
import { useState } from 'react';
import './App.css';
import { ModalComponent } from './components/ModalComponent';
import axios from 'axios';
import env from 'react-dotenv';

// require('dotenv').config();

function App() {
	const [showModal, setShowModal] = useState(false);
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const setNameHandler = (event) => {
		setName(event.target.value);
	};

	const setLastNameHandler = (event) => {
		setLastName(event.target.value);
	};

	const setEmailHandler = (event) => {
		setEmail(event.target.value);
	};

	const setMessageHandler = (event) => {
		setMessage(event.target.value);
	};

	const checkInputs = () => {
		if (!name || !lastName || !email || !message) return false;
		return true;
	};

	const sendMessageHandler = async () => {
		if (!checkInputs()) return;
		try {
			await axios.post(`${env.PROTOCOL}://${env.IP}:${env.PORT}/mail`, {
				name,
				lastName,
				email,
				message,
			});
			setShowModal(false);
			alert('Your message is received!');
		} catch {
			alert('Some error on server occured');
		}
	};

	const onHideHandler = () => {
		setShowModal(false);
	};

	const onShowHandler = () => {
		setShowModal(true);
	};

	return (
		<div className="app">
			<header className="header">
				<img src={logo} alt="logo"></img>
			</header>
			<div className="content">
				<h1>Website coming soon</h1>
				<button className="button" onClick={onShowHandler}>
					Contact us
				</button>
			</div>

			<ModalComponent show={showModal} onHide={onHideHandler}>
				<h3>get in touch</h3>

				<input
					id="name"
					type="text"
					placeholder="name"
					value={name}
					onChange={setNameHandler}
				/>
				<input
					id="last_name"
					type="text"
					placeholder="last name"
					value={lastName}
					onChange={setLastNameHandler}
				/>
				<input
					id="email"
					type="text"
					placeholder="email"
					value={email}
					onChange={setEmailHandler}
				/>
				<textarea
					id="message"
					placeholder="your message"
					value={message}
					onChange={setMessageHandler}></textarea>

				<button id="form_button" className="button" onClick={sendMessageHandler}>
					CONTACT US
				</button>
			</ModalComponent>
		</div>
	);
}

export default App;
