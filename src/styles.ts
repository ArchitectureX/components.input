import cx from '@architecturex/utils.cx'

export const styles = {
  wrapper: 'mb-4',
  label: 'block text-gray-700 text-sm font-bold mb-2 dark:text-gray-400',
  inputGroup: 'flex relative',
  eyeIcon: 'absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5',
  input: 'h-12 rounded-lg indent-4 shadow-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white',
  disabled: 'opacity-50 cursor-not-allowed',
  fullWidth: 'w-full block',
  focus: 'focus:outline-none focus:ring focus:ring-pacific',
  phone: 'h-12 rounded-lg shadow-lg focus:outline-none focus:ring focus:ring-pacific dark:bg-gray-800 dark:border-gray-600 dark:text-white'
}

export const tailwindClasses = cx.extract(styles)
