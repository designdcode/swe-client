import React, { useEffect } from 'react';

const { kakao } = window;

const Marker = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
	>
		<path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
	</svg>
);

const Map = () => {
	useEffect(() => {
		const container: HTMLElement = document.getElementById('map') as HTMLElement;
		const options: kakao.maps.MapOptions = {
			center: new kakao.maps.LatLng(36.80028982700267, 127.07714923339945),
			level: 3
		}
		const map = new kakao.maps.Map(container, options)
		const markerOption: kakao.maps.MarkerOptions = {
			map,
			position: new kakao.maps.LatLng(36.80028982700267, 127.07714923339945)
		}

		new kakao.maps.Marker(markerOption);
	}, [])
	return (
		<div id="map" style={{ width: '500px', height: '500px' }}>
			<Marker />
		</div>
	)
}

export default Map