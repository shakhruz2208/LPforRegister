import Reveal from './Reveal.jsx'

const reasons = [
  'Mutlaqo bepul',
  'Boshlovchilar uchun',
  'Seshanba va yakshanba — jonli dars',
  'Payshanba — onlayn dars',
  'Onlayn platformada vazifalar',
  'Portfolio uchun loyihalar',
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="m5 10.2 3.2 3.1L15.5 6" />
    </svg>
  )
}

function WhyJoin() {
  return (
    <section className="section why-section" id="nega-biz">
      <div className="page-wrap why-layout">
        <Reveal>
          <div className="why-intro">
            <span className="section-kicker">SEN UCHUN QULAY</span>
            <h2>Boshlash uchun<br /><span>hammasi tayyor.</span></h2>
            <p>Biz bilan o‘rganish oson, qiziqarli va eng muhimi — mutlaqo bepul.</p>
          </div>
        </Reveal>
        <div className="reason-list">
          {reasons.map((reason, index) => (
            <Reveal key={reason} delay={index * 70}>
              <div className="reason-item">
                <span className="check-icon"><CheckIcon /></span>
                <span>{reason}</span>
                <span className="reason-index">0{index + 1}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyJoin
