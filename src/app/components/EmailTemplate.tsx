interface EmailTemplateProps {
	firstName: string;
	product: string;
}

import React from "react";

const EmailTemplate: React.FC<EmailTemplateProps> = ({ firstName, product }) => {
	return (
		<div>
			<h1>Welcome, {firstName}!</h1>
			<p>Thanks for trying {product}. We’re thrilled to have you on board.</p>
		</div>
	);
};

export default EmailTemplate;
