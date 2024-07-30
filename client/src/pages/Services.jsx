// src/components/Services.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/services/')
            .then(response => {
                setServices(response.data);
            })
            .catch(error => {
                console.log('Error fetching services:', error);
            });
    }, []); // El segundo argumento de useEffect es un array vacío para ejecutar solo una vez al montar el componente

    return (
        <div>
            <section className="services">
                <h2>Our Services</h2>
                <div className="service-list">
                    {services.map(service => (
                        <div key={service.id} className="service-item">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <img src={service.image} alt={service.title} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
