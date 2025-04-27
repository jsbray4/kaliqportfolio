import Gallery from "@/app/components/Gallery";

export default async function PortfolioFolderPage({ params }) {
  const { folderName } = await params;

  return (
    <div>
      <Gallery folderName={`loveinfocus/${folderName}`} />
    </div>
  );
}
