import React from 'react'
import { StyledButton, IconWrapper } from './styled'

const Button = ({
  type = 'button',
  disabled = false,
  title,
  loading,
  variant,
  icon,
  to,
  className,
  ...rest
}) => {
  const iconElement = icon ? (
    <IconWrapper variant={variant}>{icon}</IconWrapper>
  ) : null

  return (
    <StyledButton
      className={className}
      type={type}
      disabled={disabled}
      variant={variant}
      {...rest}
    >
      {loading ? (
        'Sending...'
      ) : (
        <>
          {title}
          {iconElement}
        </>
      )}
    </StyledButton>
  )
}

export default Button
