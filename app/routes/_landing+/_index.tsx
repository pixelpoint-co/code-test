import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { TypeAnimation } from 'react-type-animation'
import type { MetaFunction } from '@remix-run/node'
import {
  NavLink,
  Outlet,
} from '@remix-run/react'
import clsx from 'clsx'
import ogSrc from '~/assets/images/logo-og.png'
import Icon from '~/components/atoms/Icon'
console.log(
  React.version,
)
export const meta: MetaFunction =
  ({
    location,
  }) => {
   return []
  }
export default function Index() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      hello!
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
