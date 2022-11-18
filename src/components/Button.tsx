import { FC, ReactNode } from 'react'

export enum EButtonColors {
  primary = 'bg-primary-4 active:bg-primary-3 hover:bg-primary-2 disabled:bg-primary-2',
  secondary = 'bg-transparent active:bg-neutral-2 hover:bg-neutral-2 disabled:text-neutral-2',
}

type TButtonProps = {
  type: JSX.IntrinsicElements['button']['type']
  onClick: (params?: any) => void
  color: EButtonColors
  btnText: string | ReactNode
  disabled: boolean
}

const Button: FC<TButtonProps> = ({ type, onClick, color, btnText, disabled }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`${color} min-w-[40px] rounded-lg p-2 text-base text-neutral-1`}
  >
    {btnText}
  </button>
)

export default Button
