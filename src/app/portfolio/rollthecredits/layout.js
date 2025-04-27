// /portfolio/thecinematiccut/layout.js

import Carousel from '@/app/components/Carousel';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Carousel portfolioName="rollthecredits" />
      <div>{children}</div>
    </div>
  );
}
