import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';

async function loadPortfolioData(portfolioName) {
  try {
    // Dynamically build the path to the specific portfolio's JSON file
    const cacheFile = path.join(process.cwd(), 'public/cache/thumbnails', `${portfolioName}.json`);
    const data = await fs.readFile(cacheFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading portfolio data for ${portfolioName}:`, error);
    return []; // Return empty array if data loading fails
  }
}

export default async function Carousel({ portfolioName }) {
  let portfolioItems;

  try {
    // Load the portfolio data from the cache
    portfolioItems = await loadPortfolioData(portfolioName);
  } catch (error) {
    return <p>Error loading portfolio data.</p>;
  }

  return (
    <div className="bg-gray-100 py-4 shadow-md">
      <div className="flex gap-2 justify-start items-center overflow-x-auto py-2 px-4">
        {portfolioItems.map((item, index) => (
          <Link key={index} href={`/portfolio/${item.folder}`}>
            <div className="relative group cursor-pointer w-[150px] h-[150px]">
              <div className="relative group w-full h-full transform transition-transform duration-300 ease-in-out group-hover:scale-110 aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`object-cover w-full h-full rounded-lg ${item.position ?? "object-center"}`}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gray-200 opacity-90 text-gray-800 text-center p-2 rounded-b-lg text-lg sm:text-lg md:text-lg font-tinos">
                  <span>{item.name}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
