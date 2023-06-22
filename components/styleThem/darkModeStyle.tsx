const DarkModeStyle = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <style jsx global>{`
        .bg-container {
          background-color: ${darkMode ? '#171717' : '#fff'};
        }
        .them-navbar-search {
          filter: ${darkMode && 'invert(0.8)'};
        }
        .them-navbar-items, 
        .them-home-trending-items, 
        .them-footer, 
        .them-footer-email, 
        .them-input,
        .them-register-input, 
        .them-cart-input,
        .them-dashboard-profile-items,
        .them-contact-input,
        .them-category-list,
        .them-navbar-search-btn {
          filter: ${darkMode && 'invert(1)'};
        }
        .them-profile-btn {
          ${darkMode && 'color: #b0b0b0;'}
        }
        .them-profile-btn-mobile {
          ${darkMode && 'color: #1f1f1f;'}
        }
        .them-home-header {
          color: ${darkMode ? '#00000080' : '#f6f6f680'};
        }
        .them-home-header-btn {
          background-color: ${darkMode ? '#242323' : '#dd0426'};
        }
        .them-home-header-text {
          ${darkMode && 'color: #fff;'}
        }
        .them-home-header-nav {
          background-color: ${darkMode ? '#424242' : '#FFF5F1'};
        }
        .them-home-trending-title, 
        .them-home-collection-title, 
        .them-home-onSale-title, 
        .them-home-popular-title, 
        .them-register-title, 
        .them-cart-title,
        .them-dashboard-profile-title,
        .them-dashboard-order-title,
        .them-dashboard-order,
        .them-dashboard-message-title,
        .them-category-filter-title,
        .them-category-list-title {
          ${darkMode && 'color: #fff;'}
        }
        .them-cart-bg, .them-smallCart-bg:hover {
          background-color: ${darkMode ? '#424242' : '#f6f6f6'};
        }
        .them-cart-price, .them-smallCart-price {
          ${darkMode && 'color: #ffffffe0;'}
        }
        .them-home-collection-bg {
          background-color: ${darkMode ? '#fedce1b5' : '#fedce1'};
        }
        .them-home-btn {
          ${darkMode && 'color: #a2a2a2;'}
        }
        .them-home-btn:hover {
          background-color: ${darkMode ? '#212121' : '#fff'};
        }
        .them-home-onSale-bg {
          background-color: ${darkMode ? '#1f1f1f' : '#FFF5F1'};
        }
        .them-home-popular-card-bgOne {
          background-color: ${darkMode ? '#383132' : '#FFE5E6'};
        }
        .them-home-popular-card-bgTwo {
          background-color: ${darkMode ? '#4d4a42' : '#F3EED9'};
        }
        .them-home-popular-card-title {
          ${darkMode ?
        'color: #e0e0e0; text-shadow: "black 0px 0px 10px";'
        :
        'text-shadow: "0px 0px 10px white"'}
        }
        .them-register-bg {
          background-color: ${darkMode ? '#1f1f1f' : '#f6f6f6'};
        }
        .them-register-color, .them-detail-color, .them-cart-stepper {
          ${darkMode && 'color: silver;'}
        }
        .them-detail-tab-color {
          color: ${darkMode ? 'silver' : '#424242'};
        }
        .them-contact-title {
          color: ${darkMode ? '#fff' : 'black'};
        }
        .them-contact-bg, .them-dashboard-menu {
          background-color: ${darkMode ? '#1f1f1f' : '#ececec'};
        }
        .them-cart-item, 
        .them-cart-order, 
        .them-cart-address-phone, 
        .them-dashboard-menu-item,
        .them-dashboard-logout,
        .them-category-filter,
        .them-category-tab {
          ${darkMode && 'color: #d8d8d8;'}
        }
        .them-dashboard-profile-input {
          ${darkMode && 'background-color: #1f1f1f;'}
        }
        .them-dashboard-menu-mobile {
          filter: ${darkMode && 'brightness(0.3)'};
          color: ${darkMode && 'black'};
        }
        .them-category-filter-price {
          ${darkMode && 'background: #424242;'}
          ${darkMode && 'color: #fff;'}
        }
        `}</style>
  )
}

export default DarkModeStyle