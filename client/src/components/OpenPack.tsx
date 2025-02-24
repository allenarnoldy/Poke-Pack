const OpenPack = () => {
    function handleSubmit(event: any) {
        event.preventDefault();
        const form = event.target;
        const packSelect = new FormData(form);
        const packJson = Object.fromEntries(packSelect.entries())
        // TODO use 'selectedPack' from submitted form to run card finding and pack opening
        console.log(packJson.selectedPack);
    };

    // TODO current list values to be replaced with for loop that uses a passed in array to populate the options
    return (
        <>
            <div className="pack-container">
                {/*TODO 'submit-pack' is possibly going to be a component for the pack itself.*/}
                <div id="submit-pack">{}</div>
                <form method="post" onSubmit={handleSubmit}>
                    <h1>TIME TO CRACK A PACK</h1>
                    <label>
                        Choose your Pack!
                        <select name="selectedPack" id="pack-list">
                            <option value={undefined}>No Pack</option>
                            <option value={"bs1"}>Base Set 01</option>
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