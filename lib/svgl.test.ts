import { describe, expect, test } from 'vitest'
import { resolveLogo } from './svgl'
import type { Svg } from './svgl'

const mockSvgs: Svg[] = [
  { id: 1, title: 'TypeScript', category: 'Language', route: 'https://svgl.app/library/typescript.svg' },
  { id: 2, title: 'React', category: 'Library', route: { light: 'https://svgl.app/library/react.svg', dark: 'https://svgl.app/library/react_dark.svg' } },
  { id: 3, title: 'Next.js', category: 'Framework', route: { light: 'https://svgl.app/library/nextjs.svg', dark: 'https://svgl.app/library/nextjs_dark.svg' } },
]

describe('resolveLogo', () => {
  test('resolves exact match (string route)', () => {
    expect(resolveLogo(mockSvgs, 'TypeScript')).toBe('https://svgl.app/library/typescript.svg')
  })

  test('resolves case-insensitive match', () => {
    expect(resolveLogo(mockSvgs, 'typescript')).toBe('https://svgl.app/library/typescript.svg')
  })

  test('prefers dark route for object routes', () => {
    expect(resolveLogo(mockSvgs, 'React')).toBe('https://svgl.app/library/react_dark.svg')
  })

  test('returns null for no match', () => {
    expect(resolveLogo(mockSvgs, 'UnknownLib')).toBeNull()
  })
})
