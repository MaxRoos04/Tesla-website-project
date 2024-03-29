module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#00000',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/Map.png')",
        Banner: "url('./assets/front-page.png')",
        MDS: "url('./assets/MdS-fp.png')",
        MD3: "url('./assets/Md3-fp.png')",
        MDX: "url('./assets/MdX-fp.png')",
        MDY: "url('./assets/MdY-fp.png')",
      },
    },
  },
  plugins: [],
};
