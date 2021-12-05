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

    const findHero = (heroName) => {
        const hero = allHeroes.find(hero => hero.localized_name === heroName)
        setSelectedHero(hero);
    }

    return (
        <>
            <header>
                <img id="logo" src={"dota2logo.png"}/>
                <h1>HEROES</h1>
            </header>
            <Filter setFilteredList={setFilteredList} allHeroes={allHeroes}/>
            <div id="list-and-profile" className="flex-row">
                <HeroList heroList={filteredList} setSelectedHero={setSelectedHero} selectedHero={selectedHero} findHero={findHero} />
                <div id="hero-profile-container" className="flex-column">
                    <h3 id="hero-profile">Hero profile</h3>
                    <HeroProfile selectedHero={selectedHero}/>
                </div>
            </div>
            <footer>
                Created by Graeme B
            </footer>
        </>
    )
}

export default AppContainer;