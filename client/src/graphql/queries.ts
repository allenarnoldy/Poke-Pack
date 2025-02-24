import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    query Me {
    cardCount
    email
    savedCards {
        id
        name
        level
        types
        evolvesFrom
        rarity
        imageUrl
        }
    _id
    username
}
    `;

