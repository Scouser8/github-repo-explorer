import { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { SearchPage } from "./components/SearchPage/SearchPage";
import axios from "./axios";

function App() {
  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        const accessToken = import.meta.env.VITE_GITHUB_API_TOKEN;
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`; // set in header
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }, []);
  return (
    <Layout>
      <SearchPage />
    </Layout>
  );
}

export default App;
