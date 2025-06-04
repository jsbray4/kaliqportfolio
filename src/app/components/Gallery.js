// app/components/Gallery.jsx or .tsx (assuming it's a server component)
import path from 'path';
import fs from 'fs/promises';
import RenderImage from '@/app/components/RenderImage';

export default async function Gallery({ folderName }) {
  const cacheFile = path.join(process.cwd(), 'public/cache', `${folderName}.json`);

  let cache;
  try {
    const data = await fs.readFile(cacheFile, 'utf8');
    cache = JSON.parse(data);
  } catch (error) {
    console.error("❌ Error loading cache:", error);
    return <p>Error loading images.</p>;
  }

  const folderImages = Object.entries(cache)
    .filter(([key]) => key.startsWith(`${folderName}/`))
    .map(([, value]) => value);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 grid-auto-flow-dense">
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
