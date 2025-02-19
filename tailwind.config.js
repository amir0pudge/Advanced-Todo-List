/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./todolist.jsx",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./component/dropdown.jsx"
  ],
  theme: {
    screens: {
      xs:'0px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        'blue1': '#007BFF',
        "whitesmoke": '#f5f5f5',
        'color': '#fff'
      },
      width: {
        '97': '97%',
        '90': '90%',
        '10': '10%',
        '80' : '80%',
        'auto': 'auto'
      },
      padding: {
        '20px': "20px"
      },
      lineHeight: {
        '11': '3rem'
      }

    }
  },
  plugins: [],
}

