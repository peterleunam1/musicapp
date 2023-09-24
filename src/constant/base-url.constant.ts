export const BASE_URL: string = 'https://api.spotify.com/v1'
export const AUTH_BASE_URL: string = 'https://accounts.spotify.com/authorize'
export const CLIENT_ID: string = import.meta.env.VITE_SPOTIFY_CLIENT_ID
export const REDIRECT_URI: string = import.meta.env.VITE_REDIRECT_URI
export const SCOPES: string[] = [
  'user-read-private',
  'user-read-email',
  'user-modify-playback-state',
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-position',
  'user-top-read'
]
export const AUTH_URL: string = `${AUTH_BASE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}
&scope=${SCOPES.join('%20')}&response_type=token&show_dialog=true`
