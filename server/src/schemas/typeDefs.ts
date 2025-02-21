const typeDefs = `

    type Card {
        id: ID
        name: String
        level: String
        types: [String]
        evolvesFrom: String
        rarity: String
        imageUrl: String
    }

    type Query {
        openSinglePack: [Card]
    }

    type Mutation {
        saveCardToBinder: String
        removeCardFromBinder: String
    }
`

export default typeDefs;