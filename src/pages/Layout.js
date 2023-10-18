import { useState } from 'react'

import React from 'react'
import ReactPlayer from 'react-player'
import { Senales } from "./estilosJS/Senales";
import { Outlet, Link } from "react-router-dom";
import { Button } from "./estilosJS/Buttons";
import { Titulo } from "./estilosJS/Titulo";
import { Contenedor } from "./estilosJS/Contenedor";
import { Menu } from "./estilosJS/Menu";
import img2 from './img/img2.jpg';
import { TextoMenu } from "./estilosJS/TextoMenu";

const Layout = () =>{

 	return (
 	<div>	
  	<Contenedor>	
		<Menu>
			<h3>Multiview Telecentro</h3>

				<br></br>
            	<Link to="/"style={{ color: 'white', textDecoration: 'none' }}>HOME</Link>
				<br></br>
				_____________
				<br></br>
				<br></br>
				<Link to="/Canal26" style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'red'} onMouseOut={(e) => e.target.style.color = 'white'}>
					Canal26</Link>

				<br></br>
				<br></br>
				<Link to="/Telemax" style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'red'} onMouseOut={(e) => e.target.style.color = 'white'}>
					Telemax</Link>

				<br></br>
				<br></br>
				<Link to="/Musictop" style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'red'} onMouseOut={(e) => e.target.style.color = 'white'}>
					MusicTop</Link>

				<br></br>
				<br></br>
				<Link to="/Tierramiatv" style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'red'} onMouseOut={(e) => e.target.style.color = 'white'}>
					TierraMia</Link>

				<br></br>
				<br></br>
				<Link to="/Tlcpreview" style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'red'} onMouseOut={(e) => e.target.style.color = 'white'}>
					TlcPreview</Link>

				<br></br>
				<br></br>
				<Link to="/Latinatv" style={{ color: 'white', textDecoration: 'none'}} onMouseOver={(e) => e.target.style.color = 'red'} onMouseOut={(e) => e.target.style.color = 'white'}>
					LatinaTv</Link>

				<br></br>
				<br></br>
				Canal 4K
				<br></br>
				_____________
				<br></br>
				<br></br>
				<Link to="/Wowza" style={{ color: 'white', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'red'} onMouseOut={(e) => e.target.style.color = 'white'}>
					HLS Wowza</Link>

				<br></br>
				<br></br>

		</Menu>	

		<Outlet />

  </Contenedor>	

 </div>


)

}

export default Layout;
