export default function PricingPage() {
  return (
    <main className="bg-white p-6 max-w-4xl mx-auto font-tinos text-neutral-800">
      {/* <h1 className="text-5xl font-extrabold mb-10 text-center">Kaliq Lowe Photography</h1> */}
      <h2 className="text-5xl font-extrabold mb-12 text-center">Pricing Guide</h2>

      {/* Outdoor Portraits */}
      <section className="mb-16">
        <h3 className="text-4xl font-bold mb-4 border-b pb-2">Outdoor Portrait Sessions</h3>
        <p className="text-xl mb-6 italic text-xl">Perfect for individuals, couples, graduates, and families.</p>

        <div className="mb-8">
          <h4 className="text-3xl font-semibold mb-2">Standard Portrait Session - <span className="text-xl font-normal">$250</span></h4>
          <ul className="list-disc pl-6 text-base space-y-1 font-tinos text-xl">
            <li>1 hour on-location shoot</li>
            <li>2 outfit changes</li>
            <li>Includes a pre-shoot consultation</li>
          </ul>
        </div>

        <div>
          <h4 className="text-3xl font-semibold mb-2">Mini Portrait Session – <span className="text-xl font-normal">$150</span></h4>
          <ul className="list-disc pl-6 text-base space-y-1 text-xl">
            <li>30 minute session</li>
            <li>10 edited images</li>
          </ul>
        </div>
      </section>

      {/* Studio Portraits */}
      <section className="mb-16">
        <h3 className="text-4xl font-bold mb-4 border-b pb-2">Studio Portraits</h3>
        <p className="text-xl mb-6 italic text-xl">Polished looks with controlled lighting and curated backdrops.</p>

        <div className="mb-8">
          <h4 className="text-3xl font-semibold mb-2">Headshot Session – <span className="text-xl font-normal">$300</span></h4>
          <ul className="list-disc pl-6 text-base space-y-1 text-xl">
            <li>45 minute session in studio</li>
            <li>2 outfit changes</li>
            <li>Includes a pre-shoot consultation</li>
          </ul>
        </div>

        <div>
          <h4 className="text-3xl font-semibold mb-2">Creative Studio Portraits – <span className="text-xl font-normal">$450</span></h4>
          <ul className="list-disc pl-6 text-base space-y-1 text-xl">
            <li>1–2 hour concept session</li>
            <li>Includes styling consult</li>
            <li>High-end edits, studio setup, and creative direction</li>
          </ul>
        </div>
      </section>

      {/* Weddings */}
      <section className="mb-16">
        <h3 className="text-4xl font-bold mb-4 border-b pb-2">Weddings</h3>
        <p className="text-xl mb-6 italic text-xl">Authentic, timeless coverage of your special day.</p>

        <div className="mb-8">
          <h4 className="text-3xl font-semibold mb-2">Intimate Package – <span className="text-xl font-normal">$1200</span></h4>
          <ul className="list-disc pl-6 text-base space-y-1 text-xl">
            <li>4 hours of coverage</li>
            <li>1 photographer</li>
            <li>200+ edited images</li>
          </ul>
        </div>

        <div>
          <h4 className="text-3xl font-semibold mb-2">Full-Day Package – <span className="text-xl font-normal">$2500</span></h4>
          <ul className="list-disc pl-6 text-base space-y-1 text-xl">
            <li>8–10 hours of coverage</li>
            <li>Pre-wedding consultation</li>
            <li>500+ edited photos on USB drive</li>
            <li>Online gallery + print release</li>
          </ul>
        </div>

        <p className="mt-6 text-base font-medium text-xl">Custom packages available on request.</p>
      </section>
    </main>
  );
}
