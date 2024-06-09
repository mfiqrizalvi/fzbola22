'use client'
import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Component.module.css'

type TBreadCrumbProps = {
  homeElement: ReactNode
  separator: ReactNode
  containerClasses?: string
  activeClasses?: string
  capitalizeLinks?: boolean
}

const NextBreadcrumb = ({
  homeElement,
  separator,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter((path) => path)

  if (pathNames.length === 0) {
    return (
      <div className={styles.spacebc}>
        <span>{homeElement}</span>
      </div>
    )
  }

  return (
    <div className={styles.spacebc}>
      <Link href="/" className={paths !== "/" ? activeClasses : ""}>
        <span>{homeElement}</span>
      </Link>
      {separator}
      {pathNames.slice(0, 1).map((link, index) => {
        let itemLink = capitalizeLinks
         ? link[0].toUpperCase() + link.slice(1, link.length)
          : link;

        return (
          <React.Fragment key={index}>
            <span className={`${capitalizeLinks? 'capitalize' : ''}`}>
              {itemLink}
            </span>
          </React.Fragment>
        );
      })}
    </div>
  )
}

export default NextBreadcrumb