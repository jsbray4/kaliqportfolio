// /portfolio/thecinematiccut/layout.js

import Carousel from '@/app/components/Carousel';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Carousel portfolioName="loveinfocus" />
      <div>{children}</div>
    </div>
  );
}
