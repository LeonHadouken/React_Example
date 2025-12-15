// components/Button/Button.jsx
import React from 'react'
import styles from './Button.module.css'
import { FiLoader } from 'react-icons/fi'

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  outline = false,
  ghost = false,
  loading = false,
  disabled = false,
  startIcon,
  endIcon,
  className = '',
  ...props
}) => {
  const getVariantClass = () => {
    if (ghost) return styles.buttonGhost
    if (outline) return styles.buttonOutline
    switch (variant) {
      case 'secondary': return styles.buttonSecondary
      case 'success': return styles.buttonSuccess
      case 'warning': return styles.buttonWarning
      case 'danger': return styles.buttonDanger
      case 'info': return styles.buttonInfo
      default: return styles.buttonPrimary
    }
  }

  const getSizeClass = () => {
    switch (size) {
      case 'small': return styles.buttonSm
      case 'large': return styles.buttonLg
      default: return ''
    }
  }

  const buttonClasses = [
    styles.button,
    getVariantClass(),
    getSizeClass(),
    fullWidth && styles.buttonFull,
    loading && styles.buttonLoading,
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <FiLoader className={`${styles.buttonIcon} ${styles.spinner}`} />
      )}

      {!loading && startIcon && (
        <span className={`${styles.buttonIcon} ${styles.buttonIconLeft}`}>
          {startIcon}
        </span>
      )}

      <span>{children}</span>

      {!loading && endIcon && (
        <span className={`${styles.buttonIcon} ${styles.buttonIconRight}`}>
          {endIcon}
        </span>
      )}
    </button>
  )
}

export default Button