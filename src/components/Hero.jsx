function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  )
}

function Hero() {
  return (
    <header className="hero" id="top">
      <nav className="site-nav page-wrap" aria-label="Asosiy navigatsiya">
        <a className="brand" href="#top" aria-label="IT to‘garak bosh sahifasi">
          <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
          <span>IT<span className="brand-light">TO‘GARAK</span></span>
        </a>
        <a className="nav-link" href="#royxatdan-otish">Ro‘yxatdan o‘tish</a>
      </nav>

      <div className="hero-content page-wrap">
        <div className="hero-copy">
          <span className="eyebrow"><span className="status-dot" /> 5–11-sinf o‘quvchilari uchun</span>
          <h1>Maktabimizda IT to&apos;garagi <span>ochilyapti!</span></h1>
          <p className="hero-subtitle">Dasturlashni noldan, mutlaqo bepul o&apos;rganing</p>
          <a className="button button-primary hero-cta" href="#royxatdan-otish">
            Ro‘yxatdan o‘tish <ArrowIcon />
          </a>
          <div className="hero-note">
            <span className="note-icon" aria-hidden="true">✦</span>
            Tajriba shart emas — qiziqish bo‘lsa kifoya
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="floating-chip chip-html">&lt;/&gt;</div>
          <div className="floating-chip chip-star">✳</div>
          <div className="code-window">
            <div className="window-bar">
              <span /><span /><span />
              <div className="window-label">mening-saytim.html</div>
            </div>
            <div className="code-content">
              <div><span className="code-muted">01</span><span className="code-purple">&lt;html&gt;</span></div>
              <div><span className="code-muted">02</span><span className="code-purple">  &lt;body&gt;</span></div>
              <div><span className="code-muted">03</span><span className="code-blue">    &lt;h1&gt;</span><span className="code-white">Salom, dunyo!</span><span className="code-blue">&lt;/h1&gt;</span></div>
              <div><span className="code-muted">04</span><span className="code-purple">    &lt;script&gt;</span></div>
              <div><span className="code-muted">05</span><span className="code-yellow">      boshlash</span><span className="code-white">()</span></div>
              <div><span className="code-muted">06</span><span className="code-purple">    &lt;/script&gt;</span></div>
              <div><span className="code-muted">07</span><span className="code-purple">  &lt;/body&gt;</span></div>
              <div><span className="code-muted">08</span><span className="code-purple">&lt;/html&gt;</span></div>
            </div>
            <div className="code-cursor" />
          </div>
          <div className="art-caption">
            <span className="caption-icon">✦</span>
            <span><strong>G‘oyangni</strong><br />haqiqatga aylantir</span>
          </div>
        </div>
      </div>
      <div className="hero-bottom-glow" />
    </header>
  )
}

export default Hero
