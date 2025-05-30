import React from "react";
import Button from "../atoms/Button";

function ContactInformations() {
	return (
		<div className="px-10 lg:px-20 my-20">
			<h2 className="text-3xl font-bold text-left lg:text-center pb-2 relative inline-block mb-8">
				<span className="relative z-10">Discutons de votre besoin</span>
				<div className="lg:mx-auto mt-2 h-0.5 bg-secondary d w-[80%] max-w-xs rounded-full" />
			</h2>
			<p className="mb-8">
				Afin de mieux cerner votre besoin je privilégie le contact par téléphone
				ou par mail.
			</p>
			<div className="flex flex-col lg:flex-row justify-around gap-8 lg:gap-0 ">
				<div className="flex flex-col lg:items-center gap-4">
					<p>Echangeons sur votre projet par télephone</p>
					<Button title="06 06 06 06 06" width="max-w-fit" link="/contact" />
				</div>
				<div className="flex flex-col lg:items-center gap-4">
					<p>Parlez moi de votre projet par mail </p>
					<Button title="mail@mail.com" width="max-w-fit" link="/contact" />
				</div>
			</div>
		</div>
	);
}

export default ContactInformations;
