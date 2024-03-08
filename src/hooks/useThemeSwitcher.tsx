import { useEffect, useState, Dispatch, SetStateAction } from 'react';

type Theme = 'light' | 'dark';

const useThemeSwitcher = (): [Theme, Dispatch<SetStateAction<Theme>>] => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme;

    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);

    // if (typeof window !== 'undefined') {
    //   localStorage.setItem('theme', theme);
    // }
  }, [theme]);

  return [theme === 'dark' ? 'light' : 'dark', setTheme];
};

export default useThemeSwitcher;
