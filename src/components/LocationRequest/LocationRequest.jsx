import React, { useState, useEffect } from 'react';
import './LocationRequest.css';

export default function LocationRequest() {
    const [showLocationRequest, setShowLocationRequest] = useState(true);
    const [location, setLocation] = useState(null);

    const handleAcceptLocation = () => {
        setShowLocationRequest(false);
        localStorage.setItem('locationAccepted', 'true');
        requestUserLocation();
    };

    const handleRejectLocation = () => {
        setShowLocationRequest(false);
        localStorage.setItem('locationAccepted', 'false');
    };

    const requestUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };
                    setLocation(userLocation);
                    console.log('Latitude:', userLocation.latitude);
                    console.log('Longitude:', userLocation.longitude);
                    // Você pode salvar essa informação no estado ou enviar para um servidor aqui
                },
                (error) => {
                    console.error('Erro ao obter a localização:', error);
                }
            );
        } else {
            console.error('Geolocalização não é suportada pelo navegador.');
        }
    };

    useEffect(() => {
        const locationAccepted = localStorage.getItem('locationAccepted');
        if (locationAccepted === 'true') {
            setShowLocationRequest(false);
            requestUserLocation();
        } else if (locationAccepted === 'false') {
            setShowLocationRequest(false);
        }
    }, []);

    return (
        <div className="container-location">
            {showLocationRequest && (
                <div className="location-background">
                    <div className="location-request">
                        <div className="teste">
                        <p>Este site gostaria de acessar sua localização para <br></br>melhorar a experiência do usuário.</p></div>
                        <div className="teste2">
                        <button onClick={handleAcceptLocation}>Permitir Localização</button>
                        <button onClick={handleRejectLocation}>Rejeitar</button></div>
                    </div>
                </div>
            )}
            {/* {location && (
                <div className="location-info">
                    <p>Sua localização atual:</p>
                    <p>Latitude: {location.latitude}</p>
                    <p>Longitude: {location.longitude}</p>
                </div>
            )} */}
        </div>
    );
}