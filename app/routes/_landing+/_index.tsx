import { useMediaQuery } from 'react-responsive'
import type { MetaFunction } from '@remix-run/node'
import { NavLink, Outlet } from '@remix-run/react'
import clsx from 'clsx'
import Icon from '~/components/atoms/Icon'
import logoSrc from '~/components/atoms/Icon/icons/logo-wordmark-dotless.svg'

export const meta: MetaFunction = () => {
  return [
    { title: 'Pixel Point' },
    {
      name: 'description',
      content: 'Cloud-first web & mobile product development agency',
    },
  ]
}
export default function Index() {
  const isTablet = useMediaQuery({
    query: `(min-width: 700px)`,
  })
  return (
    <div className="tw-flex tw-min-h-full tw-flex-1 tw-flex-col">
      <div className="laptop:tw-px-14 tw-flex tw-flex-1 tw-flex-col tw-px-5">
        <h1
          className={clsx(
            'tw-mt-18',
            'tw-text-5.5xl',
            'tw-font-bold',

            'tablet:tw-mt-24',
            'tablet:tw-text-6xl',

            'laptop:tw-mt-15',
            'laptop:tw-text-9xl',
          )}
        >
          A Better Experience.
        </h1>
        <ul className="tw-mt-15 laptop:tw-gap-8 tw-flex tw-flex-col tw-gap-5">
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                clsx(
                  'tw-text-2xl',
                  'laptop:tw-text-4xl',
                  'hover:tw-underline',
                  'active:tw-underline',
                  isActive ? 'tw-underline' : null,
                )
              }
            >
              Explore Our Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://wkf.ms/3SajXnQ"
              target="_blank"
              className={clsx(
                'tw-text-2xl',
                'laptop:tw-text-4xl',
                'hover:tw-underline',
                'active:tw-underline',
              )}
            >
              Let's Chat
            </NavLink>
          </li>
        </ul>
        <div className="tw-mt-auto tw-w-full tw-overflow-hidden">
          <Icon
            icon={isTablet ? 'wmLogo' : 'logo'}
            alt="Pixel Point Wordmark Logo"
            className="tw-block tw-w-full tw-text-gray-100/50"
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
