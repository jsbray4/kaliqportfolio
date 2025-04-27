// scripts/build-cache.js
import path from 'path';
import fs from 'fs/promises';
import sharp from 'sharp';
import { getPlaiceholder } from "plaiceholder";

const cacheFile = path.join(process.cwd(), 'public/cache/portfolio.json');

// Helper function to filter out hidden files (files starting with '.')
function filterHiddenFiles(files) {
  return files.filter(file => !file.startsWith('.'));
}

// Recursively process files in directories
async function processDirectory(dirPath, cache, baseFolder) {
  // Get the files and subdirectories in the current directory
  const files = await fs.readdir(dirPath);
  const validFiles = filterHiddenFiles(files);

  // Loop over the files and process them
  for (const file of validFiles) {
    const filePath = path.join(dirPath, file);
    const stats = await fs.stat(filePath);

    if (stats.isDirectory()) {
      // If the item is a directory, recursively process it
      await processDirectory(filePath, cache, baseFolder);
    } else {
      // If the item is a file, process it
      try {
        const { width, height } = await sharp(filePath).metadata();
        const { base64 } = await getPlaiceholder(filePath);

        // Construct the relative file path and store the image data in the cache
        const relativePath = path.relative(baseFolder, filePath);
        const cacheKey = relativePath.replace(/\\/g, '/'); // Use forward slashes for consistency
        cache[cacheKey] = {
          src: `/images/portfolio/${cacheKey}`,
          width,
          height,
          isLandscape: width > height,
          blurURL: base64,
        };
      } catch (err) {
        console.error(`Error processing image: ${filePath}`, err);
      }
    }
  }
}

async function generateCache() {
  const baseFolder = path.join(process.cwd(), 'public/images/portfolio');
  
  let cache = {};

  // Start processing the base folder
  await processDirectory(baseFolder, cache, baseFolder);

  // Write the generated cache to a file
  await fs.writeFile(cacheFile, JSON.stringify(cache, null, 2));
  console.log("✅ Portfolio cache built successfully.");
}

generateCache().catch(console.error);
