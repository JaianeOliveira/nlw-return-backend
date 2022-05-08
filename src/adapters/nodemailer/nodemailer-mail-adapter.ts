import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
	host: 'smtp.mailtrap.io',
	port: 2525,
	auth: {
		user: 'adf30769a3fa06',
		pass: '8e3bcadfbbed2c',
	},
});

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: SendMailData) {
		await transport.sendMail({
			from: 'Equipe Feedget <oi@feedget.com>',
			to: 'Jaiane Oliveira <jaianeoliveira.dev@gmail.com>',
			subject: subject,
			html: body,
		});
	}
}
