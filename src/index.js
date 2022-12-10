import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { Albams } from './components/Albams';
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
            <Route path={`/albams`} element={<Albams />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </MantineProvider>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
