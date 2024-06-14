import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Mapa.css';


const getCoordinates = async (address) => {
  const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`);
  const data = await response.json();
  if (data.length > 0) {
    return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
  } else {
    return null;
  }
};

const initialZones = {
  norte: { center: [-23.490, -46.650], radius: 5000 },
  sul: { center: [-23.650, -46.650], radius: 5000 },
  leste: { center: [-23.550, -46.500], radius: 5000 },
  oeste: { center: [-23.550, -46.800], radius: 5000 },
};

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const Mapa = (props) => {
  const [markers, setMarkers] = useState([]);
  const [locationFilter, setLocationFilter] = useState('all');
  const [eventFilter, setEventFilter] = useState('all');
  const [searchAddress, setSearchAddress] = useState('');
  const [mapCenter, setMapCenter] = useState([-23.55052, -46.633308]);
  const [mapZoom, setMapZoom] = useState(11);

  useEffect(() => {
    // fetchCoordinates e fetchPointsOfInterest permanecem inalterados
  }, []);

  const fetchPointsOfInterest = async (type, zone) => {
    if (zone === 'all') return [];

    const { center, radius } = initialZones[zone];
    const response = await fetch(`https://overpass-api.de/api/interpreter?data=[out:json];node[${type}](around:${radius},${center[0]},${center[1]});out;`);
    const data = await response.json();
    return data.elements.map(el => ({
      id: el.id,
      coords: [el.lat, el.lon],
      name: el.tags.name || 'Unknown',
      type,
    }));
  };

  const handleLocationFilterChange = async (e) => {
    const selectedFilter = e.target.value;
    setLocationFilter(selectedFilter);
    const selectedEventFilter = eventFilter !== 'all' ? eventFilter : '';

    if (selectedFilter !== 'all') {
      const pointsOfInterest = await fetchPointsOfInterest(selectedEventFilter || 'amenity', selectedFilter);
      setMarkers(pointsOfInterest);
    } else {
      setMarkers([]);
    }
  };

  const handleEventFilterChange = async (e) => {
    const selectedFilter = e.target.value;
    setEventFilter(selectedFilter);
    const selectedLocationFilter = locationFilter !== 'all' ? locationFilter : '';

    if (selectedLocationFilter !== 'all') {
      const pointsOfInterest = await fetchPointsOfInterest(selectedFilter, selectedLocationFilter);
      setMarkers(pointsOfInterest);
    } else {
      setMarkers([]);
    }
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const coords = await getCoordinates(searchAddress);
    if (coords) {
      setMarkers([...markers, { address: searchAddress, coords }]);
      setMapCenter(coords);
      setMapZoom(15);
      setSearchAddress('');
    } else {
      alert('Endereço não encontrado!');
    }
  };

  return (
    <div className='container-mapa' style={{width:props.tamanhoMapa}}>
      <MapContainer center={mapCenter} zoom={mapZoom} style={{ height: '600px' }}>
        {/* tileLayer e ChangeView permanecem inalterados */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, idx) => (
          <Marker key={idx} position={marker.coords} icon={getIcon(marker.type)}>
            <Popup>{marker.address}</Popup>
          </Marker>
        ))}
        {locationFilter !== 'all' && (
          <Circle
            center={initialZones[locationFilter].center}
            radius={initialZones[locationFilter].radius}
            color={zoneColor(locationFilter)}
          />
        )}
      </MapContainer>
      
    </div>
  );
};

const zoneColor = (zone) => {
  switch (zone) {
    case 'norte': return 'blue';
    case 'sul': return 'green';
    case 'leste': return 'red';
    case 'oeste': return 'yellow';
    default: return 'black';
  }
};

const getIcon = (type) => {
  const iconUrls = {
    theatre: '/icons/theatre.png',
    arts_centre: '/icons/arts_centre.png',
    sports: '/icons/sports.png',
    battle_rap: '/icons/battle_rap.png',
    default: '/icons/default.png'
  };

  return L.icon({
    iconUrl: iconUrls[type] || iconUrls['default'],
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
};

export default Mapa;