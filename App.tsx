import React from 'react';
import Routes from '@routes/index.routes';
import GlobalProvider from '@hooks/index';

export default function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}


