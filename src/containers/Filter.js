const Filter = ( {setFilteredList, allHeroes} ) => {

    const handleButtonClick = (e) => {
        let filterType = "";
        let filterValue = "";
        const filteredList = [];
        if (e.target.parentElement.id === "attribute-filter") {
            allHeroes.forEach(hero => {
                if (hero.primary_attr === e.target.value) {
                    filteredList.push(hero);
                }
            });
        } else if (e.target.parentElement.id === "attack-type-filter") {
            allHeroes.forEach(hero => {
                if (hero.attack_type == e.target.textContent) {
                    filteredList.push(hero);
                }
            });
        } else {
            allHeroes.forEach(hero => {
                if (hero.localized_name[0] == e.target.textContent) {
                    filteredList.push(hero);
                }
            });
        }
        setFilteredList(filteredList)
    }

    return (
        <>
            <h2>Filter by:</h2>
            <div id="filter-options" className="flex-row">
                <div id="attribute-section">
                    <h3>Main attribute</h3>
                    <div id="attribute-filter">
                        <button onClick={handleButtonClick} value="str">Strength</button>
                        <button onClick={handleButtonClick} value="agi">Agility</button>
                        <button onClick={handleButtonClick} value="int">Intelligence</button>
                    </div>
                </div>
                <div id="attack-type-section">
                    <h3>Attack type</h3>
                    <div id="attack-type-filter">
                        <button onClick={handleButtonClick}>Melee</button>
                        <button onClick={handleButtonClick}>Ranged</button>
                    </div>
                </div>
                <div id="first-initial-section">
                    <h3>First letter</h3>
                    <div className="flex-row" id="alphabet-filter">
                        <button onClick={handleButtonClick}>A</button>
                        <button onClick={handleButtonClick}>B</button>
                        <button onClick={handleButtonClick}>C</button>
                        <button onClick={handleButtonClick}>D</button>
                        <button onClick={handleButtonClick}>E</button>
                        <button onClick={handleButtonClick}>F</button>
                        <button onClick={handleButtonClick}>G</button>
                        <button onClick={handleButtonClick}>H</button>
                        <button onClick={handleButtonClick}>I</button>
                        <button onClick={handleButtonClick}>J</button>
                        <button onClick={handleButtonClick}>K</button>
                        <button onClick={handleButtonClick}>L</button>
                        <button onClick={handleButtonClick}>M</button>
                        <button onClick={handleButtonClick}>N</button>
                        <button onClick={handleButtonClick}>O</button>
                        <button onClick={handleButtonClick}>P</button>
                        <button onClick={handleButtonClick}>Q</button>
                        <button onClick={handleButtonClick}>R</button>
                        <button onClick={handleButtonClick}>S</button>
                        <button onClick={handleButtonClick}>T</button>
                        <button onClick={handleButtonClick}>U</button>
                        <button onClick={handleButtonClick}>V</button>
                        <button onClick={handleButtonClick}>W</button>
                        <button onClick={handleButtonClick}>X</button>
                        <button onClick={handleButtonClick}>Y</button>
                        <button onClick={handleButtonClick}>Z</button>
                    </div>
                </div>  
            </div>
        </>
    )
}
// onClick={handleButtonClick}

export default Filter;