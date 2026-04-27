const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>
        <div className="header-text">
          <h1 className="header-title">Student Scoreboard</h1>
          <p className="header-subtitle">Track · Update · Analyse student performance</p>
        </div>
        <div className="header-badge">
          <span className="header-badge-dot"></span>
          Live
        </div>
      </div>
    </header>
  );
};

export default Header;
