import Image from "next/image"

const Icons = ({ name, height, width }) => {
  return (
    <Image 
      src={`/icons/${name}.png`}
      height={height}
      width={width}
      alt={name}
    />
  )
}

export default Icons