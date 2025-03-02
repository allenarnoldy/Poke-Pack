import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { OPEN_SINGLE_PACK } from "../utils/queries";
import { useEffect, useState } from "react";
import { SAVE_CARD } from "../utils/mutations.js";

const OpenPack = () => {
    const [getPack, { loading, data }] = useLazyQuery(OPEN_SINGLE_PACK);
    const [saveCard] = useMutation(SAVE_CARD);
    const [selectedPack, setSelectedPack] = useState<string | null>(null);

    // const cards = data?.openSinglePack || [];
    const [randomCards, setRandomCards] = useState([]);

    function Form(e: any) {
        setSelectedPack(e.target.value);
    }

    const animatePack = () => {
        const cards = document.querySelectorAll('.packCard');
        cards.forEach(card => {
            card.classList.add('open');
        })
    }

    async function handleSubmit(event: any) {
        event.preventDefault();
        const form = event.target;
        const packSelect = new FormData(form);
        const packJson = Object.fromEntries(packSelect.entries())
        const { data: packData } = await getPack({ variables: { setName: packJson.selectedPack } });
        const randomCards = packData?.openSinglePack || []; // TODO change back to '[]' once done testing
        // TODO use 'selectedPack' from submitted form to run card finding and pack opening
        for (let i = 0; i < 5; i++) {
            saveCard({ variables: { cardId: randomCards[i]._id, userId: localStorage.getItem('userId') } });
        }
        setRandomCards(randomCards);
        setTimeout(animatePack, 1000);
    };
    // TODO current list values to be replaced with for loop that uses a passed in array to populate the options
    return (
        <>
            <div className="pack-container splash-container">
                    <div className="booster">
                        {randomCards.map((card: any) => (
                            <div key={card._id} className='packCard'>
                                <img src={card.imageUrl} alt={card.name} />
                            </div>
                        ))}
                    </div>
                    <form id="packForm" method="post" onSubmit={handleSubmit}>
                        <h1 className="pack-header">TIME TO CRACK A PACK</h1>
                        <label className="pack-list">
                            Choose your Pack!<br></br>
                            <select className="pack-list" name="selectedPack" id="pack-list" onChange={Form}>
                                <option value={undefined}>No Pack</option>
                                <option value={"151"}>Scarlet & Violet - 151</option>
                                <option value={"bs2"}>Base Set 02</option>
                                <option value={"rbycode"}>EX Ruby & Sapphire</option>
                            </select>
                        </label>
                        <button className="pack-button " type="submit">Submit</button>
                    </form>
            </div>
        </>
    );
};

export default OpenPack;
