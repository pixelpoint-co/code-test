import {
  Link,
  Outlet,
} from '@remix-run/react'
import clsx from 'clsx'
export default function Index() {
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
          to="/basecamp"
          className={clsx(
            'inline-flex',
            'mix-blend-none',
          )}
          aria-label="Home"
        >
          베이스
          캠프!
        </Link>
      </header>
      <Outlet />

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
            푸터!
          </span>
        </div>
      </footer>
    </div>
  )
}
