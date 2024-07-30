
import React from 'react';

export function Map() {
    return (
        <div>
            <h2>Our Location</h2>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509189!2d144.96305791531988!3d-37.814107979751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727c4a44e8da0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1619448784511!5m2!1sen!2sau"
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    title="Our Location"
                ></iframe>
            </div>
        </div >
    );
}

