import React from 'react'

type ImageComponentsProps = {
    src: string,
  alt?:string,
  width?: number | string,
  height?: number | string,
  className?: string,
style?:React.CSSProperties,
fallbackSrc?:string,
loading?: "lazy" | "eager"
}
const ImageComponent:React.FC<ImageComponentsProps> = ({
  src,
  alt,
  width,
  height,
  className,
  style,
  loading
}) => {
  return (
   <img src={src} 
   alt={alt}
   width={width}
    height={height}
    className={className}
    style={style}
    loading={loading}
    // onError={()=> setImgSrc(fallbackSrc)}
   />
  )
}

export default ImageComponent