import { useMediaQuery } from 'react-responsive'
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
} from '@remix-run/react'
import clsx from 'clsx'
import Divider from '~/components/atoms/Divider'
import Icon from '~/components/atoms/Icon'
export default function Index() {
  const isTablet =
    useMediaQuery({
      query: `(min-width: 700px)`,
    })

  const location =
    useLocation()
  const isRoot =
    location.pathname ===
    '/'
  return (
    <div className="flex min-h-full flex-col">
      <header
        className={clsx(
          'sticky',
          'top-0',
          'z-50',
          'w-full',
          'font-medium',
          // 'mix-blend-difference',
          // 'border-b',
          // 'border-border/40',
          'bg-transparent',
          // 'supports-[backdrop-filter]:bg-background/60',
          'p-3',
          'px-4',
          'text-xl',
          'flex-row',
          'flex',
          'justify-between',

          'laptop:p-5',
          'laptop:px-14',
        )}
      >
        <Link
          to="/"
          className={clsx(
            'inline-flex',
            'mix-blend-none',
          )}
          aria-label="Home"
        >
          <Icon
            icon="symbolLogo"
            alt="Pixel Point logo"
            className={clsx(
              'w-10',
              'laptop:w-15',
              'h-auto',
              'text-primary',
            )}
          />
        </Link>
        <ul className="flex gap-8 self-center">
          <li className="">
            <NavLink
              to="/service"
              className={({
                isActive,
              }) =>
                clsx(
                  'text-lg',
                  'laptop:text-2xl',
                  'hover:underline',
                  'active:underline',
                  isActive
                    ? 'underline'
                    : null,
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
                'text-lg',
                'laptop:text-2xl',
                'hover:underline',
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
        <div
          className={clsx(
            'laptop:px-14 px-5',
          )}
        >
          <Divider
            className={clsx(
              'bg-black',
            )}
            verticalMargin={
              20
            }
          />
          <footer
            className={clsx(
              'pt-5',
            )}
          >
            <div>
              <span
                className={clsx(
                  'text-base',
                  'laptop:text-xl',
                )}
              >
                Let’s
                create
                something
                together.
              </span>
            </div>
            <div
              className={clsx(
                'mt-2',
                'laptop:mt-5',
              )}
            >
              <Link
                to="mailto:hello@pixelpoint.co"
                className={clsx(
                  'text-3xl',
                  'font-medium',
                  'hover:underline',
                  'laptop:text-7xl',
                )}
              >
                hello@pixelpoint.co
              </Link>
            </div>
            <Icon
              icon={
                isTablet
                  ? 'wmLogo'
                  : 'logo'
              }
              alt="Pixel Point Wordmark Logo"
              className="mt-60 block w-full text-primary"
            />
          </footer>
        </div>
      ) : null}
    </div>
  )
}
