import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { twMerge } from '~/utils/twMerge'
import Logo from './icons/logo.svg?react'
import SymbolLogo from './icons/logo-symbol.svg?react'
import WordMarkLogo from './icons/logo-wordmark.svg?react'
import WordMarkDotlessLogo from './icons/logo-wordmark-dotless.svg?react'

const ReactIcons = {
  wmLogo:
    WordMarkLogo,
  wmDotlessLogo:
    WordMarkDotlessLogo,
  logo: Logo,
  symbolLogo:
    SymbolLogo,
}

interface IconProps
  extends React.ComponentProps<'svg'> {
  icon: string
  width:
    | number
    | string
  height:
    | number
    | string
  size:
    | number
    | string
  className?: string
  alt: string
}

const Icon = (
  props: IconProps,
) => {
  const {
    icon = '',
    width = 24,
    size = null,
    className,
    ...others
  } = props
  const ReactIcon =
    ReactIcons[icon]
  console.log(icon)
  return (
    <span
      className={twMerge(
        clsx(
          `w-[${
            width ||
            size ||
            24
          }px]`,
          'inline-block',
          'h-full',
        ),
        className,
      )}
    >
      {ReactIcon && (
        <ReactIcon
          className="h-full w-full fill-current"
          {...others}
        />
      )}
    </span>
  )
}

Icon.propTypes = {
  icon: PropTypes
    .string
    .isRequired,
  height:
    PropTypes.oneOfType(
      [
        PropTypes.number,
        PropTypes.string,
      ],
    ),
  width:
    PropTypes.oneOfType(
      [
        PropTypes.number,
        PropTypes.string,
      ],
    ),
  size: PropTypes.oneOfType(
    [
      PropTypes.number,
      PropTypes.string,
    ],
  ),
}

export default Icon
