import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { twMerge } from '~/utils/twMerge'

const Divider = props => {
  const {
    className,
    verticalMargin,
    horizontalMargin,
    size,
    width,
    direction,
  } = props
  return (
    <div
      className={twMerge(
        clsx(
          `tw-mx-[${horizontalMargin}px]`,
          `tw-my-[${verticalMargin}px]`,
          '',
        ),
        className,
      )}
      style={{
        margin: `${verticalMargin}px ${horizontalMargin}px`,
        ...(direction === 'horizontal'
          ? {
              height: width,
              minHeight: width,
              width: size,
              minWidth: size,
            }
          : {
              width,
              minWidth: width,
              minHeight: size,
              height: size,
            }),
      }}
    />
  )
}

Divider.defaultProps = {
  verticalMargin: 0,
  horizontalMargin: 0,
  size: '100%',
  width: 2,
  direction: 'horizontal',
}

Divider.propTypes = {
  verticalMargin: PropTypes.number,
  horizontalMargin: PropTypes.number,
  size: PropTypes.number,
  width: PropTypes.number,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
}

export default React.memo(Divider)