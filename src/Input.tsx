import React, { ComponentPropsWithoutRef, FC, useState } from 'react'
import cx from '@architecturex/utils.cx'
import { styles } from './styles'

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

  return (
    <div data-component="Input" className={cx.join(styles.wrapper, fullWidth ? styles.fullWidth : null)} style={error ? { border: '1px solid red' } : {}}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}
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
        type={type}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        value={value}
        disabled={disabled}
        {...restProps}
      />
    </div>
  )
}

export default Input
