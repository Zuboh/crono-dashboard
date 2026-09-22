import type { SVGProps } from 'react'

export function IconInfo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M8 7.25V11"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.83384 5.5C7.83318 5.408 7.90784 5.3334 7.99984 5.3334C8.09251 5.3334 8.16718 5.408 8.16718 5.5C8.16718 5.592 8.09251 5.6667 8.00051 5.6667C7.90851 5.6667 7.83384 5.592 7.83384 5.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
