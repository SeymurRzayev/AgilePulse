import React, { useState, useEffect, useCallback } from "react";
import type { FC } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logoWithOutTitle.svg";
import loginIcon768 from "../../assets/images/login-768.svg"
import { useAppDispatch, useAppSelector } from "../../redux/hooks/Hooks";
import loginAvatar from '../../assets/icons/loginAvatar.svg'
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { userLogout } from "../../redux/slices/authSlice";
import Swal from "sweetalert2";
import OutlineBtn from "../../components/Butttons/OutlineBtn";
interface NavLinkItem {
  path: string;
  label: string;
  icon?: React.ReactNode;
}

interface NavbarProps {
  brandName?: string;
  logoOnly?: boolean;
  transparentBg?: boolean;
  className?: string;
}

const Navbar: FC<NavbarProps> = ({
  brandName = "AgilePulse",
  logoOnly = false,
  transparentBg = true,
  className = "",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const location = useLocation();
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const user = useAppSelector(state => state.auth.user)
  const [openDropDown, setOpenDropDown] = useState<boolean>(false)
  // Navigation links configuration
  const navLinks: NavLinkItem[] = [
    ...(isLoggedIn && isMenuOpen
      ? [{ path: "/personal-cabinet", label: "Şəxsi kabinetim" }]
      : []),
    {
      path: "/",
      label: "Ana səhifə",
    },
    {
      path: "/trainings",
      label: "Təlimlər",
    },
    {
      path: "/exams",
      label: "İmtahanlar",
    },
    {
      path: "/about",
      label: "Haqqımızda",
    },
    {
      path: "#",
      label: "Akademiya",
    }

  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMenuOpen &&
        !target.closest(`.${styles.sidebar}`) &&
        !target.closest(`.${styles.hamburger}`)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleLogOut = () => {
    Swal.fire({
      title: 'Çıxış etmək istədiyinizə əminsiniz?',
      text: "Sessiyanız bağlanacaq.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Bəli, çıxış et',
      cancelButtonText: 'İmtina'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(userLogout());
      }
    });
  };

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // AgilePulse Logo PNG component
  const AgilePulseLogo: FC<{ size?: number }> = () => (
    <>
      <img src={logo} alt="Logo" />
    </>
  );

  return (
    <nav
      className={`${styles.navbar}  ${transparentBg ? styles.transparentBg : ""} ${className}`}
      aria-label="Main navigation"
    >
      <div
        className={`${styles.container}`}
      >
        {/* Logo */}
        <Link
          to="/"
          className={styles.logoLink}
          aria-label={`${brandName} home`}
        >
          <div className={styles.logo}>
            <AgilePulseLogo />
            <span>{brandName}</span>
          </div>
        </Link>

        {/* Hamburger Menu Icon */}
        {!logoOnly && (
          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            type="button"
          >
            <div
              className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLine1Active : ""
                }`}
            ></div>
            <div
              className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLine2Active : ""
                }`}
            ></div>
            <div
              className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLine3Active : ""
                }`}
            ></div>
          </button>
        )}

        {/* Desktop Navigation Links */}
        {!logoOnly && (
          <div className={`${styles.links} flex justify-center items-center gap-[10px] `}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                end={link.path === "/"}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}

        {/* Desktop Action Buttons */}

        {!logoOnly && (
          <div className={`${styles.actions}`}>
            {isLoggedIn
              ?
              <div className="flex flex-col relative">

                <button
                  onClick={() => setOpenDropDown(prev => !prev)}
                  className="bg-[#2C4B9B] rounded-4xl py-2 px-3 flex items-center gap-1 cursor-pointer"
                >
                  <span className="bg-white rounded-full">
                    <img src={user?.profileImage ? user?.profileImage : loginAvatar} alt="loginAvatar" className="cursor-pointer w-[30px] h-[30px] object-cover rounded-full" />
                  </span>
                  {
                    <span
                      className={`transition-transform duration-300 ${openDropDown ? 'rotate-180' : ''
                        }`}
                    >
                      <IoIosArrowDown color="white" size={20} />
                    </span>
                  }

                </button>

                <ul
                  className={`
                      absolute top-[50px] right-0 px-3 space-y-2 py-5 rounded-lg bg-amber-50 w-[250px]
                      transition-all duration-300 ease-in-out
                      transform 
                      ${openDropDown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}
                `}
                >
                  <li onClick={() => navigate("/personal-cabinet")} className="flex items-center gap-3 text-lg text-[#122041] font-[Corbel] cursor-pointer font-normal">
                    <span className="bg-[#CCC] rounded-full p-2">
                      <IoSettingsOutline size={25} />
                    </span>
                    Hesabım
                  </li>
                  <li onClick={handleLogOut} className="flex items-center gap-3 text-lg text-[#122041] font-[Corbel] cursor-pointer font-normal">
                    <span className="bg-red-100 rounded-full p-2">
                      <FiLogOut size={25} />
                    </span>
                    Çıxış
                  </li>
                </ul>
              </div>
              : (
                <>
                  <div className=" hidden lg:flex gap-4">
                    <NavLink
                      to="/sign-up"
                      className={({ isActive }) =>
                        `${styles.button} ${styles.colorBtn} ${isActive ? styles.active : ""
                        }`
                      }
                    >
                      Qeydiyyat
                    </NavLink>
                    <NavLink
                      to={`/sign-in?redirect=${encodeURIComponent(location.pathname)}`}
                      className={({ isActive }) =>
                        `${styles.button} ${styles.outlineBtn} ${isActive ? styles.active : ""
                        }`
                      }
                    >
                      Daxil ol
                    </NavLink>

                  </div>

                  <div className="flex lg:hidden ">
                    <NavLink
                      to={`/sign-in?redirect=${encodeURIComponent(location.pathname)}`}
                      className={({ isActive }) =>
                        ` ${isActive ? `${styles.active}` : ""
                        }`
                      }
                    >
                      <img src={loginIcon768} alt="" className="w-[35px]" />
                    </NavLink>
                  </div></>
              )}
          </div>
        )
        }


        {/* Mobile Sidebar Menu */}
        {!logoOnly && (
          <>
            <div
              className={`${styles.sidebar} ${isMenuOpen ? styles.sidebarOpen : ""
                }`}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className={styles.sidebarContent}>
                <div className={styles.sidebarHeader}>
                  <Link
                    to="/"
                    className={styles.logoLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className={styles.logo}>
                      <AgilePulseLogo />
                      <span>{brandName}</span>
                    </div>
                  </Link>
                  <button
                    className={styles.closeButton}
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                    type="button"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L6 18"
                        stroke="#1E3A8A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 6L18 18"
                        stroke="#1E3A8A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <nav className={styles.sidebarNav}>
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `${styles.sidebarLink} ${isActive ? styles.active : ""}`
                      }
                      onClick={() => setIsMenuOpen(false)}
                      end={link.path === "/"}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>

                {!isLoggedIn
                  ? (
                    <div className={styles.sidebarActions}>
                      <NavLink
                        to="/sign-up"
                        className={({ isActive }) =>
                          `${styles.sidebarButton} ${styles.sidebarColorBtn} ${isActive ? styles.active : ""
                          }`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Qeydiyyat
                      </NavLink>
                      <NavLink
                        to={`/sign-in?redirect=${encodeURIComponent(location.pathname)}`}
                        className={({ isActive }) =>
                          `${styles.sidebarButton} ${styles.sidebarOutlineBtn} ${isActive ? styles.active : ""
                          }`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Daxil ol
                      </NavLink>
                    </div>
                  )
                  : (
                    <OutlineBtn
                      text="Çıxış"
                      onClick={() => handleLogOut()}
                      buttonClassName="py-2"
                    />
                  )
                }
              </div>
            </div>

            {/* Overlay when menu is open */}
            <div
              className={`${styles.overlay} ${isMenuOpen ? styles.overlayVisible : ""
                }`}
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            ></div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
