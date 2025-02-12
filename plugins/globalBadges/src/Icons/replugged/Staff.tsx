import { findByProps } from "@vendetta/metro";
const { SvgXml } = findByProps("Circle", "Rect", "Shape")

const staff = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4m3.08 15L12 14.15L8.93 16l.81-3.5l-2.71-2.34l3.58-.31L12 6.55l1.39 3.29l3.58.31l-2.71 2.35l.82 3.5z"
    />
  </svg>`

export default ({color}) => <SvgXml height={24} width={24} resizeMode="contain" marginHorizontal={4} xml={staff} fill={color} />