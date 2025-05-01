// scripts/build-cache.js
import path from 'path';
import fs from 'fs/promises';
import sharp from 'sharp';
import { getPlaiceholder } from 'plaiceholder';

function filterHiddenFiles(files) {
  return files.filter(file => !file.startsWith('.'));
}

async function processImagesInFolder(folderPath, baseFolder) {
  const cache = {};
  const files = filterHiddenFiles(await fs.readdir(folderPath));

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const stats = await fs.stat(filePath);
    if (stats.isDirectory()) continue;

    try {
      const { width, height } = await sharp(filePath).metadata();
      const { base64 } = await getPlaiceholder(filePath);

      const relativePath = path.relative(baseFolder, filePath).replace(/\\/g, '/');
      cache[relativePath] = {
        src: `/images/portfolio/${relativePath}`,
        width,
        height,
        isLandscape: width > height,
        blurURL: base64,
      };
    } catch (err) {
      console.error(`❌ Error processing image: ${filePath}`, err);
    }
  }

  return cache;
}

async function generatePerFolderCaches() {
  const baseFolder = path.join(process.cwd(), 'public/images/portfolio');
  const outputBase = path.join(process.cwd(), 'public/cache');

  const topLevelDirs = filterHiddenFiles(await fs.readdir(baseFolder));

  for (const outerDir of topLevelDirs) {
    const outerDirPath = path.join(baseFolder, outerDir);
    const outerStats = await fs.stat(outerDirPath);
    if (!outerStats.isDirectory()) continue;

    const subDirs = filterHiddenFiles(await fs.readdir(outerDirPath));
    for (const innerDir of subDirs) {
      const innerDirPath = path.join(outerDirPath, innerDir);
      const innerStats = await fs.stat(innerDirPath);
      if (!innerStats.isDirectory()) continue;

      const cache = await processImagesInFolder(innerDirPath, baseFolder);

      const outputDir = path.join(outputBase, outerDir);
      await fs.mkdir(outputDir, { recursive: true });

      const outputPath = path.join(outputDir, `${innerDir}.json`);
      await fs.writeFile(outputPath, JSON.stringify(cache, null, 2));

      console.log(`✅ Cache written: ${outputPath}`);
    }
  }
}

generatePerFolderCaches().catch(console.error);
