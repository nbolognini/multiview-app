import React from 'react'
import ReactPlayer from 'react-player'

import { Titulo } from "./estilosJS/Titulo";
import { Contenedor } from "./estilosJS/Contenedor";
import { Contenedor_Senales } from "./estilosJS/Contenedor_Senales";
import { Senales } from "./estilosJS/Senales";

const Telemax = () =>{
    return <div>  
		<Contenedor>	
			<Contenedor_Senales>
				<Senales>
					<Titulo>
						Telemax<br></br>
						HLS (nebula)<br></br><br></br>
						<ReactPlayer width="264" height="198" playing={true} muted={1} url='https://stream-gtlc.telecentro.net.ar/hls/telemaxhls/main.m3u8' />					</Titulo>
				</Senales>
				<Senales>
					<Titulo>
                        Telemax<br></br>
						HLS (wowza)<br></br><br></br>
						<ReactPlayer width="264" height="198" playing={true} muted={1} url='https://live-edge01.telecentro.net.ar/live/smil:tlx.smil/playlist.m3u8' />					</Titulo>
				</Senales>
			</Contenedor_Senales>
		</Contenedor>	


        </div>
   }   
   export default Telemax;