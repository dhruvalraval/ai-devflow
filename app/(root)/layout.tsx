import Navbar from '@/components/navigation/navbar'

const RootLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
export default RootLayout
