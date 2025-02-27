import DisplayBooster from "./DisplayBooster";
import { useQuery, useLazyQuery } from "@apollo/client";

import { OPEN_SINGLE_PACK } from "../utils/queries";
import { useState } from "react";


const OpenPack = () => {
    const [ getPack, {loading, data} ] = useLazyQuery(OPEN_SINGLE_PACK);
    const [selectedPack, setSelectedPack] = useState<string | null>(null);
    
    // const cards = data?.openSinglePack || [];


    function Form(e: any) {
        setSelectedPack(e.target.value);
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        const form = event.target;
        const packSelect = new FormData(form);
        const packJson = Object.fromEntries(packSelect.entries())
        getPack({variables: {setName: packJson.selectedPack}});
        // TODO use 'selectedPack' from submitted form to run card finding and pack opening
        console.log(packJson.selectedPack);
    };
    console.log(data);
    // TODO current list values to be replaced with for loop that uses a passed in array to populate the options
    return (
        <>
            <div className="pack-container">
                <form method="post" onSubmit={handleSubmit}>
                    <h1>TIME TO CRACK A PACK</h1>
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