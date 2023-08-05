export const metadata = {
  title: '4U',
  description: 'Page description',
}

import Head from "next/head";
import Main from "@/components/home/Main";
import Newsletter from '@/components/product/newsletter'

export default function Home() {
  return (
    <>
      <Main />
      <Newsletter />
    </>
  )
}
