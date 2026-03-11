import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { menuItems, hours, stripItems } from "../data/menu";
import { ORDER_URL, getDirectionsUrl, INSTAGRAM_URL, FACEBOOK_URL } from "../data/constants";
import "../styles/global.css";

export default function BurgerSite() {
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    setTimeout(() => setHeroVisible(true), 200);
    setTimeout(() => setBgLoaded(true), 100);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-logo">355<span> BURGER</span></div>
        <button className="nav-order-btn" onClick={() => window.open(ORDER_URL, "_blank")}>
          Order Now
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div
          className={`hero-bg ${bgLoaded ? "loaded" : ""}`}
          style={{ backgroundImage: "url('/assets/images/main image.png')" }}
        />
        <div className="hero-grain" />
        <div className="hero-gradient" />
        <div className={`hero-content ${heroVisible ? "visible" : ""}`}>
          <p className="hero-eyebrow">Sierra Madre, California</p>
          <h1 className="hero-title">
            We Just<br />Like It<br /><span>Classic.</span>
          </h1>
          <p className="hero-subtitle">
            Family owned and operated. Simple menu, done right. The burger Sierra Madre didn't know it was missing.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => window.open(ORDER_URL, "_blank")}>
              Order Online
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById("menu").scrollIntoView({ behavior: "smooth" })}>
              See Menu
            </button>
          </div>
        </div>
        <div className="hero-badge" onClick={() => setAboutOpen(true)}>
          <div className="hero-badge-inner">FAMILY<br />OWNED<br />&<br />OPERATED</div>
        </div>
      </section>

      {/* STRIP */}
      <div className="strip">
        <div className="strip-inner">
          {[...stripItems, ...stripItems].map((item, i) => (
            <span key={i} className={`strip-item ${item === "•" ? "strip-dot" : ""}`}>{item}</span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-img-wrap">
          <img
            className="about-img"
            src="/assets/images/real burger.png"
            alt="Burger close up"
          />
          <div className="about-img-accent" />
        </div>
        <div>
          <p className="about-label">Our Story</p>
          <h2 className="about-title">Just<br />Damn Good<br />Burgers.</h2>
          <p className="about-text">
            355 Burger is Sierra Madre's neighborhood spot for classic California burgers done with intention. No gimmicks. No massive menu. Just fresh ingredients, a signature sauce, and a double patty that'll have you back the next day.
          </p>
          <p className="about-text">
            We opened because we believe Sierra Madre needed a good burger joint. Come find out why the locals are raving about us.
          </p>
          <div className="about-stat">
            <div>
              <div className="stat-num">2</div>
              <div className="stat-label">Patty Options</div>
            </div>
            <div>
              <div className="stat-num">4.7</div>
              <div className="stat-label">Yelp Rating</div>
            </div>
            <div>
              <div className="stat-num">1</div>
              <div className="stat-label">Signature Sauce</div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="menu-section" id="menu">
        <div className="section-header">
          <p className="section-label">What We Serve</p>
          <h2 className="section-title">The Menu</h2>
        </div>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div className="menu-card" key={item.name}>
              <img className="menu-card-img" src={item.img} alt={item.name} />
              <div className="menu-card-body">
                <div className="menu-card-name">{item.name}</div>
                <div className="menu-card-desc">{item.desc}</div>
                <div className="menu-card-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="menu-cta">
          <Link to="/menu" className="btn-secondary menu-link">See Full Menu &rarr;</Link>
        </div>
      </section>

      {/* HOURS + LOCATION */}
      <section className="hours-section" id="visit">
        <div>
          <p className="section-label">When We're Open</p>
          <h2 className="hours-title">Hours</h2>
          {hours.map((h) => (
            <div className="hours-row" key={h.day}>
              <span className="hours-day">{h.day}</span>
              <span className={`hours-time ${h.status}`}>{h.time}</span>
            </div>
          ))}
        </div>
        <div>
          <div className="location-box">
            <p className="location-label">Find Us</p>
            <div className="location-address">85 W Sierra Madre Blvd<br />Sierra Madre, CA</div>
            <div className="location-detail"><span>📍</span> Downtown Sierra Madre</div>
            <div className="location-detail"><span>🚗</span> Free parking lot across the street</div>
            <div className="location-detail"><span>♿</span> Wheelchair accessible</div>
            <div className="location-detail"><span>📱</span> Online ordering available</div>
            <button
              className="directions-btn"
              onClick={() => window.open(getDirectionsUrl(), "_blank")}
            >
              Get Directions →
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">355<span> BURGER</span></div>
        <div className="footer-copy">© 2025 355 Burger · Sierra Madre, CA</div>
        <div className="footer-social">
          <a href="tel:6268079570" className="social-link footer-phone">(626) 807-9570</a>
          <span className="social-link" onClick={() => window.open(INSTAGRAM_URL, "_blank")}>Instagram</span>
          <span className="social-link" onClick={() => window.open(FACEBOOK_URL, "_blank")}>Facebook</span>
          <span className="social-link" onClick={() => window.open(ORDER_URL, "_blank")}>Order</span>
        </div>
      </footer>

      {/* ABOUT US OVERLAY */}
      {aboutOpen && (
        <div className="about-overlay" onClick={() => setAboutOpen(false)}>
          <div className="about-overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="about-overlay-close" onClick={() => setAboutOpen(false)}>&times;</button>
            <p className="about-overlay-label">About Us</p>
            <h2 className="about-overlay-title">We Are<br />Sierra Madre.</h2>
            <img
              className="about-overlay-img"
              src="/assets/images/photo of the inside of 355 burger full.jpg"
              alt="Inside 355 Burger"
            />
            <p className="about-overlay-text">
              355 Burger is more than a burger joint — it's a love letter to Sierra Madre. We're a family-owned spot born out of a simple belief: this town deserves a damn good burger.
            </p>
            <p className="about-overlay-text">
              The road here wasn't easy. COVID shut us down before we could even get started, keeping our doors closed for years. Then, just as we found our footing, the Eaton Fire swept through our community and touched every one of us. But through it all, Sierra Madre showed up — for each other and for us.
            </p>
            <p className="about-overlay-text">
              We stand with this town because this town stood with us. We're proud to be here, proud to serve you, and proud to call Sierra Madre home.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
