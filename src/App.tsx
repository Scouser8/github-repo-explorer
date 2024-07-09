import { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { SearchPage } from "./components/SearchPage/SearchPage";
import { configureAxiosInterceptors } from "./utils";

function App() {
  useEffect(() => {
    configureAxiosInterceptors();
  }, []);
  return (
    <Layout>
      <SearchPage />
    </Layout>
  );
}

export default App;
