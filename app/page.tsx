import Image from 'next/image';
import Offers from './Offers';
import Recommendations from './Recommendations';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="p-24">
      <Suspense fallback={<span>Loading offers</span>}>
        <Offers />
      </Suspense>

      <Suspense fallback={<span>Loading recommendations</span>}>
        <Recommendations />
      </Suspense>
    </main>
  );
}
