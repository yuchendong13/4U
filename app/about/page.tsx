export const metadata = {
  title: '4U',
  description: 'Page description',
}

import Head from "next/head";
import AboutUs from "@/components/about/AboutUs";
import Newsletter from '@/components/product/newsletter'

export default function About() {
  return (
    <>
      <AboutUs />
      <Newsletter />
    </>
  )
}
