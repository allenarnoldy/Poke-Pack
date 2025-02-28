import DisplayBooster from "./DisplayBooster";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";

import { OPEN_SINGLE_PACK } from "../utils/queries";
import { useState } from "react";
import { SAVE_CARD } from "../utils/mutations.js";


const OpenPack = () => {
    const [ getPack, {loading, data} ] = useLazyQuery(OPEN_SINGLE_PACK);
    const [saveCard] = useMutation(SAVE_CARD);
    const [selectedPack, setSelectedPack] = useState<string | null>(null);
    
    // const cards = data?.openSinglePack || [];


    function Form(e: any) {
        setSelectedPack(e.target.value);
    }

    async function handleSubmit(event: any) {
        event.preventDefault();
        const form = event.target;
        const packSelect = new FormData(form);
        const packJson = Object.fromEntries(packSelect.entries())
        const { data: packData } = await getPack({variables: {setName: packJson.selectedPack}});
        const randomCards = packData?.openSinglePack || [];
        // TODO use 'selectedPack' from submitted form to run card finding and pack opening
        console.log("Attempting to save the following cards: ", randomCards);
        for (let i = 0; i < 5; i++) {
         saveCard({variables: {cardId: randomCards[i]._id, userId: localStorage.getItem('userId')}});
        }
        console.log(packJson.selectedPack);
        console.log("test does the code reach this line")
        console.log(randomCards);
    };
    console.log(data);
    // TODO current list values to be replaced with for loop that uses a passed in array to populate the options
    return (
        <>
            <div className="pack-container">
                <form method="post" onSubmit={handleSubmit}>
                    <h1>It's time to crack a pack!</h1>
                    <label>
                        Choose your Pack!
                        <select name="selectedPack" id="pack-list" onChange={Form}>
                            <option value={undefined}>No Pack</option>
                            <option value={"151"}>Base Set 01</option>
                            <option value={"bs2"}>Base Set 02</option>
                            <option value={"rbycode"}>EX Ruby & Sapphire</option>
                        </select>
                    </label>
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        </>
    );
};

export default OpenPack;