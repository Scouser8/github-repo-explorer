import { Box } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <ToastContainer />
      <Header />
      <Box component="main" className="p-8">
        {children}
      </Box>
      <Footer />
    </>
  );
}
