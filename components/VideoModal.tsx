'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { X, PlayCircle } from 'lucide-react'

export function VideoModalTrigger({ src, label = 'Demo' }: { src: string; label?: string }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  function close() {
    setOpen(false)
    videoRef.current?.pause()
  }

  const modal = open ? (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) close() }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(15,14,12,.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn .2s ease',
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: 900,
        borderRadius: 16,
        overflow: 'hidden',
        background: '#000',
        boxShadow: '0 32px 80px rgba(0,0,0,.6)',
      }}>
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          style={{ width: '100%', display: 'block', maxHeight: '80vh' }}
        />
        <button
          onClick={close}
          style={{
            position: 'absolute', top: 12, right: 12,
            width: 32, height: 32, borderRadius: '50%',
            background: 'rgba(0,0,0,.6)', border: '1px solid rgba(255,255,255,.15)',
            color: '#fff', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background .15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(217,119,87,.8)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,.6)')}
          aria-label="Close"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  ) : null

  return (
    <>
      <button className="chip cursor-pointer" onClick={() => setOpen(true)}>
        <PlayCircle size={14} /> {label}
      </button>
      {mounted && createPortal(modal, document.body)}
    </>
  )
}
