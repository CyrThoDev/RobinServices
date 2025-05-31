export const Realisations = `*[_type == "realisations"]{
  _id,
  titre,
  alt,
  categorie,
  "imageUrl": image.asset->url,
  image
}`;
