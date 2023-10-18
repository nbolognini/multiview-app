import React from 'react'
import ReactPlayer from 'react-player'

import { Titulo } from "./estilosJS/Titulo";
import { Contenedor } from "./estilosJS/Contenedor";
import { Contenedor_Senales } from "./estilosJS/Contenedor_Senales";
import { Senales } from "./estilosJS/Senales";



const Latinatv = () =>{
    return <div>  
		<Contenedor>	
			<Contenedor_Senales>
				<Senales>
					<Titulo>
						LatinaTV
						<br></br>
						HLS (nebula)<br></br><br></br>
						<ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/radiolatinahls/main.m3u8' />					
                    </Titulo>
				</Senales>

				<Senales>
					<Titulo>
						LatinaTV
						<br></br>
						HLS (wowza)<br></br><br></br>
						<ReactPlayer controls muted playing width="264" height="198"   url='http://live-edge01.telecentro.net.ar/live/smil:rltn.smil/playlist.m3u8' />					
                    </Titulo>
				</Senales>

				<Senales>
					<Titulo>
                        LatinaTV
						<br></br>
						(Twitch)
					<iframe src="https://player.twitch.tv/?channel=radiolatina1011&parent=http://localhost" frameborder="0" allowfullscreen="true" scrolling="no" width="261" height="160"></iframe>

					</Titulo>
				</Senales>

				<Senales>
					<Titulo>
                        
						<br></br>
										
					</Titulo>
				</Senales>

				<Senales>
					<Titulo>
						RadioLatina
						<br></br>
						(Audio) HLS<br></br><br></br>
						<ReactPlayer controls muted={0} playing={0} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/latinatvhls/main.m3u8' />					
                    </Titulo>
				</Senales>

                <Senales>
					<Titulo>
                        RadioLatina
						<br></br>
						(Baja calidad) IceCast
						<iframe src="http://streaming.latina101.com.ar:8080/RadioLatina" width="261" height="188"></iframe>
					</Titulo>
				</Senales>

				<Senales>
					<Titulo>
                        RadioLatina
						<br></br>
						(Alta calidad) IceCast
						<iframe src="http://streaming.latina101.com.ar:9000/Repetidoras" width="261" height="188"></iframe>
					</Titulo>
				</Senales>

			</Contenedor_Senales>
		</Contenedor>	

    </div>
   }   
   export default Latinatv;