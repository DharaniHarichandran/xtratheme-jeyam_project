import { useCallback, useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './components/HomePage'
import InnerPage from './components/InnerPage'
import { BackToTop, SearchModal, VideoModal } from './components/Overlays'

function normalize(pathname, hash) {
  if (hash && hash.startsWith('#') && hash.length > 1 && !hash.startsWith('#/')) {
    return `/${hash}`
  }
  return pathname || '/'
}

export default function App() {
  const [path, setPath] = useState(() => normalize(window.location.pathname, window.location.hash))
  const [searchOpen, setSearchOpen] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')

  const navigate = useCallback((to) => {
    const [pathname, hash] = to.split('#')
    const nextPath = pathname || '/'
    window.history.pushState({}, '', to)
    setPath(nextPath)
    if (hash) {
      window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
    }
  }, [])

  useEffect(() => {
    const onPop = () => setPath(normalize(window.location.pathname, window.location.hash))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest('a')
      if (!link) return
      const href = link.getAttribute('href')
      if (!href || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:') || link.target === '_blank') {
        return
      }
      event.preventDefault()
      navigate(href)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])

  const isHome = path === '/'

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header currentPath={isHome ? '/' : path} onSearchOpen={() => setSearchOpen(true)} onNavigate={navigate} />
      {isHome ? <HomePage onPlayVideo={setVideoUrl} /> : <InnerPage path={path} />}
      <Footer />
      <BackToTop />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} onNavigate={navigate} />
      <VideoModal url={videoUrl} onClose={() => setVideoUrl('')} />
    </>
  )
}
