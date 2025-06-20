/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: { extend: {} },
plugins: [require('@tailwindcss/forms')({ strategy: 'class' }),],
}
