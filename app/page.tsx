import fs from "fs";
import path from "path";

import Home from "@/components/home";
import type { GalleryImage } from "@/components/ui/image-stack-gallery";
import { newsItems, products } from "@/content/profile";

function imagesIn(
  section: string,
  folder: string,
  label: string,
): GalleryImage[] {
  const dir = path.join(process.cwd(), "public", section, folder);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => /\.(png|jpe?g|webp|gif)$/i.test(file))
    .sort()
    .map((file, index) => ({
      src: `/${section}/${folder}/${file}`,
      alt: `${label} photo ${index + 1}`,
      caption: label,
    }));
}

export default function Page() {
  const newsImages = Object.fromEntries(
    newsItems.map((item) => [
      item.imageFolder,
      imagesIn("news", item.imageFolder, item.title),
    ]),
  );
  const productImages = Object.fromEntries(
    products.map((product) => [
      product.imageFolder,
      imagesIn("products", product.imageFolder, product.name),
    ]),
  );

  return <Home newsImages={newsImages} productImages={productImages} />;
}
