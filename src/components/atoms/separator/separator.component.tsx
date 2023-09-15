import { type SeparatorProps } from './separator.model'
import styles from './separator.module.css'

export default function Separator ({ direction }: SeparatorProps) {
  return <div className={`${styles.separator} ${styles[`separator--${direction}`]}`}/>
}
