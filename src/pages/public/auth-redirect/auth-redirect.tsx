import useAuth from 'hooks/useAuth'

export default function AuthRediret () {
  const { error } = useAuth()
  return (
    <div>
      {error && <p>{error}</p>}
      <p>Cargando...</p>
    </div>
  )
}
