import Link from "next/link";
import React from "react";

type ButtonPropsType = {
	title: string;
	link: string;
	width?: string;
};

function Button({ title, link, width }: ButtonPropsType) {
	return (
		<Link
			href={link}
			className={`bg-secondary text-black font-medium text-center rounded-md py-3 px-4 ${width} block focus:outline-none`}
		>
			{title}
		</Link>
	);
}

export default Button;
