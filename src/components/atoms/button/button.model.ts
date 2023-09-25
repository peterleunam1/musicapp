import { type ChildrenModel } from 'models'

export interface ButtonProps extends ChildrenModel {
  isLoading: boolean
  onClick: () => void
}
