import {auth} from '@/auth'

const Home = async () => {
  const session = await auth()

  return (
    <div>
      <h1 className='text-4xl font-bold'>{session?.user?.name} OKAY</h1>
      <h2 className='text-2xl font-semibold font-space-grotesk'>THIS IS font-space-grotesk</h2>
    </div>
  )
}

export default Home
