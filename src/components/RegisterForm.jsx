import { useState } from 'react'
import Reveal from './Reveal.jsx'

const FORM_URL = 'https://script.google.com/macros/s/AKfycbwDDIxtBQsv7t2DOW2YIGoebnORVhfe-QTQxzspEu0HO-uzSMeUcZydrZHWlsilm8Agsw/exec'

function isValidPhoneNumber(value) {
  const normalizedPhone = value.replace(/[()\s-]/g, '')
  return /^(?:\+?998)?\d{9}$/.test(normalizedPhone)
}

function RegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmissionStatus('')

    const form = event.currentTarget
    const phoneField = form.elements.phone
    phoneField.setCustomValidity(
      isValidPhoneNumber(phoneField.value)
        ? ''
        : 'Telefon raqamni +998 90 123 45 67 ko‘rinishida kiriting.',
    )

    if (!form.reportValidity()) return

    const formData = new FormData(form)
    const registration = Object.fromEntries(formData.entries())

    setIsSubmitting(true)
    try {
      const response = await fetch(FORM_URL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(registration),
      })

      if (!response.ok) {
        throw new Error(`Server so‘rovni qabul qilmadi (${response.status}).`)
      }

      form.reset()
      setSubmissionStatus('success')
    } catch (error) {
      console.error('Ro‘yxatdan o‘tish ma’lumotini yuborib bo‘lmadi:', error)
      setSubmissionStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section register-section" id="royxatdan-otish">
      <div className="page-wrap register-layout">
        <Reveal>
          <div className="register-copy">
            <span className="section-kicker">BIRINCHI QADAMNI TASHLA</span>
            <h2>Joyingni hoziroq <span>band qil!</span></h2>
            <p>Ma’lumotlaringni qoldir. To‘garak haqida batafsil ma’lumot berish uchun tez orada sen bilan bog‘lanamiz.</p>
            <div className="register-note">
              <span aria-hidden="true">✦</span>
              Bepul. Oddiy. Sening kelajaging uchun.
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span className="form-step">01 <span>/ 01</span></span>
              <h3>Ro‘yxatdan o‘tish</h3>
              <p>Quyidagi maydonlarni to‘ldir</p>
            </div>

            <label className="form-field">
              <span>Ism-familiya</span>
              <input
                type="text"
                name="name"
                placeholder="Masalan, Ali Valiyev"
                autoComplete="name"
                minLength="3"
                maxLength="80"
                required
              />
            </label>

            <label className="form-field">
              <span>Sinf</span>
              <select name="grade" defaultValue="" required>
                <option value="" disabled>Sinfni tanlang</option>
                {[5, 6, 7, 8, 9, 10, 11].map((grade) => (
                  <option key={grade} value={`${grade}-sinf`}>{grade}-sinf</option>
                ))}
              </select>
            </label>

            <label className="form-field">
              <span>Telefon raqam</span>
              <input
                type="tel"
                name="phone"
                placeholder="+998 90 123 45 67"
                autoComplete="tel"
                inputMode="tel"
                title="Telefon raqamni +998 90 123 45 67 ko‘rinishida kiriting"
                onChange={(event) => {
                  const field = event.currentTarget
                  field.setCustomValidity(
                    isValidPhoneNumber(field.value)
                      ? ''
                      : 'Telefon raqamni +998 90 123 45 67 ko‘rinishida kiriting.',
                  )
                }}
                required
              />
            </label>

            <button className="button button-primary submit-button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Yuborilmoqda...' : 'Ariza yuborish'}
              {!isSubmitting && <span aria-hidden="true">↗</span>}
            </button>

            <p className={`form-status${submissionStatus ? ` ${submissionStatus}` : ''}`} aria-live="polite" role="status">
              {submissionStatus === 'success' && "Rahmat! Tez orada siz bilan bog'lanamiz."}
              {submissionStatus === 'error' && 'Ariza yuborilmadi. Google Apps Script’da web app ruxsatini “Anyone” qilib qayta deploy qiling.'}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default RegisterForm
