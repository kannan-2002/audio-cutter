// pages/index.js
export default function Home() {
  const headerStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1000,
  };

  const titleStyle = {
    fontSize: '36px',
    margin: '0',
  };

  const subtitleStyle = {
    fontSize: '18px',
    margin: '0',
  };

  const mainContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '100px', // To offset the fixed header
  };

  const buttonStyle = {
    margin: '20px 0',
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  };

  const infoSectionStyle = {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '16px',
  };

  const howToCutStyle = {
    marginTop: '40px',
    fontSize: '16px',
    textAlign: 'center',
    maxWidth: '600px',
    padding: '20px',
  };

  const footerStyle = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  };

  return (
    <>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Audio Cutter Tool</h1>
        <h2 style={subtitleStyle}>Free editor to trim and cut any audio file online</h2>
      </header>
      <div style={mainContentStyle}>
        <button style={buttonStyle}>Browse my files</button>
        <section style={infoSectionStyle}>
          <p>This app can be used to trim and/or cut audio tracks, remove audio fragments.</p>
        </section>
        <section style={howToCutStyle}>
          <h3>How to cut audio</h3>
          <p>This app can be used to trim and/or cut audio tracks, remove audio fragments. Fade in and fade out your music easily to make the audio harmonious.</p>
          <p>It’s fast and easy to use. You can save the audio file in any format.</p>
          <p>It works directly in the browser, with no need to install any software.</p>
        </section>
      </div>
      <footer style={footerStyle}>
        <p>© 2024 Audio Cutter Tool. All rights reserved.</p>
      </footer>
    </>
  );
}
