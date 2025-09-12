import { groq } from "next-sanity";
import { client, urlFor } from "@/sanity/client";
import Image from "next/image";
import { PortableText, PortableTextBlock, type PortableTextComponents } from "@portabletext/react";

export interface ServiceType {
  _id: string;
  titre: string;
  slug: { current: string };

description: PortableTextBlock[] ;
  image?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference" | "sanity.imageAsset";
    };
    alt?: string;
  };
  bouton: string;
  couleurBouton: "jaune" | "bleu" | string;
}

export const revalidate = 60; // ISR: refresh every 60s

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main className="bg-[#f9f6f2] min-h-screen py-16 px-6 md:px-20 flex flex-col">
  			<h1 className="text-3xl font-bold text-center pb-2 relative inline-block">
					<span className="relative z-10 text-black">
						Mes Services
					</span>
					<div className="mx-auto mt-2 h-0.5 bg-orange w-[80%] max-w-xs rounded-full" />
				</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service: ServiceType) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </main>
  );
}

async function getServices(): Promise<ServiceType[]> {
  const query = groq`*[_type == "services"] | order(_createdAt asc){
    _id,
    titre,
    slug,
    description,
    image{
      ...,
      asset->{
        _id,
        url
      }
    },
    bouton,
    couleurBouton
  }`;
  return await client.fetch(query);
}

// Composants PortableText (styles/annotations)
const portableComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      // value.asset peut contenir url si projeté, sinon construire via urlFor
      const src =
        value?.asset?.url ??
        (value?.asset?._ref ? urlFor(value).width(1200).url() : null);
      if (!src) return null;
      const alt = value?.alt || "";
      return (
        <div className="my-4 relative w-full h-64">
          <Image src={src} alt={alt} fill className="object-contain rounded-md" />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mb-2">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic my-4">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="mb-3 leading-relaxed">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => {
      const target = value?.blank ? "_blank" : undefined;
      const rel = value?.blank ? "noopener noreferrer" : undefined;
      const href = value?.href || "#";
      return (
        <a href={href} target={target} rel={rel} className="underline">
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="px-1 py-0.5 rounded bg-black/5">{children}</code>
    ),
  },
};

function ServiceCard({ service }: { service: ServiceType }) {
  const imageUrl =
    service.image
      ? // si tu préfères toujours builder l’URL via urlFor :
        urlFor(service.image).width(800).height(400).fit("max").url()
      : null;

  const href = service.slug?.current ? `/${service.slug.current}` : "#";
  const boutonClasses =
    service.couleurBouton === "orange"
      ? "bg-orange text-white"
      : "bg-darkbraun text-white";

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-96 relative">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={service.image?.alt || service.titre}
            fill
            className="object-contain rounded-md"
          />
        ) : (
          <div className="w-full h-full bg-black/5 rounded-md" />
        )}
      </div>

      <h2 className="text-lg font-semibold">{service.titre}</h2>

      {/* Description en PortableText */}
      <div className="text-sm text-red-500 leading-snug">
        <PortableText value={service.description} components={portableComponents} />
      </div>

      <a
        href={href}
        className={`mt-2 px-6 py-3 rounded-md font-semibold text-center w-fit ${boutonClasses}`}
      >
        {service.bouton}
      </a>
    </div>
  );
}