"use client";

import { CardGallery } from "@/components/List/CardGallery";
import StarBackground from "@/components/StarBackground";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <StarBackground />
      <CardGallery />
      <ToastContainer />
    </>
  );
}
