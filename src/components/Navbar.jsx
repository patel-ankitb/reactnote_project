import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
//     <nav class="navbar navbar-expand-lg navbar-blue bg-red styles">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <Link class="nav-link" to="/amazonhome">Home </Link>
//       </li>
//       <li class="nav-item">
//         <Link class="nav-link" to="/amazonproduct">Products</Link>
//       </li>   
//     </ul>
    
//   </div>
// </nav>
<nav style={styles.nav}>
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.navItem}>Navbar</Link></li>
        <li><Link to="/amazonhome" style={styles.navItem}>Home</Link></li>
        <li><Link to="/amazonproduct" style={styles.navItem}>Product</Link></li>
        {/* <li><Link to="/contact" style={styles.navItem}>Contact</Link></li> */}
        <li>  <Link  to="/fromdemo1"style={styles.navItem}>formdemo1</Link></li>&nbsp;&nbsp;
      <li><Link to="/fromdemo2" style={styles.navItem}>fromdemo2</Link></li>
      <li><Link to="/apidemo1" style={styles.navItem}>API DEMO 1</Link></li>
      <li><Link to="/omdb" style={styles.navItem}>OMDB</Link></li>
      <li><Link to="/useeffect" style={styles.navItem}>useeffect</Link></li>
      </ul>
    </nav>
  )
}

const styles = {
    nav: {
      backgroundColor: '#333',
      padding: '1rem',
    },
    navList: {
      display: 'flex',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
    navItem: {
      color: 'white',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
    },
  };