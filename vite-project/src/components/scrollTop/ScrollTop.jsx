import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        
        /* settimeout make sure this run after components have rendered.  */
        setTimeout(() => {
            // window.scrollTo({ top: 0, behavior: 'smooth' })
            window.scrollTo(0, 0)
        }, 0)
    }, [pathname])
    return null
}

export default ScrollTop