# @architecturex/components.input

## Input

This is a versatile Input component suitable for various form input scenarios.

### Installation

`npm install @architecturex/components.input`

### Features

- Customizable appearance with fullWidth and error props.
- Supports all native input props.
- Built-in focus state handling.

### Props

- **label (optional):** Displayed above the input.
- **fullWidth (optional):** Makes the input take the full width of its container.
- **error (optional):** Indicates if the input has an error, which changes its border color to red.
- and supports all other native input attributes.

### Usage

```javascript
import Input from '@architecturex/components.input'

function App() {
  return (
    <div>
      <Input label="Username" />
      <Input label="Password" type="password" error={true} />
    </div>
  )
}
```

### Contribution

Feel free to suggest improvements, report issues, or contribute to enhancing these utilities. Your feedback and contributions are welcome!
