import React from 'react'

export const Card = ({ card }) => {
    return (
        <>
            <span>{card.number}</span>
            <span>{card.suit}</span>
            <span>{card.color}</span>
        </>
    )
}
