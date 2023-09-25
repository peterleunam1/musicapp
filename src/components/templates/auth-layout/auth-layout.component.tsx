import styles from './auth-layout.module.css'
import IMAGE from '../../../assets/images/main-image.jpeg'
import { type ChildrenModel } from 'models'

export default function AuthLayout ({ children }: ChildrenModel) {
  return (
    <main className={styles.main}>
      <picture className={styles.main__picture}>
        <img src={IMAGE} alt="main-image" loading='lazy' />
      </picture>
      {children}
    </main>
  )
}
