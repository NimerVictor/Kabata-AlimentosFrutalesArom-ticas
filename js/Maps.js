// Variables globales
let map, infoWindow, directionsService, directionsRenderer;
let userMarker; // Para el marcador de la ubicación del usuario

async function initMap() {
    // Espera a que se cargue la biblioteca de mapas
    const { Map } = await google.maps.importLibrary("maps");

    // Coordenadas iniciales
    const initialCoord = { lat: 10.0029, lng: -84.1924 };

    // Inicializar el mapa
    map = new Map(document.getElementById('map'), {
        zoom: 15,
        center: initialCoord // Coordenadas iniciales
    });

    // Crear un marcador para la ubicación inicial
    new google.maps.Marker({
        position: initialCoord,
        map: map,
        title: 'Ubicación inicial'
    });

    // Inicializar la ventana de información
    infoWindow = new google.maps.InfoWindow();

    // Inicializar el servicio y renderizador de direcciones
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    // Verificar si el navegador soporta la API de Geolocalización
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Crear un marcador para la ubicación del usuario
            userMarker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Tu ubicación'
            });

            // Mostrar ventana de información
            infoWindow.setPosition(pos);
            infoWindow.setContent('Ubicación encontrada.');
            infoWindow.open(map);
            map.setCenter(pos);

        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Navegador no soporta Geolocalización
        handleLocationError(false, infoWindow, map.getCenter());
    }

    // Configurar el botón para mostrar la ruta
    document.getElementById('routeButton').addEventListener('click', () => {
        if (userMarker) {
            calculateAndDisplayRoute(initialCoord, userMarker.getPosition());
        } else {
            alert('No se pudo obtener tu ubicación.');
        }
    });
}

function calculateAndDisplayRoute(start, end) {
    directionsService.route(
        {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING // Puedes cambiar el modo de viaje aquí
        },
        (response, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(response);
            } else {
                window.alert('No se pudo encontrar una ruta: ' + status);
            }
        }
    );
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: El servicio de geolocalización falló.' :
                          'Error: Tu navegador no soporta geolocalización.');
    infoWindow.open(map);
}

initMap();
