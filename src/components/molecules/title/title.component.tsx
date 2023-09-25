import { Separator } from 'components/atoms'
import { type TitleProps } from './title.model'
import styles from './title.module.css'

export default function Tilte ({ text }: TitleProps) {
  const chordsLines: number[] = [1, 2, 3]
  return (
    <span className={styles.container}>
      {chordsLines.map((line) => (
        <Separator key={line} direction="horizontal" />
      ))}
      <h1 className={styles.container__title}>{text}</h1>
    </span>
  )
}
