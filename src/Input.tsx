import React, { ComponentPropsWithoutRef, FC, useState, ChangeEvent } from 'react'
import cx from '@architecturex/utils.cx'
import { styles } from './styles'

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#888"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#888"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
)

interface Props extends ComponentPropsWithoutRef<'input'> {
  label?: string
  fullWidth?: boolean
  error?: boolean
  countryCodes?: { [code: string]: string }
  countryCodeValue?: string
  onCountryCodeChange?: (e: ChangeEvent<HTMLSelectElement>) => void
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
  onChange,
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
        <label className={styles.label} htmlFor={name}>
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
          onChange={onChange}
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
            title={showPassword ? 'Hide password' : 'Show password'}
            style={{ top: '5px' }}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>
    </div>
  )
}

export default Input
