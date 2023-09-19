export const getTokenFromUrl = (): string => {
  const hash: string = window.location.hash
  return hash.split('&')[0].split('=')[1]
}
