/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: { extend: {
    width: {
      300: '1200px',        
      13.815: '55.26px',    
      118.75: '475px',      
      98: '392px',   
      25: '100px',       
      18.75: '75px',        
    },
    height: {
      100: '400px',         
      42.5: '170px',        
      6.25: '25px',         
      9.5: '38px',          
      27: '108px',      
    },
    padding: {
      4.5: '18px',          
      7.5: '30px',          
      33.5: '134px',        
      1.75: '7px',          
      3.75: '15px',         
    },
    margin: {
      1.75: '7px',          
      3.75: '15px',        
    },
    top: {
      6.5: '26px',          
      10: '40px',           
    },
    right: {
      3: '12px',  
    },
    bottom: {},
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    },
  } },
plugins: [require('@tailwindcss/forms')({ strategy: 'class' }),],
}
