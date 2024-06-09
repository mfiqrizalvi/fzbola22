import dynamic from "next/dynamic"

const NotFoundPage = dynamic(() => import("@/components/Layout/NotFound"))

export default function NotFound() {
  return (
    <>
      <NotFoundPage/>
    </>
  )
}