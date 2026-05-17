export type SvgRoute = string | { light: string; dark: string }

export type Svg = {
  id: number
  title: string
  category: string | string[]
  route: SvgRoute
  wordmark?: SvgRoute
  url?: string
}

/**
 * Fetches all SVGs from svgl.app at build time.
 * Call this only from async server components.
 */
export async function fetchSvgs(): Promise<Svg[]> {
  try {
    const res = await fetch('https://api.svgl.app', {
      next: { revalidate: false },
    })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

/**
 * Given the svgs list and a tech name, returns the dark-mode SVG URL or null.
 */
export function resolveLogo(svgs: Svg[], name: string): string | null {
  const match = svgs.find(
    (s) => s.title.toLowerCase() === name.toLowerCase()
  )
  if (!match) return null
  const route = match.route
  if (typeof route === 'string') return route
  return route.dark ?? route.light
}
