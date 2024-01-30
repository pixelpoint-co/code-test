import { useMediaQuery } from 'react-responsive'
import type { MetaFunction } from '@remix-run/node'
import {
  NavLink,
  Outlet,
} from '@remix-run/react'
import clsx from 'clsx'
import ogSrc from '~/assets/images/logo-og.png'
import Icon from '~/components/atoms/Icon'

export const meta: MetaFunction =
  ({
    location,
  }) => {
    const {
      pathname,
    } = location
    return [
      {
        title:
          'Pixel Point: Cloud-first software product development agency',
      },
      {
        name: 'description',
        content:
          'Pixel Point builds for a better experience, a robust product, and a smooth operation. It provides cloud-first infrastructure for business owners to start shipping products with world-class standards.',
      },
      {
        property:
          'og:title',
        content:
          'Pixel Point: Cloud-first software product development agency',
      },
      {
        property:
          'og:description',
        content:
          'Pixel Point builds for a better experience, a robust product, and a smooth operation. It provides cloud-first infrastructure for business owners to start shipping products with world-class standards.',
      },
      {
        property:
          'og:url',
        content: `https//www.pixelpoint.co${pathname}`,
      },
      {
        property:
          'og:image',
        content:
          ogSrc,
      },
    ]
  }
export default function Index() {
  const isTablet =
    useMediaQuery({
      query: `(min-width: 700px)`,
    })
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <div className="laptop:px-14 flex flex-1 flex-col px-5">
        <h1
          className={clsx(
            'mt-18',
            'text-5.5xl',
            'font-bold',

            'tablet:mt-24',
            'tablet:text-6xl',

            'laptop:mt-15',
            'laptop:text-9xl',
          )}
        >
          A Better
          Experience.
        </h1>
        <ul className="mt-15 laptop:gap-8 flex flex-col gap-5">
          <li>
            <NavLink
              to="/service"
              className={({
                isActive,
              }) =>
                clsx(
                  'text-2xl',
                  'laptop:text-4xl',
                  'hover:underline',
                  'active:underline',
                  isActive
                    ? 'underline'
                    : null,
                )
              }
            >
              Explore
              Our
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://wkf.ms/3SajXnQ"
              target="_blank"
              className={clsx(
                'text-2xl',
                'laptop:text-4xl',
                'hover:underline',
                'active:underline',
              )}
            >
              Let's
              Chat
            </NavLink>
          </li>
        </ul>
        <div className="mt-auto w-full overflow-hidden">
          <Icon
            icon={
              isTablet
                ? 'wmLogo'
                : 'logo'
            }
            alt="Pixel Point Wordmark Logo"
            className="block w-full text-gray-100/50"
          />
        </div>
      </div>
    </div>
  )
}

// orange-400
// ==
// orange-primary

// brand-primary
// brand-secondary

// bg-red: #fcfcfc
// bg-gray: #fcfcfc
// bg-gray: #fcfcfc

// blue-50 - 950
// orange-50 - 950
// gray 50 - 950
