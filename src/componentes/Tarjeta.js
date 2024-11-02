import React from 'react';
import './Tarjetas.css'; // Asegúrate de importar el archivo de estilos de la tarjeta

function CocktailCard({ cocktail, onClick }) {
    return (
        <div className="cocktail-card">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h3>{cocktail.strDrink}</h3>
            <button className="info-button" onClick={onClick}>Ver más</button>
        </div>
    );
}

export default CocktailCard;
