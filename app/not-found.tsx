import dynamic from "next/dynamic"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - FZBOLA22",
};

const NotFoundPage = dynamic(() => import("@/components/Layout/NotFound"))

export default function NotFound() {
  return (
    <>
      <NotFoundPage/>
    </>
  )
}