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
  countryCodes?: { [code: string]: string };
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
  countryCodes = { '+1': 'USA', '+52': 'Mexico' },
  ...restProps
}) => {
  const [hasFocus, setHasFocus] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [phone, setPhone] = useState({ countryCode: '+1', number: '' })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPhone({ ...phone, [e.target.name]: e.target.value })

    if (restProps.onChange) {
      restProps.onChange(e as any)
    }
  }

  const handleCompositeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone({ ...phone, [e.target.name]: e.target.value })

    if (restProps.onChange) {
      const newEvent = {
        ...e,
        target: {
          ...e.target,
          name: e.target.name,
          value: phone.countryCode + e.target.value
        }
      }

      restProps.onChange(newEvent as any)
    }
  };

  const isPasswordType = type === 'password'
  const inputType = isPasswordType && showPassword ? 'text' : type
  const isPhoneType = type === 'phone';

  return (
    <div data-component="Input" className={cx.join(styles.wrapper, fullWidth ? styles.fullWidth : null)} style={error ? { border: '1px solid red' } : {}}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputGroup}>
        {isPhoneType && (
          <select
            id={`${name}CountryCode`}
            name="countryCode"
            value={phone.countryCode}
            onChange={handlePhoneChange}
            className="shadow block appearance-none w-20 border border-r-0 border-gray-300 rounded-l py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled={disabled}
          >
            {Object.entries(countryCodes).map(([code]) => (
              <option key={code} value={code}>{code}</option>
            ))}
          </select>
        )}
        <input
          autoComplete="new-password"
          name={isPhoneType ? 'phone' : name}
          className={
            cx.join(
              styles.input, disabled ? styles.disabled : null,
              fullWidth ? styles.fullWidth : null,
              hasFocus ? styles.focus : null,
              className,
              isPhoneType ? 'rounded-r' : 'rounded'
            )
          }
          type={isPhoneType ? 'tel' : inputType}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          onChange={isPhoneType ? handleCompositeChange : restProps.onChange}
          value={isPhoneType ? phone.number : value}
          disabled={disabled}
          {...(isPhoneType ? {} : restProps)}
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
