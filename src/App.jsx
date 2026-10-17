
import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Wifi,
  Coffee,
  ShieldCheck,
  Sparkles,
  Sun,
  BedDouble,
} from 'lucide-react'

const photos = {
  hero: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85',
  living: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85',
  bedroom: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1100&q=85',
  interior: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85',
  destination: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=85',
}

const stays = [
  {
    number: '01',
    name: 'Aljona Studio',
    type: 'A self-contained stay for solo travellers or couples',
    description: 'A private, practical space for short visits, quiet mornings and comfortable stays in Taveta.',
    image: photos.bedroom,
    tag: 'THE STUDIO',
    price: 'KES 3,000',
    amenities: ['Kitchenette', 'Private bathroom', 'Free Wi-Fi', 'Flat-screen TV', 'Secure parking', 'Garden access'],
  },
  {
    number: '02',
    name: 'One-Bedroom Apartment',
    type: 'More room to settle in',
    description: 'A separate living area and a garden-facing outlook make this a welcoming base for longer stays and exploring Taveta.',
    image: photos.living,
    tag: 'ONE BEDROOM',
    price: 'KES 3,500',
    amenities: ['Separate living area', 'Kitchenette', 'Private bathroom', 'Free Wi-Fi', 'Secure parking', 'Garden-facing outlook'],
  },
]

const amenities = [
  {
    icon: Wifi,
    title: 'Connected throughout',
    text: 'Stay connected for work, travel planning and the people who matter.',
  },
  {
    icon: Coffee,
    title: 'Everyday independence',
    text: 'Kitchenette facilities make it easier to enjoy a little flexibility during your stay.',
  },
  {
    icon: ShieldCheck,
    title: 'Arrive with ease',
    text: 'On-site parking offers added convenience for guests travelling by car.',
  },
  {
    icon: BedDouble,
    title: 'Your own private space',
    text: 'A private bathroom and in-room comforts help make your stay feel personal.',
  },
  {
    icon: Sun,
    title: 'A little greenery',
    text: 'Enjoy a garden setting and a quieter moment between your plans.',
  },
  {
    icon: Sparkles,
    title: 'Mornings made simple',
    text: 'Ask about breakfast availability and any additional charges.',
  },
]

const experiences = [
  {
    category: 'EXPLORE TAVETA',
    title: 'Landscapes worth discovering',
    description: 'Discover beautiful lakes, open landscapes and memorable day trips around Taveta.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85',
    alt: 'Scenic lake and mountain landscape',
  },
  {
    category: 'FOOD & FLAVOUR',
    title: 'A taste of Kenya',
    description: 'Explore Kenyan dishes, fresh ingredients and local dining experiences.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
    alt: 'Food photography representing fresh cuisine',
  },
  {
    category: 'GREEN & OPEN',
    title: 'Make room to breathe',
    description: 'Find peaceful outdoor spaces, leafy gardens and places to slow down.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85',
    alt: 'Green trees and a natural outdoor setting',
  },
  {
    category: 'LEISURE & RELAXATION',
    title: 'Take a refreshing break',
    description: 'Discover swimming and leisure options available around the Taveta area.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=85',
    alt: 'Outdoor swimming pool at a leisure property',
  },
  {
    category: 'NATURE & WILDLIFE',
    title: 'A different side of Kenya',
    description: 'Make time for nature, open horizons and the landscapes of the wider region.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85',
    alt: 'East African wildlife and landscape',
  },
  {
    category: 'SLOW MOMENTS',
    title: 'Enjoy the outdoors',
    description: 'Look for quiet places to sit, talk, read or simply enjoy the fresh air.',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85',
    alt: 'Peaceful natural landscape',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    arrival: '',
    departure: '',
    guests: '2 guests',
    apartment: 'Not sure yet',
    message: '',
  })

  const whatsappNumber = '254790501928'

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function submitEnquiry(event) {
    event.preventDefault()

    if (!/^\d{10,15}$/.test(whatsappNumber)) {
      alert('The property WhatsApp number must be configured before enquiries can be sent.')
      return
    }

    const today = new Date()
    const localToday = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, '0'),
      String(today.getDate()).padStart(2, '0'),
    ].join('-')

    if (form.arrival && form.arrival < localToday) {
      alert('Please choose an arrival date that is today or later.')
      return
    }

    if (form.departure && !form.arrival) {
      alert('Please select your arrival date before choosing a departure date.')
      return
    }

    if (form.arrival && form.departure && form.departure <= form.arrival) {
      alert('Departure must be at least one day after arrival.')
      return
    }

    const message = [
      'Hello Aljona Apartments, I would like to make a booking enquiry.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Arrival: ${form.arrival || 'Flexible'}`,
      `Departure: ${form.departure || 'Flexible'}`,
      `Guests: ${form.guests}`,
      `Preferred accommodation: ${form.apartment}`,
      `Message: ${form.message || 'Please share availability and rates.'}`,
    ].join('\n')

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Aljona Apartments home">
          <span className="brand-symbol">a.</span>
          <span className="brand-name">
            ALJONA
            <small>APARTMENTS</small>
          </span>
        </a>

        <button
          className="mobile-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`navigation ${menuOpen ? 'navigation-open' : ''}`}>
          <a href="#stay" onClick={closeMenu}>The stay</a>
          <a href="#experience" onClick={closeMenu}>Our philosophy</a>
          <a href="#taveta-gallery" onClick={closeMenu}>Discover Taveta</a>
          <a
            className="nav-cta"
            href={`https://wa.me/${whatsappNumber}?text=Hello%20Aljona%20Apartments%2C%20I%27d%20like%20to%20enquire%20about%20a%20stay.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Enquire on WhatsApp <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <img className="hero-image" src={photos.hero} alt="Contemporary apartment interior concept" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow light"><span /> A DIFFERENT WAY TO FEEL AT HOME</p>
          <h1>Room to<br /><em>be yourself.</em></h1>
          <p className="hero-description">
            Thoughtfully imagined spaces. A gentler pace.
            A place to arrive, settle in and feel at ease.
          </p>
          <a href="#stay" className="button button-light">
            Discover Aljona <ArrowDownRight size={18} />
          </a>
        </div>

        <div className="hero-bottom">
          <span>INDEPENDENT LIVING, REIMAGINED</span>
          <span>TAVETA · KENYA</span>
        </div>
        <div className="hero-index">01 / 03</div>
      </section>

      <section className="intro section-pad" id="experience">
        <div className="intro-label">
          <span className="section-number">01</span>
          <span>THE ALJONA FEELING</span>
        </div>

        <div className="intro-content">
          <h2>Not just somewhere<br />to stay. <em>Somewhere to belong.</em></h2>
          <div className="intro-bottom">
            <p>
              We believe a good stay is about more than a beautiful room.
              It is the quiet comfort of having your own space, the freedom
              to follow your rhythm and the pleasure of feeling welcome.
            </p>
            <a href="#booking" className="text-link">
              Let’s plan your stay <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="stay-section section-pad" id="stay">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> THE SPACES</p>
            <h2>Find your kind<br />of <em>comfort.</em></h2>
          </div>
          <p className="heading-note">Different ways to stay.<br />One feeling of ease.</p>
        </div>

        <div className="stay-grid">
          {stays.map((stay) => (
            <article className="stay-card" key={stay.number}>
              <a className="stay-image-link" href="#booking" aria-label={`Enquire about ${stay.name}`}>
                <img src={stay.image} alt={`${stay.name} interior concept`} loading="lazy" />
                <span className="image-number">{stay.number}</span>
                <span className="image-arrow"><ArrowUpRight size={19} /></span>
              </a>

              <div className="stay-meta">
                <span>{stay.tag}</span>
                <span>ALJONA COLLECTION</span>
              </div>

              <h3>{stay.name}</h3>
              <p className="stay-type">{stay.type}</p>
              <p className="stay-price">{stay.price} <span>/ night</span></p>

              <div className="stay-amenities">
                {stay.amenities.map((amenity) => (
                  <span key={amenity}><Check size={13} strokeWidth={1.6} />{amenity}</span>
                ))}
              </div>

              <a
                className="text-link"
                href="#booking"
                onClick={() => setForm((previous) => ({ ...previous, apartment: stay.name }))}
              >
                Enquire about this apartment <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>

        <p className="placeholder-note">
          Accommodation categories and photographs are design concepts.
          Actual apartment types, availability and facilities require confirmation.
        </p>
      </section>

      <section className="manifesto">
        <div className="manifesto-image">
          <img src={photos.interior} alt="Natural light in a contemporary interior concept" loading="lazy" />
        </div>
        <div className="manifesto-copy">
          <p className="eyebrow light"><span /> THE LITTLE THINGS MATTER</p>
          <h2>Luxury is not<br />always more.<br /><em>Sometimes it is enough.</em></h2>
          <p>
            A space that feels considered. A moment without hurry.
            Room to think, work, reconnect or simply do nothing at all.
            That is the spirit behind Aljona.
          </p>
          <a href="#booking" className="text-link text-link-light">
            Make room for yourself <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section className="amenities-section section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> THE DETAILS</p>
            <h2>Comfort, in<br /><em>every detail.</em></h2>
          </div>
          <p className="heading-note">
            The practical things matter.<br />So does how they make you feel.
          </p>
        </div>

        <div className="amenity-grid">
          {amenities.map(({ icon: Icon, title, text }, index) => (
            <article className="amenity" key={title}>
              <div className="amenity-top">
                <Icon size={23} strokeWidth={1.4} />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="placeholder-note">Facilities are illustrative until confirmed with the property.</p>
      </section>

      <section className="good-to-know section-pad" id="guest-information">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> A FEW USEFUL DETAILS</p>
            <h2>Arrive knowing.<br /><em>Settle in easily.</em></h2>
          </div>
          <p className="heading-note">The little details that help<br />make a stay feel effortless.</p>
        </div>

        <div className="good-to-know-grid">
          <article>
            <span>01 / ARRIVAL</span>
            <h3>Check-in</h3>
            <p>From 10:00. Contact the property to arrange an early arrival.</p>
          </article>
          <article>
            <span>02 / DEPARTURE</span>
            <h3>Check-out</h3>
            <p>By 11:00. Let the property know if you have special timing needs.</p>
          </article>
          <article>
            <span>03 / YOUR STAY</span>
            <h3>House rules</h3>
            <p>Please confirm the property's current visitor, pet and party policies before arrival.</p>
          </article>
          <article>
            <span>04 / BREAKFAST</span>
            <h3>A fresh start</h3>
            <p>Ask the team whether breakfast is available and what it costs.</p>
          </article>
        </div>

        <a className="text-link guest-enquiry-link" href="#booking">
          Ask us before you arrive <ArrowRight size={16} />
        </a>
      </section>

      <section className="destination" id="destination">
        <div className="destination-image">
          <img src={photos.destination} alt="East African landscape concept" loading="lazy" />
        </div>
        <div className="destination-content">
          <p className="eyebrow"><span /> BEYOND YOUR DOOR</p>
          <p className="destination-location"><MapPin size={15} /> TAVETA, KENYA</p>
          <h2>A place to pause.<br /><em>A place to explore.</em></h2>
          <p>
            Set your own pace in Taveta, a corner of Kenya with a character
            all its own. Whether you are here for work, a visit or a change
            of scene, let your stay be part of the experience.
          </p>
          <a href="#taveta-gallery" className="button button-dark">
            Discover local experiences <ArrowUpRight size={17} />
          </a>
          <span className="destination-footnote">
            Local attractions and travel information should be verified before publication.
          </span>
        </div>
      </section>

      {/* New Taveta scenery, food, greenery and leisure gallery */}
      <section className="taveta-gallery section-pad" id="taveta-gallery">
        <div className="taveta-gallery-heading">
          <p className="eyebrow"><span /> BEYOND THE STAY</p>
          <h2>Discover Taveta.<br /><em>Find your moment.</em></h2>
          <p>
            Beautiful landscapes, local flavours and moments outdoors.
            Let your time here become part of the journey.
          </p>
        </div>

        <div className="taveta-gallery-grid">
          {experiences.map((experience, index) => (
            <article className="taveta-card" key={experience.title}>
              <div className="taveta-card-image">
                <img
                  src={experience.image}
                  alt={experience.alt}
                  loading="lazy"
                />
                <span className="taveta-card-number">0{index + 1}</span>
              </div>
              <div className="taveta-card-content">
                <span className="eyebrow">{experience.category}</span>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="taveta-gallery-note">
          Gallery images are illustrative and may not depict Taveta or Aljona Apartments.
          Swimming pools, gardens, meals and other activities should be confirmed with
          the relevant property or venue before visiting.
        </p>

        <a className="text-link taveta-gallery-cta" href="#booking">
          Plan your stay in Taveta <ArrowRight size={16} />
        </a>
      </section>

      <section className="booking-section section-pad" id="booking">
        <div className="booking-intro">
          <p className="eyebrow"><span /> YOUR NEXT STAY</p>
          <h2>Let's make<br />it <em>feel right.</em></h2>
          <p>
            Tell us a little about your visit. We'll help you explore
            the available options, dates and rates.
          </p>
          <div className="booking-promise">
            <Sparkles size={18} strokeWidth={1.5} />
            <span>A personal enquiry. A considered response.</span>
          </div>
          <p className="booking-contact-note">
            Property contact details and response times should be confirmed before launch.
          </p>
        </div>

        <form className="booking-form" onSubmit={submitEnquiry}>
          <div className="form-heading">
            <span>BOOKING ENQUIRY</span>
            <span>01 — 07</span>
          </div>

          <label>
            Your name *
            <input
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder="How should we address you?"
              required
              autoComplete="name"
            />
          </label>

          <label>
            Phone number
            <input
              name="phone"
              value={form.phone}
              onChange={updateField}
              placeholder="Your preferred contact number"
              autoComplete="tel"
              type="tel"
            />
          </label>

          <div className="form-row">
            <label>
              Arrival
              <input
                name="arrival"
                value={form.arrival}
                onChange={updateField}
                type="date"
                min={new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10)}
              />
            </label>

            <label>
              Departure
              <input
                name="departure"
                value={form.departure}
                onChange={updateField}
                type="date"
                min={
                  form.arrival
                    ? (() => {
                        const nextDay = new Date(`${form.arrival}T12:00:00`)
                        nextDay.setDate(nextDay.getDate() + 1)
                        return [
                          nextDay.getFullYear(),
                          String(nextDay.getMonth() + 1).padStart(2, '0'),
                          String(nextDay.getDate()).padStart(2, '0'),
                        ].join('-')
                      })()
                    : new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10)
                }
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Guests
              <span className="select-wrap">
                <select name="guests" value={form.guests} onChange={updateField}>
                  <option>1 guest</option>
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4 guests</option>
                  <option>5+ guests</option>
                </select>
                <ChevronDown size={16} />
              </span>
            </label>

            <label>
              Preferred stay
              <span className="select-wrap">
                <select name="apartment" value={form.apartment} onChange={updateField}>
                  <option value="Not sure yet">Not sure yet</option>
                  <option value="Aljona Studio">Aljona Studio — KES 3,000/night</option>
                  <option value="One-Bedroom Apartment">One-Bedroom Apartment — KES 3,500/night</option>
                </select>
                <ChevronDown size={16} />
              </span>
            </label>
          </div>

          <label>
            Anything else we should know?
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              placeholder="Share any preferences or questions..."
              rows={3}
            />
          </label>

          <button className="button button-dark submit-button" type="submit">
            Send booking enquiry <ArrowUpRight size={17} />
          </button>
          <p className="form-footnote">
            This is an enquiry, not a confirmed reservation. Availability and rates
            must be confirmed by the property.
          </p>
        </form>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a className="brand footer-brand" href="#home">
              <span className="brand-symbol">a.</span>
              <span className="brand-name">
                ALJONA
                <small>APARTMENTS</small>
              </span>
            </a>
            <p>A quieter kind of stay.<br />A little more room to be.</p>
          </div>

          <div className="footer-contact">
            <span className="footer-contact-label">CONTACT ALJONA</span>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              WhatsApp: +254 790 501928
            </a>
            <a href="tel:+254788936927">Call: +254 788 936927</a>
            <span>Taveta, Kenya · near 336 Taveta</span>
          </div>

          <a className="footer-top" href="#home">
            BACK TO TOP <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ALJONA APARTMENTS</span>
          <span>TAVETA · KENYA</span>
          <span>MADE WITH INTENTION.</span>
        </div>
      </footer>
    </main>
  )
}

export default App
