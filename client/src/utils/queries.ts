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
        setName
        rarity
        imageUrl
        }
    _id
    username
}
    `;

