import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export default function LogoErrorplusone(props: Props) {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <Image
      src="/e+1-logo-2150x1024.png"
      width={193}
      height={34}
      alt="Errorplusone Logo"
      loading={loading}
      fetchPriority={priority}
      className={clsx('max-w-[15rem]', className)}
    />
  )
}
