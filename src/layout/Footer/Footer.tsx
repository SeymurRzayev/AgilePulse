import { useState } from "react";
import type { FC } from "react";
import logo from "../../assets/images/logoWithOutTitle.svg";
import linkedin_icon from "../../assets/images/sosialLogo/linkedin_icon.png";
import instagram_icon from "../../assets/images/sosialLogo/instagram_icon.png";
import telegram_icon from "../../assets/images/sosialLogo/telegram_icon.png";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const navMenu = [
  { label: "Haqqımızda", path: "/about" },
  { label: "FAQ", path: "/#2" },
  { label: "Təklif və şikayətlər", path: "/#3" },
];

const socialNetworksLinks = [
  {
    icon: linkedin_icon,
    path: "https://www.linkedin.com/company/agile-pulse/",
    alt: "LinkedIn",
  },
  {
    icon: instagram_icon,
    path: "https://www.instagram.com/_agilepulse_?igsh=MWhscGZkeThtbTc2Yw%3D%3D&utm_source=qr",
    alt: "Instagram",
  },
  {
    icon: telegram_icon,
    path: "https://t.me/+sBTn9sliGyFlYTFi",
    alt: "Telegram",
  },
];

const Footer: FC = () => {
  const [email, setEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [showError, setShowError] = useState(false);
const handleSubscribe = () => {
  const trimmedEmail = email.trim();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(trimmedEmail)) {
    setIsInvalid(true);
    setShowError(true);
    return;
  }

  setIsInvalid(false);
  setShowError(false);

  console.log("Email submitted:", trimmedEmail);
  setEmail("");
  alert("Mesajınız uğurla göndərildi.");
};
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.logo}>
            <img src={logo} alt="Agile Pulse" />
            <span>Agile Pulse</span>
          </div>
          <div className={styles.subscribeContainer}>
          
            <div className={styles.subscribe}>
              <span>Yeniliklərdən xəbərdar olmaq üçün Abunə Ol</span>
              <div
                className={`${styles.input} ${isInvalid ? styles.invalid : ""}`}
              >
                <input type="email" 
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.sendInput}
                />
                <button className={styles.sendBtn} onClick={handleSubscribe}>
                  Göndər
                </button>
              </div>
            
            </div>
            <div className={styles.errorContainer}>
              {showError && (
                <p className={styles.errorText}>
                  Düzgün e-mail formatı daxil edin.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <ul className={styles.navmenu}>
            {navMenu.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className={styles.socials}>
            <span>Bizi izləyin</span>
            <ul className={styles.socialIcons}>
              {socialNetworksLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} target="_blank" className={styles.link}>
                    <img
                      src={link.icon}
                      alt={link.alt}
                      className={styles.socialIcon}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ul className={styles.bottomLine}>
        <li>
          <Link to="/#"> Müəllif hüquqları qorunur </Link>
        </li>
        <li>
          <span> Agile Pulse 2025</span>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
