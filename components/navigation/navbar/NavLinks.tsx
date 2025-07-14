'use client'

import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {Fragment} from 'react'

import {SheetClose} from '@/components/ui/sheet'
import {sidebarLinks} from '@/constants'
import {cn} from '@/lib/utils'

const NavLinks = ({isMobileNav = false}: {isMobileNav?: boolean}) => {
  const pathname = usePathname()
  const userid = 1

  return (
    <>
      {sidebarLinks.map(item => {
        const {imgURL, route, label} = item
        const isActive = route === pathname || (pathname.includes(route) && route.length > 1)

        if (route === '/profile') {
          if (userid) item.route = `${route}/${userid}`
        }

        const LinkComponent = (
          <Link
            href={route}
            className={cn(
              isActive ? 'primary-gradient rounded-lg text-light-900' : 'text-dark300_light900',
              'flex items-center gap-4 p-4 bg-transparent',
            )}
            key={route}>
            <Image
              src={imgURL}
              width={20}
              height={20}
              alt={label}
              className={cn({'inverted-colors': !isActive})}
            />
            <p
              className={cn(
                isActive ? 'base-bold' : 'base-medium',
                !isMobileNav && 'max-lg:hidden',
              )}>
              {label}
            </p>
          </Link>
        )

        return isMobileNav ? (
          <SheetClose asChild key={route}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <Fragment key={route}>{LinkComponent}</Fragment>
        )
      })}
    </>
  )
}
export default NavLinks
