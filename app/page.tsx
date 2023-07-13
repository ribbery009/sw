"use client";

import { CardGallery } from "@/components/List/CardGallery";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {

  return (
    <>
      <CardGallery />
      <ToastContainer />
    </>
  );
}
