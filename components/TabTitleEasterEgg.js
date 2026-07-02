import { useEffect } from 'react';

const AWAY_TITLE = 'no, come back!';

export default function TabTitleEasterEgg() {
  useEffect(() => {
    let savedTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        savedTitle = document.title;
        document.title = AWAY_TITLE;
        return;
      }

      document.title = savedTitle;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return null;
}
