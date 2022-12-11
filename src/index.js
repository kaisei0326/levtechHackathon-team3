import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { Groups } from './components/Groups';
import { Albams } from './components/Albams';
import { Photos } from './components/Photos';
import { Home } from './components/Home';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/signin`} element={<SignIn />} />
            <Route path={`/signup`} element={<SignUp />} />
            <Route path={`/groups`} element={<Groups />} />
            <Route path={`/albams`} element={<Albams />} />
            <Route path={`/photos`} element={<Photos />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </MantineProvider>
    </CookiesProvider>
  </React.StrictMode>
);
reportWebVitals();
