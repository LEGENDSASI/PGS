import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo/PGS_GROUPS_LOGO.png';
import pgsstays from '../assets/logo/PGS_STAYS_LOGO.png';
import pgsholidays from '../assets/logo/PGS_HOLIDAYS_LOGO.png';
import pgsevents from '../assets/logo/PGS_EVENTS_LOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Get current logo based on path
  const getCurrentLogo = () => {
    const path = location.pathname;
    if (path === '/pgs-stays' || path.includes('/pgs-stays')) {
      return pgsstays;
    } else if (path === '/pgs-holidays' || path.includes('/pgs-holidays')) {
      return pgsholidays;
    } else if (path === '/pgs-events' || path.includes('/pgs-events')) {
      return pgsevents;
    }
    return logo;
  };

  // Navigation items structure
  const navItems = [
    {
      id: 'home',
      name: 'Home',
      type: 'link',
      action: () => {
        if (location.pathname !== '/') {
          navigate('/');
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 100);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsOpen(false);
        setActiveDropdown(null);
      }
    },
    {
      id: 'about',
      name: 'About Us',
      type: 'dropdown',
      items: [
        {
          name: 'Our Team',
          action: () => navigateToPage('/our-team')
        }
      ]
    },
    {
      id: 'branches',
      name: 'Our Branches',
      type: 'dropdown',
      items: [
        {
          name: 'PGS Stays',
          path: '/pgs-stays',
          action: () => navigateToPage('/pgs-stays')
        },
        {
          name: 'PGS Holidays',
          path: '/pgs-holidays',
          action: () => navigateToPage('/pgs-holidays')
        },
        {
          name: 'PGS Events',
          path: '/pgs-events',
          action: () => navigateToPage('/pgs-events')
        }
      ]
    },
    {
      id: 'contact',
      name: 'Contact Us',
      type: 'link',
      path: '/contact-us',
      action: () => navigateToPage('/contact-us')
    },
  ];

  // Handle scroll to section
  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 200);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  // Navigate to page
  const navigateToPage = (path) => {
    navigate(path);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  // Check active state
  const isActive = (item) => {
    if (item.id === 'home') {
      return location.pathname === '/' && !location.hash;
    }

    if (item.id === 'about') {
      const hash = location.hash;
      return location.pathname === '/' && (hash === '#about' || hash === '#team');
    }

    if (item.id === 'branches') {
      return location.pathname.includes('/pgs-');
    }

    return false;
  };

  // Check if specific branch is active
  const isBranchActive = (path) => {
    return location.pathname === path || location.pathname.includes(path);
  };

  // Toggle dropdown in mobile - FIXED FUNCTION
  const toggleMobileDropdown = (itemId, e) => {
    if (e) {
      e.stopPropagation();
    }
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  // Close dropdown when clicking outside - FIXED VERSION
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Don't close if clicking on dropdown items or menu button
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest('[data-dropdown-item]') &&
        !event.target.closest('[data-dropdown-button]')
      ) {
        setActiveDropdown(null);
      }
      
      // Close mobile menu when clicking outside
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('[data-menu-button]')
      ) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Desktop navigation
  const renderDesktopNav = () => (
    <div className="hidden md:flex items-center space-x-1">
      {navItems.map((item) => {
        if (item.type === 'link') {
          return (
            <button
              key={item.id}
              onClick={item.action}
              className={`px-4 py-3 text-lg font-medium cursor-pointer transition-all duration-300 relative group ${isActive(item) ? 'text-primary' : ''
                }`}
              style={{
                color: isActive(item)
                  ? 'hsl(var(--color-primary))'
                  : 'hsl(var(--color-text))'
              }}
              onMouseEnter={(e) => {
                if (!isActive(item)) {
                  e.currentTarget.style.color = 'hsl(var(--color-primary))';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(item)) {
                  e.currentTarget.style.color = 'hsl(var(--color-text))';
                }
              }}
            >
              {item.name}
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 ${isActive(item) ? 'w-3/4' : 'group-hover:w-3/4'
                }`}></span>
            </button>
          );
        }

        if (item.type === 'dropdown') {
          return (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => {
                  if (item.id === 'about') {
                    handleScrollToSection('about');
                  } else {
                    setActiveDropdown(activeDropdown === item.id ? null : item.id);
                  }
                }}
                className={`px-4 py-3 text-lg font-medium cursor-pointer transition-all duration-300 flex items-center gap-1 relative group ${isActive(item) ? 'text-primary' : ''
                  }`}
                style={{
                  color: isActive(item)
                    ? 'hsl(var(--color-primary))'
                    : 'hsl(var(--color-text))'
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item)) {
                    e.currentTarget.style.color = 'hsl(var(--color-primary))';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item)) {
                    e.currentTarget.style.color = 'hsl(var(--color-text))';
                  }
                }}
              >
                {item.name}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''
                  }`} />
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 ${isActive(item) ? 'w-3/4' : 'group-hover:w-3/4'
                  }`}></span>
              </button>

              {/* Dropdown menu */}
              {activeDropdown === item.id && item.items && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-0 w-60 shadow-lg z-50 rounded-md"
                  style={{
                    backgroundColor: 'hsl(var(--color-bg))',
                    border: '1px solid hsl(var(--color-border))',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                  onMouseEnter={() => setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.items.map((subItem, index) => (
                    <button
                      key={index}
                      data-dropdown-item
                      onClick={subItem.action}
                      className={`w-full text-left px-4 py-3 transition-all duration-200 flex items-center text-lg ${item.id === 'branches' && isBranchActive(subItem.path)
                          ? 'bg-primary bg-opacity-10 text-primary'
                          : 'hover:bg-primary hover:bg-opacity-10 hover:text-primary cursor-pointer'
                        }`}
                      style={{
                        color: item.id === 'branches' && isBranchActive(subItem.path)
                          ? 'hsl(var(--color-primary))'
                          : 'hsl(var(--color-text))'
                      }}
                    >
                      <span className="flex-1">{subItem.name}</span>
                      {item.id === 'branches' && isBranchActive(subItem.path) && (
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        }
      })}
    </div>
  );

  // Mobile navigation - COMPLETELY FIXED VERSION
  const renderMobileNav = () => (
    <div 
      ref={mobileMenuRef}
      className="md:hidden border-t py-4"
      style={{
        borderColor: 'hsl(var(--color-border))',
        backgroundColor: 'hsl(var(--color-bg))'
      }}
      onClick={(e) => e.stopPropagation()} // Prevent click propagation
    >
      {navItems.map((item) => {
        if (item.type === 'link') {
          return (
            <button
              key={item.id}
              onClick={(e) => {
                e.stopPropagation();
                item.action();
              }}
              className={`w-full text-left font-medium text-lg py-3 px-4 rounded-lg my-1 ${isActive(item) ? 'bg-primary bg-opacity-10 text-primary' : ''
                }`}
              style={{
                color: isActive(item)
                  ? 'hsl(var(--color-primary))'
                  : 'hsl(var(--color-text))'
              }}
            >
              {item.name}
            </button>
          );
        }

        if (item.type === 'dropdown') {
          const isDropdownOpen = activeDropdown === item.id;
          
          return (
            <div 
              key={item.id} 
              className="my-1"
              onClick={(e) => e.stopPropagation()} // Prevent click propagation
            >
              <button
                data-dropdown-button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMobileDropdown(item.id, e);
                }}
                className={`w-full text-left font-medium py-3 px-4 rounded-lg text-lg flex justify-between items-center ${isActive(item) ? 'bg-primary bg-opacity-10 text-primary' : ''
                  }`}
                style={{
                  color: isActive(item)
                    ? 'hsl(var(--color-primary))'
                    : 'hsl(var(--color-text))'
                }}
              >
                <span>{item.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                  }`} />
              </button>

              {/* Dropdown items - FIXED: Proper click handling */}
              {isDropdownOpen && item.items && (
                <div 
                  className="pl-6 mt-1 space-y-1"
                  onClick={(e) => e.stopPropagation()} // Prevent click propagation
                >
                  {item.items.map((subItem, index) => (
                    <button
                      key={index}
                      data-dropdown-item
                      onClick={(e) => {
                        e.stopPropagation();
                        subItem.action();
                      }}
                      className={`w-full text-left py-3 px-4 rounded-lg font-medium text-lg ${item.id === 'branches' && isBranchActive(subItem.path)
                          ? 'bg-primary bg-opacity-20 text-primary'
                          : 'hover:bg-primary hover:bg-opacity-10'
                        }`}
                      style={{
                        color: item.id === 'branches' && isBranchActive(subItem.path)
                          ? 'hsl(var(--color-primary))'
                          : 'hsl(var(--color-text))'
                      }}
                    >
                      {subItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        }
      })}
    </div>
  );

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'hsl(var(--color-bg))',
        borderColor: 'hsl(var(--color-border))',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="focus:outline-none"
          >
            <img
              src={getCurrentLogo()}
              alt="PGS Group Logo"
              className="w-24 h-auto object-contain"
            />
          </button>

          {renderDesktopNav()}

          <div className="md:hidden">
            <button
              data-menu-button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg"
              style={{ color: 'hsl(var(--color-text))' }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && renderMobileNav()}
      </div>
    </nav>
  );
};

export default Navbar;