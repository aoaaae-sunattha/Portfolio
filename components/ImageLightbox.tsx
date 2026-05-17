'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  src: string
  alt: string
  caption?: string
}

function LightboxModal({ src, alt, caption, open, onClose }: Props & { open: boolean; onClose: () => void }) {
  if (typeof document === 'undefined') return null

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.88)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        cursor: 'zoom-out',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 200ms ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          background: '#0d0d1f',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
          transform: open ? 'scale(1)' : 'scale(0.95)',
          transition: 'transform 200ms ease',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            zIndex: 10,
            background: 'rgba(0,0,0,0.7)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50%',
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'rgba(255,255,255,0.8)',
            fontSize: '0.9rem',
            lineHeight: 1,
          }}
          aria-label="Close preview"
        >
          ✕
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{ display: 'block', maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain' }}
        />
        {caption && (
          <div style={{
            padding: '0.55rem 1rem',
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.4)',
            fontFamily: 'var(--font-mono)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}>
            {caption}
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}

export default function ImageLightbox({ src, alt, caption }: Props) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure portal target exists (SSR safe)
  useEffect(() => { setMounted(true) }, [])

  // Lock scroll + Escape key
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      {/* Thumbnail */}
      <button
        onClick={() => setOpen(true)}
        style={{
          display: 'block',
          width: '100%',
          padding: 0,
          background: 'none',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '10px',
          cursor: 'zoom-in',
          overflow: 'hidden',
          transition: 'border-color 150ms ease, box-shadow 150ms ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)'
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
          e.currentTarget.style.boxShadow = 'none'
        }}
        aria-label={`Preview ${alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: '140px', display: 'block', objectFit: 'cover', objectPosition: 'top' }}
        />
        {caption && (
          <div style={{
            padding: '0.4rem 0.65rem',
            fontSize: '0.65rem',
            color: 'rgba(255,255,255,0.3)',
            fontFamily: 'var(--font-mono)',
            textAlign: 'left',
            background: 'rgba(255,255,255,0.02)',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {caption}
          </div>
        )}
      </button>

      {/* Portal modal — rendered at document.body, no stacking context issues */}
      {mounted && (
        <LightboxModal src={src} alt={alt} caption={caption} open={open} onClose={() => setOpen(false)} />
      )}
    </>
  )
}
