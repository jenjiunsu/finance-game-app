/** @type {import('tailwindcss').Config} */
module.exports = {
  // 添加 purge 配置
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // 添加 darkMode 配置
  darkMode: false,
  theme: {
    extend: {
      // 添加自定義顏色
      colors: {
        red: '#FF4C4C',
        gray: {
          light: '#F3F3F3',
          DEFAULT: '#B3B3B3',
          dark: '#333333',
        },
      },
    },
  },
  plugins: [],
}

