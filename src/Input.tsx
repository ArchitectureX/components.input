import React, { ComponentPropsWithoutRef, FC, useState } from 'react'
import cx from '@architecturex/utils.cx'
import { styles } from './styles'

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 6.5c2.5 1.5 4.5 4 4.5 5.5s-2 4-4.5 5.5"/>
    <path d="M2 2l20 20"/>
    <path d="M1 12s4-8 11-8c2.5 0 4.7.8 6.5 2.2"/>
    <path d="M9.9 4.88C7.8 6.05 6 8.55 6 12"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

interface Props extends ComponentPropsWithoutRef<'input'> {
  label?: string
  fullWidth?: boolean
  error?: boolean
}

const Input: FC<Props> = ({
  className = '',
  disabled = false,
  error = false,
  fullWidth = false,
  name = '',
  label = '',
  type = 'text',
  value = '',
  ...restProps
}) => {
  const [hasFocus, setHasFocus] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const isPasswordType = type === 'password'
  const inputType = isPasswordType && showPassword ? 'text' : type

  return (
    <div data-component="Input" className={cx.join(styles.wrapper, fullWidth ? styles.fullWidth : null)} style={error ? { border: '1px solid red' } : {}}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputGroup}>
        <input
          autoComplete="new-password"
          name={name}
          className={
            cx.join(
              styles.input, disabled ? styles.disabled : null,
              fullWidth ? styles.fullWidth : null,
              hasFocus ? styles.focus : null,
              className
            )
          }
          type={inputType}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          value={value}
          disabled={disabled}
          {...restProps}
        />
        {isPasswordType && (
          <button
            type="button"
            className={styles.eyeIcon}
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>
    </div>
  )
}

export default Input
