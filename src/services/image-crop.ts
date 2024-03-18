import noImagePlaceholder from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppendImageUrl = (url: string) => {
  if (!url) return noImagePlaceholder;
  return url.replace("media/games", "media/crop/600/400/games");
};

export default getCroppendImageUrl;
