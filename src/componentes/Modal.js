import React from 'react';
import './Modal.css';

function CocktailModal({ cocktail, onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>{cocktail.strDrink}</h2>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <p><strong>Categoría:</strong> {cocktail.strCategory}</p>
                <p><strong>Instrucciones:</strong> {cocktail.strInstructions}</p>
                <p><strong>Ingredientes:</strong></p>
                <ul>
                    {Array.from({ length: 15 }, (_, i) => i + 1)
                        .map(index => cocktail[`strIngredient${index}`] && (
                            <li key={index}>{cocktail[`strIngredient${index}`]} - {cocktail[`strMeasure${index}`]}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default CocktailModal;
