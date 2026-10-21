import Reveal from './Reveal.jsx'

const features = [
  {
    number: '01',
    icon: '⌘',
    title: 'Veb-saytlar yaratish',
    description: 'O‘z g‘oyalaringni haqiqiy veb-sahifalarga aylantir.',
    tone: 'blue',
  },
  {
    number: '02',
    icon: '{ }',
    title: 'Dasturlash asoslari',
    description: 'Kod yozishni eng boshidan, sodda misollar bilan o‘rgan.',
    tone: 'purple',
  },
  {
    number: '03',
    icon: '↗',
    title: 'Real loyihalar',
    description: 'O‘rganganlaringni o‘zing yaratgan loyihalarda sinab ko‘r.',
    tone: 'mint',
  },
  {
    number: '04',
    icon: '✳',
    title: 'Zamonaviy texnologiyalar',
    description: 'Bugun ishlatilayotgan foydali IT vositalari bilan tanish.',
    tone: 'orange',
  },
]

function Features() {
  return (
    <section className="section features-section" id="nimalarni-organamiz">
      <div className="page-wrap">
        <Reveal>
          <div className="section-heading">
            <span className="section-kicker">BIRGALIKDA O‘RGANAMIZ</span>
            <h2>G‘oyadan <span>loyihagacha</span></h2>
            <p>Kompyuterda shunchaki o‘tirish emas — o‘z qo‘ling bilan nimadir yaratish.</p>
          </div>
        </Reveal>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <Reveal key={feature.number} delay={index * 90}>
              <article className="feature-card">
                <div className={`feature-icon ${feature.tone}`} aria-hidden="true">{feature.icon}</div>
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
