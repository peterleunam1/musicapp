import { useDispatch, useSelector } from 'react-redux'
import { type AppStore } from '../../../redux/store'
import { Button } from 'components/atoms'
import { setUser } from '../../../redux/states/user'
export default function Home () {
  const user = useSelector((store: AppStore) => store.user)
  const dispatch = useDispatch()
  const handleSetStatus = () => {
    dispatch(setUser({
      name: 'pedro',
      email: 'arpm081001@gmail.com',
      id: '12356'
    }))
  }
  return (
    <div>
        <h1>Home</h1>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <Button isLoading={false} onClick={handleSetStatus}>
          SET STATUS
        </Button>
    </div>
  )
}
