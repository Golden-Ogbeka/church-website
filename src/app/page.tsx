import React, { lazy } from 'react';

const AppBanner = lazy(() => import("./components/AppBanner"));
const Hero = lazy(() => import("./components/Hero"));
const Event = lazy(() => import("./components/Event"));
const Advert = lazy(() => import("./components/Advert"));
const Newsletter = lazy(() => import("./components/Newsletter"));

export default function Home() {
  return (
    <main>
      <AppBanner />
      <Hero />
      <Event />
      <Advert />
      <Newsletter />
    </main>
  );
}
