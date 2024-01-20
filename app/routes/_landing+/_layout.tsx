import { useMediaQuery } from 'react-responsive'
import { Link, NavLink, Outlet, useLocation } from '@remix-run/react'
import clsx from 'clsx'
import Divider from '~/components/atoms/Divider'
import Icon from '~/components/atoms/Icon'
export default function Index() {
  const isTablet = useMediaQuery({
    query: `(min-width: 700px)`,
  })

  const location = useLocation()
  const isRoot = location.pathname === '/'
  return (
    <div className="tw-flex tw-min-h-full tw-flex-col">
      <header
        className={clsx(
          'tw-sticky',
          'tw-top-0',
          'tw-z-50',
          'tw-w-full',
          'tw-font-medium',
          // 'tw-mix-blend-difference',
          // 'tw-border-b',
          // 'tw-border-border/40',
          'tw-bg-transparent',
          // 'tw-supports-[backdrop-filter]:bg-background/60',
          'tw-p-3',
          'tw-px-4',
          'tw-text-xl',
          'tw-flex-row',
          'tw-flex',
          'tw-justify-between',

          'laptop:tw-p-5',
          'laptop:tw-px-14',
        )}
      >
        <Link
          to="/"
          className={clsx('tw-inline-flex', 'tw-mix-blend-none')}
          aria-label="Home"
        >
          <Icon
            icon="symbolLogo"
            alt="Pixel Point logo"
            className={clsx(
              'tw-w-10',
              'laptop:tw-w-15',
              'tw-h-auto',
              'tw-text-primary',
            )}
          />
        </Link>
        <ul className="tw-flex tw-gap-8 tw-self-center">
          <li className="">
            <NavLink
              to="/service"
              className={({ isActive }) =>
                clsx(
                  'tw-text-lg',
                  'laptop:tw-text-2xl',
                  'hover:tw-underline',
                  'active:tw-underline',
                  isActive ? 'tw-underline' : null,
                )
              }
            >
              Service
            </NavLink>
          </li>
          <li>
            <Link
              to="https://wkf.ms/3SajXnQ"
              className={clsx(
                'tw-text-lg',
                'laptop:tw-text-2xl',
                'hover:tw-underline',
              )}
              target="_blank"
            >
              Contact
            </Link>
          </li>
        </ul>
      </header>
      <Outlet />
      {!isRoot ? (
        <div className={clsx('laptop:tw-px-14 tw-px-5')}>
          <Divider className={clsx('tw-bg-black')} verticalMargin={20} />
          <footer className={clsx('tw-pt-5')}>
            <div>
              <span className={clsx('tw-text-base', 'laptop:tw-text-xl')}>
                Let’s create something together.
              </span>
            </div>
            <div className={clsx('tw-mt-2', 'laptop:tw-mt-5')}>
              <Link
                to="mailto:hello@pixelpoint.co"
                className={clsx(
                  'tw-text-3xl',
                  'tw-font-medium',
                  'hover:tw-underline',
                  'laptop:tw-text-7xl',
                )}
              >
                hello@pixelpoint.co
              </Link>
            </div>
            <Icon
              icon={isTablet ? 'wmLogo' : 'logo'}
              alt="Pixel Point Wordmark Logo"
              className="tw-mt-60 tw-block tw-w-full tw-text-primary"
            />
          </footer>
        </div>
      ) : null}
    </div>
  )
}
