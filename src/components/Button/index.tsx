import * as S from './styles'

export type ButtonProps = {
  fullWidth?: boolean
  icon?: React.ReactNode
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  fullWidth = false,
  size = 'medium',
  children,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
