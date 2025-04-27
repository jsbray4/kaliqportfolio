// Your Gallery component
import path from 'path';
import fs from 'fs/promises';
import RenderImage from "@/app/components/RenderImage"

const cacheFile = path.join(process.cwd(), 'public/cache/portfolio.json');

async function loadCache() {
  const data = await fs.readFile(cacheFile, 'utf8');
  return JSON.parse(data);
}

export default async function Gallery({ folderName }) {
  let cache;

  try {
    cache = await loadCache();
  } catch (error) {
    console.error("Error loading cache:", error);
    return <p>Error loading images.</p>;
  }

  const folderImages = Object.entries(cache)
    .filter(([key]) => key.startsWith(`${folderName}/`))
    .map(([, value]) => value);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 bg-white grid-auto-flow-dense">
      {folderImages.map((image, index) => (
        <div key={index} className={`relative ${image.isLandscape ? 'col-span-2' : ''}`}>
          <RenderImage
            src={image.src}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full top-0 left-0 object-cover"
            width={image.width}
            height={image.height}
          />
        </div>
      ))}
    </div>
  );
}
