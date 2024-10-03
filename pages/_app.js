// pages/_app.js
function MyApp({ Component, pageProps }) {
    const appStyle = {
      padding: 0,
      margin: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#1a1a1a', // Dark background
      color: '#fff', // White text
    };
  
    return (
      <div style={appStyle}>
        <Component {...pageProps} />
      </div>
    );
  }
  
  export default MyApp;
  