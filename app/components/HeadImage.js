"use client"
import { Image } from '@chakra-ui/react'

const HeadImage = ({src, alt}) => {
  return (
    <>
    <Image src={src} alt={alt}/>
    <p>{alt}</p>
    </>
  )
}

export default HeadImage