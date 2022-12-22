// import nodemailer from 'nodemailer';
// const nodemailer = require('nodemailer');
// import { Mailer } from 'nodemailer-react';
// import { nodemailer } from 'nodemailer';
export const sendMail = async (name, lastName, email, message) => {
	// let transporter = nodemailer.createTransport({
	// 	host: 'smtp.gmail.com',
	// 	port: 465,
	// 	secure: true,
	// 	auth: {
	// 		user: window.env.EMAIL_SENDER,
	// 		pass: window.env.PASSWORD,
	// 	},
	// });

	const transport = {
		host: 'smtp.gmail.com',
		secure: true,
		auth: { user: window.env.EMAIL_SENDER, pass: window.env.PASSWORD },
	};

	const messageText = `
    name: ${name}
    lastName: ${lastName}
    email: ${email}
    message: ${message}
  `;

	const messageTextHTML = `
  <b>name: </b> ${name}  <br/>
  <b> lastName: </b> ${lastName} <br/>
  <b> email: </b> ${email} <br/>
  <b> message: </b> ${message} <br/>
`;

	// await transporter.sendMail({
	// 	from: `"Fred Foo 👻" <${window.env.EMAIL_SENDER}>`,
	// 	to: window.env.EMAIL_RECEIVER,
	// 	subject: 'tEST MESSAGE',
	// 	text: messageText,
	// 	html: messageTextHTML,
	// });
};
