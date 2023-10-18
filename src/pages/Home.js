import React from 'react'
import ReactPlayer from 'react-player'
import { Titulo } from "./estilosJS/Titulo";
import { Contenedor } from "./estilosJS/Contenedor";
import { Contenedor_Senales } from "./estilosJS/Contenedor_Senales";
import { Senales } from "./estilosJS/Senales";
import { Senales_C26 } from './estilosJS/Senales_C26';
import { Senales_Telemax } from './estilosJS/Senales_Telemax';
import { useState } from 'react'
import { Button } from './estilosJS/Buttons';

const Home = () =>{

	const [ruta, setRuta] = useState('https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
	const [playing, setPlaying] = useState(true);
	function pausar(playing){
			setPlaying(false)
			setRuta('https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&amp;autoplay=0&amp;mute=1&amp;enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share')
	};

    return <div>
         <Contenedor>	
			<Contenedor_Senales>
				<Senales_C26>
                    <Titulo>
                    Canal26 <br></br>
						Youtube
						<iframe width="264" height="198" src={ruta} allowfullscreen></iframe>
				    </Titulo>
				</Senales_C26>
                <Senales_C26>
					<Titulo>
						Canal26<br></br>
						HLS<br></br><br></br>
                        <ReactPlayer controls muted playing={playing} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/canal26hls/main.m3u8' />					
                    </Titulo>
				</Senales_C26>
				<Senales_C26>
					<Titulo>
						Canal26 Fifa Tv<br></br>
						HLS (opterCast)<br></br><br></br>
						<ReactPlayer controls muted playing={playing} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/fifatv/main.m3u8' />					
                    </Titulo>
				</Senales_C26>
				<Senales_Telemax>
					<Titulo>
						Telemax
						<br></br>
						HLS<br></br><br></br>
                        <ReactPlayer controls muted playing={playing} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/telemaxhls/main.m3u8' />					
                    </Titulo>
				</Senales_Telemax>
				<Senales>
                    <Titulo>
						MusicTop
						<br></br>
						HLS<br></br><br></br>
                        <ReactPlayer controls muted playing={playing} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/musictophls/main.m3u8' />					
                    </Titulo>
				</Senales>
				<Senales>
					<Titulo>
						TierraMia
						<br></br>
						HLS<br></br><br></br>
						<ReactPlayer controls muted playing={playing} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/tierramiahls/main.m3u8' />					
                    </Titulo>
				</Senales>
				<Senales>
					<Titulo>
						LatinaTV
						<br></br>
						HLS<br></br><br></br>
						<ReactPlayer controls muted playing={playing} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/latinatvhls/main.m3u8' />					
                    </Titulo>
				</Senales>
				<Senales>
					<Titulo>
						TlcPreview
						<br></br>
						HLS<br></br><br></br>
						<ReactPlayer controls muted playing={playing} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/telecentropreviewhls/main.m3u8' />					
                    </Titulo>
				</Senales>
			</Contenedor_Senales>
		</Contenedor>
	<Button  onClick={pausar}> Pausar todo</Button>
 </div>
}
export default Home;