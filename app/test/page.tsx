export const metadata = {
  title: '4U',
  description: 'Page description',
}

import Hero from '@/components/product/hero'
import Features from '@/components/product/features'
import Newsletter from '@/components/product/newsletter'
import Zigzag from '@/components/product/zigzag'
import Testimonials from '@/components/product/testimonials'
import SideBar from '@/components/ui/sidebar'
export default function Product() {
  return (
    <>
      {/*<SideBar />*/}
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
