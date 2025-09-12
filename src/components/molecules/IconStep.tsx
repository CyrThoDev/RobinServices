import ImageIcon from "../atoms/ImageIcon";
import StepTitle from "../atoms/StepTitle";
import StepDescription from "../atoms/StepDescription";

interface IconStepProps {
	src: string;
	alt: string;
	title: string;
	description: string;
}

export default function IconStep({
	src,
	alt,
	title,
	description,
}: IconStepProps) {
	return (
		<div className="flex flex-col  items-center gap-10 z-20">
		<ImageIcon src={src} alt={alt} />
		<div className="flex flex-col items-center text-center z-20 max-w-xs h-full justify-between gap-10">
			
			<StepTitle>{title}</StepTitle>
			<StepDescription>{description}</StepDescription>
		</div>
		</div>
	);
}

