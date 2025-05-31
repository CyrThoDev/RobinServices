import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
	projectId: "wfu70vhm",
	dataset: "production",
	apiVersion: "2024-01-01",
	useCdn: false,
});

const builder = imageUrlBuilder(client);
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const urlFor = (source: any) => builder.image(source);
