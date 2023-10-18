import React from 'react'
import ReactPlayer from 'react-player'
import { Titulo } from "./estilosJS/Titulo";
import { Contenedor } from "./estilosJS/Contenedor";
import { Contenedor_Senales } from "./estilosJS/Contenedor_Senales";
import { Senales } from "./estilosJS/Senales";

const Musictop = () =>{
    return <div>  
		<Contenedor>	
			<Contenedor_Senales>
				<Senales>
                    <Titulo>
						MusicTop
						<br></br>
						HLS (nebula)<br></br><br></br>
                        <ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/musictophls/main.m3u8' />					
                    </Titulo>
				</Senales>
				<Senales>
                    <Titulo>
						MusicTop
						<br></br>
						HLS (nebula)<br></br><br></br>
                        <ReactPlayer controls muted playing width="264" height="198"   url='http://live-edge01.telecentro.net.ar/live/smil:musictop.smil/playlist.m3u8' />					
                    </Titulo>
				</Senales>
			</Contenedor_Senales>
		</Contenedor>	
    </div>
   }   
   export default Musictop;