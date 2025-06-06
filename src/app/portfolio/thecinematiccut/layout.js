// /portfolio/thecinematiccut/layout.js

import Carousel from '@/app/components/Carousel';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Carousel portfolioName="thecinematiccut" />
      <div>{children}</div>
    </div>
  );
}
