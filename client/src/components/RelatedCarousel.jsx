import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import ArtDisplay from './ArtDisplay';

const RelatedCarousel = () => {
    const [artworks, setArtworks] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const fetchArtworks = async (query = 'fruit', limit = 12) => {
        try {
            const searchResponse = await fetch(
                `https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Oil%20paint&q=${query}`
            );
            const searchData = await searchResponse.json();

            if (searchData.objectIDs && searchData.objectIDs.length > 0) {
                const artDetails = await Promise.all(
                    searchData.objectIDs.slice(0, limit).map(async (id) => {
                        const artResponse = await fetch(
                            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
                        );
                        return await artResponse.json();
                    })
                );
                setArtworks(artDetails);
            } else {
                setArtworks([]);
            }
        } catch (error) {
            console.error('Error fetching artworks:', error);
            setArtworks([]);
        }
    };

    useEffect(() => {
        fetchArtworks('grand');
    }, []);

    const artTemplate = (art) => {
        return <ArtDisplay key={art.objectID} art={art} />;
    };

    return (
        <div className="art-carousel">
            <Carousel value={artworks} numScroll={1} numVisible={6} responsiveOptions={responsiveOptions} itemTemplate={artTemplate} />
        </div>
    );
};

export default RelatedCarousel;
