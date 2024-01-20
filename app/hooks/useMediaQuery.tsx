import { useMediaQuery } from 'react-responsive'

type mediaKey = 'desktop' | 'laptop' | 'mobile'

type mediaMapper = {
  [key in mediaKey]: any
}
interface MediaQueryMapper {
  [key: string]: mediaMapper
}
const useMediaQueryMap = (mapper: MediaQueryMapper) => {
  const isTablet = useMediaQuery({
    query: '(min-width: 700px)',
  })
  const isLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  })
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  })
  const key = isDesktop
    ? 'desktop'
    : isLaptop
      ? 'laptop'
      : isTablet
        ? 'tablet'
        : 'mobile'
  const propertyKeys = Object.keys(mapper)
  return propertyKeys.map(propKey => mapper[propKey][key])
  return mapper[key]
}

export default useMediaQueryMap
