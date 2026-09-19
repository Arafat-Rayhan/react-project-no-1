import { useEffect, useState } from 'react'

function getStartingTheme() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme

    const osIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return osIsDark ? 'dark' : 'light'
}

export default function useTheme() {
    const [theme, setTheme] = useState(getStartingTheme)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    function toggleTheme() {
        setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
    }

    return [theme, toggleTheme]
}
