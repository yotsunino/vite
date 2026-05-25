import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Resolve the directory of this file
export const VITE_PACKAGE_DIR = path.resolve(
  // import.meta.url is not available in CJS
  fileURLToPath(import.meta.url),
  '../../..'
)

export const CLIENT_ENTRY = path.resolve(VITE_PACKAGE_DIR, 'dist/client/client.mjs')
export const ENV_ENTRY = path.resolve(VITE_PACKAGE_DIR, 'dist/client/env.mjs')
export const CLIENT_DIR = path.dirname(CLIENT_ENTRY)

export const KNOWN_ASSET_TYPES = [
  // images
  'apng',
  'png',
  'jpg',
  'jpeg',
  'jfif',
  'pjpeg',
  'pjp',
  'gif',
  'svg',
  'ico',
  'webp',
  'avif',

  // media
  'mp4',
  'webm',
  'ogg',
  'mp3',
  'wav',
  'flac',
  'aac',
  'opus',
  'm4a', // added: common audio format often missing from asset handling

  // fonts
  'woff2',
  'woff',
  'eot',
  'ttf',
  'otf',

  // other
  'webmanifest',
  'pdf',
  'txt',
]

export const DEFAULT_ASSETS_RE = new RegExp(
  `\\.(` + KNOWN_ASSET_TYPES.join('|') + `)(\\?.*)?$`
)

export const DEP_VERSION_RE = /[?&](v=\w+)/

export const FS_PREFIX = `/@fs/`
export const VALID_ID_PREFIX = `/@id/`
export const CLIENT_PUBLIC_PATH = `/@vite/client`
export const ENV_PUBLIC_PATH = `/@vite/env`
export const SOURCEMAPPING_URL = 'sourceMappingURL'

// Special query strings
export const WORKER_FILE_ID = 'worker_file'
export const NULL_BYTE_PLACEHOLDER = `__x00__`

// CSS-related
export const CSS_LANGS_RE =
  /\.(css|less|sass|scss|styl|stylus|pcss|postcss|sss)(?:$|\?)/

// HTML-related
export const HTML_PROXY_RESULT = new Map<string, string>()

// Default port for the dev server
export const DEFAULT_DEV_PORT = 5173
export const DEFAULT_PREVIEW_PORT = 4173

// Vite's own dependencies that should not be externalized
export const VITE_SPECIAL_QUERY_RE = /[?&](?:worker|sharedworker|raw|url)\b/

// Regex to detect bare imports (not relative or absolute)
export const BARE_IMPORT_RE = /^(?![a-zA-Z]:)(?![./])/
