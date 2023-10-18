export function setupHlsPlayer(videoId, sourceUrl) {
	var video = document.getElementById(videoId);

      	if (Hls.isSupported()) {
        var hls = new Hls();
        hls.attachMedia(video);
        hls.loadSource(sourceUrl);
        hls.on(Hls.Events.MANIFEST_PARSED,
	function () {
        video.stop(); }
	);}
	else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = sourceUrl;
        video.stop();
      	}
}
