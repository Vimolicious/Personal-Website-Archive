import { useState } from 'react';

export default function useResetScroll() {
  const [lastPage, setLastPage] = useState('');

  if (typeof window !== 'undefined') {
    const currentPage = window.location.pathname;

    if (lastPage !== currentPage) {
      window.scrollTo(0, 0);
      setLastPage(currentPage);
    }
  }
}
