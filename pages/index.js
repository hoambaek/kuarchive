import React from 'react';
import { useRouter } from 'next/router';

export default function NavigationButtons() {
  const router = useRouter();

  const goToPage1 = () => {
    router.push('/NowPlaying');
  };

  const goToPage2 = () => {
    router.push('/1sara');
  };

  return (
    <div>
      <button onClick={goToPage1}>사랑가</button>
      <button onClick={goToPage2}>이별가</button>
    </div>
  );
}
