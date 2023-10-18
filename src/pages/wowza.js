import React from 'react'
import ReactPlayer from 'react-player'
import { Titulo } from "./estilosJS/Titulo";
import { Contenedor } from "./estilosJS/Contenedor";
import { Contenedor_Senales } from "./estilosJS/Contenedor_Senales";
import { Senales } from "./estilosJS/Senales";

const wowza = () =>{
    return <div>
         <Contenedor>	
			<Contenedor_Senales>     
				<Senales>
                    <Titulo>
                    Canal26 <br></br>
					Youtube
						<iframe width="264" height="198" src="https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				    </Titulo>
				</Senales>
				<Senales>
					<Titulo>
						Telemax<br></br>
						HLS (wowza)<br></br><br></br>
						<ReactPlayer controls muted playing width="264" height="198"   url='http://live-edge01.telecentro.net.ar/live/smil:tlx.smil/playlist.m3u8' />					
                    </Titulo>
				</Senales>
				<Senales>
					<Titulo>
						MusicTop<br></br>
						HLS (wowza)<br></br><br></br>
						<ReactPlayer controls muted playing width="264" height="198"   url='http://live-edge01.telecentro.net.ar/live/smil:musictop.smil/playlist.m3u8' />					
                    </Titulo>
				</Senales>
				<Senales>
					<Titulo>
						Tierra Mia<br></br>
						HLS (wowza)<br></br><br></br>
						<ReactPlayer controls muted playing width="264" height="198"   url='http://live-edge01.telecentro.net.ar/live/smil:trm.smil/playlist.m3u8' />					
                    </Titulo>
				</Senales>
				<Senales>
					<Titulo>
						Latina Tv<br></br>
						HLS (wowza)<br></br><br></br>
						<ReactPlayer controls muted playing width="264" height="198"   url='http://live-edge01.telecentro.net.ar/live/smil:rltn.smil/playlist.m3u8' />					
                    </Titulo>
				</Senales>
				<Senales>
					<Titulo>
						Canal 26<br></br>
						HLS (wowza)<br></br><br></br>
						<ReactPlayer controls muted playing width="264" height="198"   url='http://live-edge01.telecentro.net.ar/live/smil:c26.smil/playlist.m3u8' />					
                    </Titulo>
				</Senales>
                <Senales>
					<Titulo>
                        Radio Latina
						<br></br>
						(Baja calidad) IceCast
						<iframe src="http://streaming.latina101.com.ar:8080/RadioLatina" width="261" height="188"></iframe>
					</Titulo>
				</Senales>
				<Senales>
					<Titulo>
                        LatinaTv
						<br></br>
						(Alta calidad) IceCast
						<iframe src="http://streaming.latina101.com.ar:9000/Repetidoras" width="261" height="188"></iframe>
					</Titulo>
				</Senales>
			</Contenedor_Senales>
		</Contenedor>
 </div>
}
export default wowza;