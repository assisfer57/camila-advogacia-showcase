import heroAsset from "@/assets/camila-hero-new.png.asset.json";
import gridAsset from "@/assets/camila-grid-new.png.asset.json";

export const IMAGES = {
  // Main portrait (Photo 1 - single)
  hero: heroAsset.url,
  
  // The grid image has 5 photos. 
  // We can use the same URL for different sections and apply object-position 
  // to highlight different parts of the original grid image if we can't crop.
  // However, since we want "high quality", using the same high-res source 
  // with clever CSS cropping (object-position) is a good strategy to keep quality 
  // without multiple tiny files.
  
  // Suggested mapping from the 5-photo grid:
  // Top (big laptop): Main context
  // Bottom-left (sofa): Humanized / About
  // Bottom-right (office): Professional / Areas
  // Middle-left (white wall): Clean / Mission
  // Middle-right (city view): Modern / Contact
  
  grid: gridAsset.url,
};
