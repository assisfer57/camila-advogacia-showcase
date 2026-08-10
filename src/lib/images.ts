import heroAsset from "@/assets/camila-hero-new.png.asset.json";
import gridAsset from "@/assets/camila-grid-v2.png.asset.json";
import officeAsset from "@/assets/camila-office-shelf.png.asset.json";

export const IMAGES = {
  // Main portrait (Photo 1 - single)
  hero: heroAsset.url,
  
  // The grid image has 5 photos of Camila.
  // We use CSS object-position to "crop" and show different photos from the same high-res source.
  grid: gridAsset.url,

  // New office photo
  office: officeAsset.url,
};
