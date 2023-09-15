import { SlSocialSpotify } from 'react-icons/sl'
import { Button } from 'components/atoms'
import { Title } from 'components/molecules'
import { description } from 'constant'
import { type LoginContentProps } from './login-content.model'
import styles from './login-content.module.css'
import SIGNATURE from '../../../assets/images/signature.svg'

export default function LoginContent ({ onLogin }: LoginContentProps) {
  const handleAuth = () => {
    onLogin()
  }
  return (
    <section className={styles.section}>
      <Title text="Musicapp ♪" />
      <div className={styles.section__content}>
        <p className={styles.section__text}>{description}</p>
        <Button isLoading={false} onClick={handleAuth}>
          <SlSocialSpotify />
          <p>Log In</p>
        </Button>
      </div>
      <picture className={styles.section__signature}>
        <img src={SIGNATURE} alt="siganture" />
      </picture>
    </section>
  )
}
