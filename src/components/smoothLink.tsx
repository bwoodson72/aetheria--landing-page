'use client'

import { useLenis } from 'lenis/react'
import React, { ReactNode } from 'react'

interface SmoothLinkProps {
    href: string
    children: ReactNode
    className?: string
}

export default function SmoothLink({ href, children, className }: SmoothLinkProps) {
    const lenis = useLenis()

    const handleClick = (e: React.MouseEvent) => {
        // Only intercept internal hashtag links
        if (href.startsWith('#')) {
            e.preventDefault()
            lenis?.scrollTo(href, {
                offset: -80, // Adjust this based on your Nav height
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Premium "expo out" feel
            })
        }
    }

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    )
}