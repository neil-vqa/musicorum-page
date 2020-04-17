var mymap = L.map('store-location').setView([8.946, 125.52], 15);

		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmVpbHRoZWdyZWF0ZXN0IiwiYSI6ImNrM2ZqMmhvNjAzN2QzbW5uaHQyamo5NGkifQ.l53kgbZcDGY8U8xHkSWv0w', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
				'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1
		}).addTo(mymap);

		L.marker([8.9460, 125.5207]).addTo(mymap)
		.bindPopup("<b>Our store is here!</b><br><p><b>The Product Inc.</b><br>Lorem Building<br>Ipsum Street</p>").openPopup();
