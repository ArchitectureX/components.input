import React, { ComponentPropsWithoutRef, FC, useState } from 'react'
import cx from '@architecturex/utils.cx'
import { styles } from './styles'

const EyeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
const EyeOffIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /><path fillRule="evenodd" d="M3.293 3.293a1 1 0 011.414 0l12 12a1 1 0 01-1.414 1.414l-12-12a1 1 0 010-1.414z" clipRule="evenodd" /></svg>

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
