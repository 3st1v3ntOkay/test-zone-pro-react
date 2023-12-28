import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from './routes';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
