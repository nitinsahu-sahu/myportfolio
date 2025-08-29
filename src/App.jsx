import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navigation from './components/navigation';
import FadeIn from './components/fadeIn';
import Main from './components/main';
import Expertise from './components/expertise';

function App() {
  const [mode, setMode] = useState('dark');

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // Create Material-UI theme based on current mode
  const theme = createTheme({
    palette: {
      mode: mode,
      ...(mode === 'light'
        ? {
          // Light mode palette
          primary: {
            main: '#3b82f6', // Tailwind blue-500
          },
          background: {
            default: '#f3f4f6', // Tailwind gray-100
            paper: '#ffffff', // White
          },
          text: {
            primary: '#1f2937', // Tailwind gray-800
          },
        }
        : {
          // Dark mode palette
          primary: {
            main: '#60a5fa', // Tailwind blue-400
          },
          background: {
            default: '#111827', // Tailwind gray-900
            paper: '#1f2937', // Tailwind gray-800
          },
          text: {
            primary: '#f9fafb', // Tailwind gray-50
          },
        }),
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={`min-h-screen transition-colors duration-300 ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />

        {/* Placeholder for your components */}
        <div className="container mx-auto px-4">
          <FadeIn transitionDuration={700}>
            <Main parentToChild={{ mode }}/>
            <Expertise parentToChild={{ mode }}/>
            {/* <Expertise />
            <Timeline />
            <Project />
            <Contact /> */}
          </FadeIn>

          <div className="text-center py-20">
            <h1 className={`text-4xl font-bold mb-4 ${mode === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              Your Content Here
            </h1>
            <p className={`text-lg ${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Add your components (Main, Expertise, Timeline, Project, Contact) here.
            </p>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;