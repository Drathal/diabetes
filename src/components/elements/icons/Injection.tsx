import { FC } from 'react'

interface Props {
  className?: string
}

const Icon: FC<Props> = ({ className = '' }) => {
  return (
    <svg
      className={`w-8 h-6 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 122.88"
      fill="currentColor"
    >
      <path
        d="M76.73 10.98l14.83 14.83 11.16-11.16-9.15-9.14L99.09 0l23.79 23.8-5.51 5.51-9.14-9.14-11.16 11.15 15.03 15.03-5.52 5.51-6.6-6.6-64.19 64.19-8.43-8.42-21.85 21.85L0 117.37l21.85-21.85-8.33-8.34 7.93-7.94 11.22 11.23 5.53-5.52-11.22-11.23 9.79-9.79 11.22 11.22 5.53-5.52-11.23-11.22 9.8-9.8 11.22 11.22 5.52-5.52-11.22-11.22 9.79-9.8 11.23 11.23 5.52-5.53-11.22-11.22 4.78-4.79-6.49-6.49 5.51-5.51z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Icon
