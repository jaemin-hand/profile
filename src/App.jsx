import { useEffect, useState } from 'react';
import ThemeModal from './components/Modal/ThemeModal';
import './index.css';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSelect = (selectedTheme) => {
    setTheme(selectedTheme);
    setShowModal(false);
    localStorage.setItem('theme', selectedTheme); // 원하면 주석 해제
  };

  return (
    <>
      <ThemeModal show={showModal} onSelect={handleThemeSelect} />
      {/* 포트폴리오 내용 */}
      <div className="min-h-screen flex items-center justify-center transition bg-white dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          안녕하세요.
        </h1>
      </div>
    </>
  );
}

export default App;
