import { type ButtonProps } from './button.model'
import styles from './button.module.css'

export default function Button ({ children, isLoading, onClick }: ButtonProps) {
  const handleClick = () => {
    onClick()
  }
  return (
    <button
      className={styles.button}
      disabled={isLoading}
      onClick={handleClick}
    >
      {isLoading ? <div className={styles.button__spinner} /> : children}
    </button>
  )
}
