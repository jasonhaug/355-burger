import { Link } from "react-router-dom";
import { ORDER_URL } from "../data/constants";
import "../styles/full-menu.css";

const menuItems = [
  { name: "HAMBURGER", description: "Lettuce, Tomato, & Burger Sauce", price: "$4.50" },
  { name: "CHEESE BURGER", description: "American Cheese", price: "$5.00" },
  { name: "DOUBLE BURGER", description: "Love Cheese? Ask for Cheese", price: "$6.50" },
  { name: "FRIES", price: "$4.00" },
  { name: "FOUNTAIN DRINK", price: "$2.49" },
  { name: "CHURRO", description: "Make it 2 for $5.00", price: "$3.00" },
];

const combos = [
  { number: "#1", price: "$9.99", items: ["Hamburger,", "Fries,", "& Drink"] },
  { number: "#2", price: "$10.49", items: ["Cheese Burger,", "Fries,", "Drink"], featured: true },
  { number: "#3", price: "$12.99", items: ["Double Cheese", "Double Burger,", "Fries, & Drink"] },
];

export default function FullMenu() {
  return (
    <div className="full-menu-page">
      <div className="full-menu-container">
        <div className="full-menu-outer">
          <div className="full-menu-inner">

            {/* Header */}
            <div className="fm-header">
              <img
                src="/assets/images/355-burger-logo.png"
                alt="355 Burger Logo"
                className="fm-logo"
              />
              <p className="fm-tagline">BURGERS &bull; FRIES &bull; DRINKS</p>
              <p className="fm-address">85 W. SIERRA MADRE BLVD., SIERRA MADRE, CA</p>
            </div>

            {/* Menu Title */}
            <div className="fm-title-wrap">
              <h2 className="fm-title">MENU</h2>
              <div className="fm-title-bar" />
            </div>

            {/* Menu Items */}
            <div className="fm-items">
              {menuItems.map((item) => (
                <div className="fm-item" key={item.name}>
                  <div className="fm-item-left">
                    <h3 className="fm-item-name">{item.name}</h3>
                    {item.description && (
                      <p className="fm-item-desc">{item.description}</p>
                    )}
                  </div>
                  <span className="fm-item-price">{item.price}</span>
                </div>
              ))}
            </div>

            {/* Combo Deals */}
            <div className="fm-combos">
              <div className="fm-onions">
                <p className="fm-onions-title">DO YOU LOVE ONIONS?</p>
                <p className="fm-onions-text">DON'T FORGET TO REQUEST RAW OR GRILL ONIONS ON YOUR BURGER</p>
              </div>
              <div className="fm-combo-grid">
                {combos.map((combo) => (
                  <div
                    className={`fm-combo ${combo.featured ? "fm-combo-featured" : ""}`}
                    key={combo.number}
                  >
                    <div className="fm-combo-header">
                      <span className="fm-combo-number">{combo.number}</span>
                      <span className="fm-combo-price">{combo.price}</span>
                    </div>
                    <div className="fm-combo-items">
                      {combo.items.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    {combo.featured && (
                      <img
                        src="/assets/images/burger-fries-illustration.png"
                        alt="Burger and Fries"
                        className="fm-combo-img"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Order + Back */}
            <div className="fm-actions">
              <button className="fm-order-btn" onClick={() => window.open(ORDER_URL, "_blank")}>
                Order Online
              </button>
              <Link to="/" className="fm-back-link">&larr; Back to Home</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
