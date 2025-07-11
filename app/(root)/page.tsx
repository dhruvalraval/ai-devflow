import {auth, signOut} from '@/auth'
import {Button} from '@/components/ui/button'
import ROUTES from '@/constants/routes'

const Home = async () => {
  const session = await auth()

  return (
    <div>
      <h1 className='text-4xl font-bold'>{session?.user?.name} OKAY</h1>
      <h2 className='text-2xl font-semibold font-space-grotesk'>THIS IS font-space-grotesk</h2>
      <form
        className='pt-[100px] px-10'
        action={async () => {
          'use server'
          await signOut({redirectTo: ROUTES.SIGN_IN})
        }}>
        <Button type='submit'>Log out</Button>
      </form>
    </div>
  )
}

export default Home
