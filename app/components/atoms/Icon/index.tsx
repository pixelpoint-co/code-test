import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { twMerge } from '~/utils/twMerge'
import Logo from './icons/logo.svg?react'
import SymbolLogo from './icons/logo-symbol.svg?react'
import WordMarkLogo from './icons/logo-wordmark.svg?react'
import WordMarkDotlessLogo from './icons/logo-wordmark-dotless.svg?react'

const ReactIcons = {
  wmLogo: WordMarkLogo,
  wmDotlessLogo: WordMarkDotlessLogo,
  logo: Logo,
  symbolLogo: SymbolLogo,
}

interface IconProps extends React.ComponentProps<'svg'> {
  icon: string
  width: number | string
  height: number | string
  size: number | string
  className?: string
  alt: string
}

const Icon = (props: IconProps) => {
  const { icon, width, size, className, ...others } = props
  const ReactIcon = ReactIcons[icon]
  console.log(ReactIcon)
  console.log(className)
  console.log(
    clsx(`tw-w-[${width || size || 24}px]`, 'tw-inline-block ' + 'tw-h-full'),
    className,
  )
  return (
    <span
      className={twMerge(
        clsx(`tw-w-[${width || size || 24}px]`, 'tw-inline-block', 'tw-h-full'),
        className,
      )}
    >
      {ReactIcon && (
        <ReactIcon
          className="tw-h-full tw-w-full tw-fill-current"
          {...others}
        />
      )}
    </span>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rotateDeg: PropTypes.number,
}

Icon.defaultProps = {
  height: 24,
  width: 24,
  size: null,
  rotateDeg: 0,
}

export default Icon
