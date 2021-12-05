import { useEffect, useState } from "react";
import HeroList from "./HeroList";
import Filter from "./Filter";
import HeroProfile from "../components/HeroProfile";

const AppContainer = () => {

    const [allHeroes, setAllHeroes] = useState([]);
    const [selectedHero, setSelectedHero] = useState(null);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        getHeroes();
    }, [])

    useEffect(() => {
        setFilteredList(allHeroes);
    }, [allHeroes])

    const getHeroes = () => {
        fetch("https://api.opendota.com/api/heroes")
            .then(res => res.json())
            .then(heroes => setAllHeroes(heroes))
    }

    const alphabetizeHeroes = allHeroes.sort((hero1, hero2) => {
        if (hero1.localized_name > hero2.localized_name) {
            return 1;
        } else if (hero1.localized_name < hero2.localized_name) {
            return -1;
        } else {
            return 0;
        }
    });

    return (
        <>
            <header>
                <h1>Dota Heroes</h1>
            </header>
            <Filter setFilteredList={setFilteredList} allHeroes={allHeroes}/>
            <div id="list-and-profile" className="flex-row">
                <HeroList heroList={filteredList} setSelectedHero={setSelectedHero} selectedHero={selectedHero} />
                <h3 id="hero-profile">Hero profile</h3>
            </div>
            
        </>
    )
}

export default AppContainer;