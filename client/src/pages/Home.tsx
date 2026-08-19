import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  CirclePlay,
  Heart,
  MapPin,
  Menu,
  Sparkles,
  Ticket,
  UsersRound,
  X,
} from "lucide-react";

/** Exact images provided by user */
const IMAGES = {
  heroGarba: "/images/hero-garba.png",
  childrenHope: "/images/children-cause.png",
  causeEducation: "/images/community-planning.png",
  communitySponsor: "/images/sponsor-planning.png",
  ticketGarba: "/images/ticket-art.png",
};

/** Dandiya & Lotus Festival Emblem */
function RaasMark({ className = "brand-mark" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="46" stroke="#b91f59" strokeWidth="2.5" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="40" fill="#ec6c24" fillOpacity="0.12" />
      <circle cx="50" cy="50" r="35" stroke="#ec6c24" strokeWidth="1.5" />
      {/* Crossed Dandiya sticks */}
      <line x1="28" y1="72" x2="72" y2="28" stroke="#64132e" strokeWidth="5" strokeLinecap="round" />
      <line x1="28" y1="28" x2="72" y2="72" stroke="#b91f59" strokeWidth="5" strokeLinecap="round" />
      {/* Ornaments */}
      <circle cx="50" cy="50" r="7" fill="#ec6c24" />
      <circle cx="50" cy="50" r="3" fill="#fff" />
      <circle cx="28" cy="28" r="3.5" fill="#ec6c24" />
      <circle cx="72" cy="28" r="3.5" fill="#64132e" />
      <circle cx="28" cy="72" r="3.5" fill="#64132e" />
      <circle cx="72" cy="72" r="3.5" fill="#b91f59" />
    </svg>
  );
}

/** Design philosophy: Rangon Ki Raat — a tactile Indian editorial campaign built on cream paper, saffron brushwork, Raas magenta, burgundy contrast, and clear mobile-first giving paths. */
const donationOptions = [
  { amount: "30", label: "Start Here", note: "Your celebration can become someone's hope." },
  { amount: "365", label: "$1 a Day", badge: "Most Chosen", note: "A simple daily idea, gathered into one meaningful gift." },
  { amount: "500", label: "Make a Bigger Impact", note: "Your generosity can make your celebration mean even more." },
  { amount: "other", label: "Other Amount", note: "Choose an amount that feels right for you." },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState("365");
  const [otherAmount, setOtherAmount] = useState(100);
  const selected = useMemo(() => donationOptions.find((option) => option.amount === selectedDonation)!, [selectedDonation]);
  const activeAmount = selectedDonation === "other" ? otherAmount : Number(selectedDonation);

  return (
    <div className="site-shell">
      <div className="top-ribbon"><Sparkles size={14} /> A night of Garba. A brighter future for children in India. <Sparkles size={14} /></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Navratri Raas Garba home">
          <RaasMark className="brand-mark" />
          <span><strong>NAVRATRI</strong><em>RAAS GARBA</em><small>2026 · NJ</small></span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#why" onClick={() => setMenuOpen(false)}>The why</a>
          <a href="#donate" onClick={() => setMenuOpen(false)}>Donate</a>
          <a href="#sponsor" onClick={() => setMenuOpen(false)}>Sponsor</a>
          <a href="#tickets" onClick={() => setMenuOpen(false)}>Tickets</a>
        </nav>
        <div className="header-actions">
          <button className="text-link" onClick={() => scrollToId("sponsor")}>Partner with us <ArrowUpRight size={15} /></button>
          <button className="mini-cta" onClick={() => scrollToId("donate")}>Donate <Heart size={16} fill="currentColor" /></button>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Navratri Raas Garba 2026</p>
            <h1>This Navratri,<br /><span>let your celebration</span><br />mean more.</h1>
            <p className="hero-intro">Come together for an unforgettable night of Garba, music, family and community — while helping create brighter futures for children in India.</p>
            <div className="hero-buttons">
              <button className="button button-primary" onClick={() => scrollToId("tickets")}>Get your pass + donate <ArrowUpRight size={18} /></button>
              <button className="button button-ghost" onClick={() => scrollToId("donate")}>Donate now <Heart size={17} /></button>
            </div>
            <div className="event-meta">
              <span><CalendarDays size={17} /><b>Oct 16, 2026</b></span>
              <span><MapPin size={17} /><b>Old Bridge High School</b><small>Matawan, NJ</small></span>
            </div>
          </div>
          <div className="hero-art">
            <div className="sunburst" aria-hidden="true">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="46" stroke="#ea7035" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                <circle cx="50" cy="50" r="38" stroke="#ea7035" strokeWidth="0.8" opacity="0.4" />
                {Array.from({ length: 24 }).map((_, i) => {
                  const angle = (i * 15 * Math.PI) / 180;
                  return (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={50 + 46 * Math.cos(angle)}
                      y2={50 + 46 * Math.sin(angle)}
                      stroke="#ea7035"
                      strokeWidth="0.9"
                      opacity="0.45"
                    />
                  );
                })}
              </svg>
            </div>
            <div className="hero-frame">
              <img src={IMAGES.heroGarba} alt="Celebrate with purpose - Navratri Raas Garba" />
            </div>
            <div className="hero-sticker">
              <span>CELEBRATE</span>
              <strong>with<br />purpose</strong>
              <ArrowDownRight size={22} />
            </div>
          </div>
        </section>

        <div className="quick-paths" aria-label="Choose your way to participate">
          <button className="path-card path-donate" onClick={() => scrollToId("donate")}><span className="path-icon"><Heart size={23} fill="currentColor" /></span><span><small>Make a difference</small><strong>Donate now</strong></span><ArrowUpRight /></button>
          <button className="path-card path-sponsor" onClick={() => scrollToId("sponsor")}><span className="path-icon"><UsersRound size={23} /></span><span><small>Stand behind the night</small><strong>Become a sponsor</strong></span><ArrowUpRight /></button>
          <button className="path-card path-ticket" onClick={() => scrollToId("tickets")}><span className="path-icon"><Ticket size={23} /></span><span><small>Join the celebration</small><strong>Get your pass</strong></span><ArrowUpRight /></button>
        </div>

        <section className="story-section" id="why">
          <RaasMark className="section-stamp story-stamp" />
          <div className="section-kicker">01 / the emotional bridge</div>
          <div className="story-grid">
            <div className="story-heading"><h2>You're coming to celebrate.<br /><i>Why not make</i> your celebration mean more?</h2><div className="brush-line" /></div>
            <div className="story-copy"><p>Garba brings us together. It reminds us of home, of family, of traditions passed from one generation to the next.</p><p>This year, let that feeling travel a little farther.</p><p>Your celebration can help support children in India — giving them opportunities to learn, grow and dream of a better tomorrow.</p><button className="inline-cta" onClick={() => scrollToId("donate")}>Make my celebration count <ChevronRight size={18} /></button></div>
          </div>
          <div className="video-card">
            <img src={IMAGES.childrenHope} alt="Your celebration can change a life - A little more than a night out" />
          </div>
        </section>

        <section className="cause-section">
          <div className="cause-image"><img src={IMAGES.causeEducation} alt="Children in classroom receiving education" /></div>
          <div className="cause-copy"><div className="section-kicker">02 / the cause</div><h2>One community.<br /><span>Thousands of futures.</span></h2><p>Through Care for Children, the Art of Living Foundation supports educational initiatives for children in underserved communities in India.</p><a className="cause-link" href="https://careforchildren.org" target="_blank" rel="noreferrer">Learn more at careforchildren.org <ArrowUpRight size={16} /></a><div className="impact-row"><div><strong>1,356</strong><span>Schools</span></div><div><strong>120,000</strong><span>Students</span></div></div><button className="button button-dark" onClick={() => scrollToId("donate")}>Help support the cause <ArrowUpRight size={18} /></button></div>
        </section>

        <section className="donation-section" id="donate">
          <RaasMark className="section-stamp donation-stamp" />
          <div className="donation-intro"><div className="section-kicker">03 / give with meaning</div><h2>How much would<br /><i>you like to give?</i></h2><p>Every contribution matters. Choose an amount that feels right for you.</p><div className="donation-note"><Heart size={18} fill="currentColor" /> No gift is too small to count.</div></div>
          <div className="donation-panel"><div className="donation-options">{donationOptions.map((option) => <button key={option.amount} className={selectedDonation === option.amount ? "donation-option selected" : "donation-option"} onClick={() => setSelectedDonation(option.amount)}>{option.badge && <span className="option-badge">{option.badge}</span>}<span className="option-amount">{option.amount === "other" ? "—" : `$${option.amount}`}</span><span className="option-label">{option.label}</span>{selectedDonation === option.amount && <span className="selected-check"><Check size={14} /></span>}</button>)}</div>{selectedDonation === "other" && <label className="other-input">Enter your amount<input type="number" min="1" value={otherAmount} onChange={(event) => setOtherAmount(Number(event.target.value))} aria-label="Donation amount" /></label>}<div className="donation-selected"><span>You're choosing</span><strong>${activeAmount || 0}</strong><p>{selected.note}</p></div><button className="button button-primary full-button" onClick={() => window.alert(`Donation checkout placeholder: $${activeAmount}. Connect this action to Zeffy.`)}>Donate ${activeAmount || 0} <ArrowUpRight size={18} /></button><small className="checkout-note">Secure checkout will connect to Zeffy.</small></div>
        </section>

        <section className="day-section"><div className="day-mark">365</div><div><div className="section-kicker">a simple idea, gathered over time</div><h2>What if giving could be<br /><span>as simple as $1 a day?</span></h2><p>$1 may feel small. But repeated every day, it becomes $365 a year. A simple habit of giving can turn into something meaningful.</p><button className="button button-light" onClick={() => { setSelectedDonation("365"); scrollToId("donate"); }}>Start my $1-a-day gift <ArrowUpRight size={18} /></button><small>One-time $365 contribution · clearly labelled at checkout</small></div></section>

        <section className="tickets-section" id="tickets"><div className="section-stamp ticket-stamp-mark"><RaasMark className="brand-mark" /></div><div className="ticket-art"><img src={IMAGES.ticketGarba} alt="Vibrant Navratri Raas Garba celebration" /><div className="ticket-stamp">come<br /><strong>dance</strong></div></div><div className="ticket-copy"><div className="section-kicker">04 / join the night</div><h2>Come for the Garba.<br /><i>Stay for the cause.</i></h2><div className="ticket-details"><span><CalendarDays size={20} /><b>October 16, 2026</b></span><span><MapPin size={20} /><b>Old Bridge High School</b><small>4209 County Rd 516 · Matawan, NJ 07747</small></span></div><div className="ticket-price"><span>Event pass <small>includes light food</small></span><strong>$30</strong></div><button className="button button-dark full-button" onClick={() => window.alert("Ticket checkout placeholder: connect this action to Zeffy.")}>Get your pass <ArrowUpRight size={18} /></button><p className="ticket-upsell">Want to make your night mean even more? <button onClick={() => scrollToId("donate")}>Add a donation with your pass.</button></p></div></section>

        <section className="sponsor-section" id="sponsor"><div className="sponsor-copy"><div className="section-kicker">05 / grow the circle</div><h2>Put your name<br /><span>behind the night.</span></h2><p>Help bring a meaningful cultural celebration to life while standing with a cause that reaches children in India.</p><button className="button button-primary" onClick={() => window.alert("Sponsorship inquiry placeholder: connect this to WhatsApp.")}>Become a sponsor <ArrowUpRight size={18} /></button><button className="volunteer-link" onClick={() => window.alert("Volunteer inquiry placeholder: connect this to WhatsApp.")}>Join as a volunteer <ArrowUpRight size={16} /></button></div><div className="sponsor-art"><img src={IMAGES.communitySponsor} alt="Community planning together - A celebration that travels farther" /></div></section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><RaasMark className="brand-mark" /><span><strong>NAVRATRI RAAS GARBA</strong><small>Celebrate with purpose · 2026</small></span></div><p>One night. One community.<br />A little more hope.</p><div className="footer-links"><a href="#donate">Donate</a><a href="#sponsor">Sponsor</a><a href="#tickets">Tickets</a></div></footer>
      <div className="mobile-sticky"><button onClick={() => scrollToId("tickets")}><Ticket size={17} /> Get your pass</button><button onClick={() => scrollToId("donate")}><Heart size={17} fill="currentColor" /> Donate</button></div>
    </div>
  );
}
