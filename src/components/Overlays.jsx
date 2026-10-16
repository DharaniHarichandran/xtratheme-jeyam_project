import { useEffect, useMemo, useState } from 'react'
import { searchIndex } from '../data/content'

export function SearchModal({ open, onClose, onNavigate }) {
  const [query, setQuery] = useState('')
  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return searchIndex
    return searchIndex.filter((item) => item.label.toLowerCase().includes(q))
  }, [query])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label="Search">
      <div className="search-panel">
        <button className="close-x" type="button" aria-label="Close search" onClick={onClose}>
          ×
        </button>
        <input
          autoFocus
          type="search"
          placeholder="Search pages and sections"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="search-results">
          {results.map((item) => (
            <a
              key={item.to + item.label}
              href={item.to}
              onClick={(event) => {
                event.preventDefault()
                onClose()
                onNavigate(item.to)
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export function VideoModal({ url, onClose }) {
  useEffect(() => {
    if (!url) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [url, onClose])

  if (!url) return null

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label="Video">
      <div className="video-panel">
        <button className="close-x" type="button" aria-label="Close video" onClick={onClose}>
          ×
        </button>
        <iframe
          title="Construction introduction video"
          src={`${url}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`back-top ${visible ? 'is-visible' : ''}`}
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  )
}
