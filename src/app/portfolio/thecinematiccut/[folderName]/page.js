import Gallery from "@/app/components/Gallery";

// This function generates the static paths for the dynamic route
export async function generateStaticParams() {
  // Replace with your logic to fetch the available folder names
  const folderNames = ['angie', 'careandella', 'christopher', 'elijahandjacob', 'erin', 'evan', 'jesse', 'luis', 'melchor', 'sara', 'seth']; // Example folders
  
  return folderNames.map(folderName => ({
    folderName,
  }));
}

export default async function PortfolioFolderPage({ params }) {
  const { folderName } = await params;

  return (
    <div>
      <Gallery folderName={`thecinematiccut/${folderName}`} />
    </div>
  );
}