import Gallery from "@/app/components/Gallery";

// This function generates the static paths for the dynamic route
export async function generateStaticParams() {
  // Replace with your logic to fetch the available folder names
  const folderNames = ['jacob', 'jeremy', 'prom']; // Example folders
  
  return folderNames.map(folderName => ({
    folderName,
  }));
}

export default async function PortfolioFolderPage({ params }) {
  const { folderName } = await params;

  return (
    <div>
      <Gallery folderName={`rollthecredits/${folderName}`} />
    </div>
  );
}