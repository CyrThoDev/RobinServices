// app/services/page.tsx
import { groq } from "next-sanity";
import { client, urlFor } from "@/sanity/client";
import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import type { ReactNode } from "react";

export interface ServiceType {
  _id: string;
  titre: string;
  slug: { current: string };
  description: PortableTextBlock[] | string | string[];
  image?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference" | "sanity.imageAsset";
    };
    alt?: string;
  };
  bouton: string;
  couleurBouton: "jaune" | "bleu" | "orange" | string;
}

export const revalidate = 60; // ISR: refresh every 60s

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main className="bg-[#f9f6f2] min-h-screen py-16 px-6 md:px-20 flex flex-col">
      <h1 className="text-3xl font-bold text-center pb-2 relative inline-block">
        <span className="relative z-10 text-black">Mes Services</span>
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

/* =========================
   Helpers typés (no any)
   ========================= */
function isPortableBlocks(input: unknown): input is PortableTextBlock[] {
  if (!Array.isArray(input) || input.length === 0) return false;
  const first = input[0] as unknown;
  return typeof first === "object" && first !== null && "_type" in (first as Record<string, unknown>);
}

function makeBlock(text: string, i = 0): PortableTextBlock {
  return {
    _type: "block",
    _key: `p-${i}`,
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: `s-${i}`,
        text,
      },
    ],
  };
}

function toBlocks(desc: ServiceType["description"]): PortableTextBlock[] {
  if (!desc) return [];
  if (isPortableBlocks(desc)) return desc;
  if (Array.isArray(desc)) {
    return desc.map((t, i) => makeBlock(String(t), i));
  }
  return [makeBlock(String(desc), 0)];
}

/* =========================
   PortableText components (props typées)
   ========================= */
type ImageValue = {
  asset?: { url?: string; _ref?: string };
  alt?: string;
};

const portableComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
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
    h1: ({ children }: { children: ReactNode }) => (
      <h1 className="text-3xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }: { children: ReactNode }) => (
      <h2 className="text-2xl font-semibold mb-3">{children}</h2>
    ),
    h3: ({ children }: { children: ReactNode }) => (
      <h3 className="text-xl font-semibold mb-2">{children}</h3>
    ),
    blockquote: ({ children }: { children: ReactNode }) => (
      <blockquote className="border-l-4 pl-4 italic my-4">{children}</blockquote>
    ),
    normal: ({ children }: { children: ReactNode }) => (
      <p className="mb-3 leading-relaxed">{children}</p>
    ),
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: ReactNode;
      value?: { blank?: boolean; href?: string };
    }) => {
      const target = value?.blank ? "_blank" : undefined;
      const rel = value?.blank ? "noopener noreferrer" : undefined;
      const href = value?.href || "#";
      return (
        <a href={href} target={target} rel={rel} className="underline">
          {children}
        </a>
      );
    },
    strong: ({ children }: { children: ReactNode }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: { children: ReactNode }) => <em className="italic">{children}</em>,
    code: ({ children }: { children: ReactNode }) => (
      <code className="px-1 py-0.5 rounded bg-black/5">{children}</code>
    ),
  },
};

function ServiceCard({ service }: { service: ServiceType }) {
  const imageUrl = service.image
    ? urlFor(service.image).width(800).height(400).fit("max").url()
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

      {/* Description en PortableText (toujours des blocks) */}
      <div className="text-sm text-red-500 leading-snug">
        <PortableText components={portableComponents} value={toBlocks(service.description)} />
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
