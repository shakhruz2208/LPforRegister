import Reveal from './Reveal.jsx'

const details = [
  { icon: '◷', label: 'Jonli darslar', value: 'Seshanba va yakshanba' },
  { icon: '◴', label: 'Onlayn dars', value: 'Payshanba' },
  { icon: '⌖', label: 'Manzil', value: 'Informatika xonasi / 70-maktab' },
]

function Schedule() {
  return (
    <section className="section schedule-section" id="dars-vaqti">
      <div className="page-wrap">
        <Reveal>
          <div className="schedule-card">
            <div className="schedule-copy">
              <span className="section-kicker">DARS JADVALI</span>
              <h2>Haftada uch kun.<br /><span>Katta imkoniyatlar.</span></h2>
              <p>Seshanba va yakshanba jonli darslar, payshanba esa onlayn dars bo‘ladi.</p>
            </div>
            <div className="schedule-details">
              {details.map((detail) => (
                <div className="schedule-detail" key={detail.label}>
                  <span className="schedule-icon" aria-hidden="true">{detail.icon}</span>
                  <span className="detail-text">
                    <span className="detail-label">{detail.label}</span>
                    <strong>{detail.value}</strong>
                  </span>
                </div>
              ))}
            </div>
            <div className="schedule-decoration" aria-hidden="true">IT</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Schedule
