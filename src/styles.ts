import cx from '@architecturex/utils.cx'

export const styles = {
  wrapper: 'mb-4',
  label: 'block text-sm font-medium text-gray-600 dark:text-gray-400',
  input: 'mt-1 p-2 w-full text-sm border outline-none focus:ring focus:ring-gray-300 dark:bg-black dark:text-white dark:border-gray-700',
  disabled: 'opacity-50 cursor-not-allowed',
  fullWidth: 'w-full block',
  focus: 'ring-2 ring-offset-2 ring-offset-gray-100 dark:ring-offset-black ring-gray-300 dark:ring-gray-700',
}

export const tailwindClasses = cx.extract(styles)
