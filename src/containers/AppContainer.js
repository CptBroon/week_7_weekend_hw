import { useEffect, useState } from "react";
import HeroList from "./HeroList";
import Filter from "./Filter";
import HeroProfile from "../components/HeroProfile";

const AppContainer = () => {

    const [allHeroes, setAllHeroes] = useState([]);
    const [selectedHero, setSelectedHero] = useState(null);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        fetch("https://api.opendota.com/api/heroes")
            .then(res => res.json())
            .then((heroes) => {
                heroes.sort(alphabetizeHeroes)
                setAllHeroes(heroes)
            }
        );
    }, [])

    useEffect(() => {
        setFilteredList(allHeroes);
    }, [allHeroes])

    const alphabetizeHeroes = (hero1, hero2) => {
        if (hero1.localized_name > hero2.localized_name) {
            return 1;
        } else if (hero1.localized_name < hero2.localized_name) {
            return -1;
        } else {
            return 0;
        }
    };

    const findHero = (heroName) => {
        const hero = allHeroes.find(hero => hero.localized_name === heroName)
        setSelectedHero(hero);
    }

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    };

    document.onscroll = () => {
        if (document.documentElement.scrollTop > 300) {
            document.getElementById("scroll-to-top").style.display = "block";
        } else {
            document.getElementById("scroll-to-top").style.display = "none";
        }
    };

    return (
        <>
            <header>
                <img alt="Dota 2" id="logo" src={"dota2logo.png"}/>
                <h1>HEROES</h1>
            </header>
            <article>
                <Filter setFilteredList={setFilteredList} allHeroes={allHeroes}/>
                <div id="list-and-profile" className="flex-row">
                    <HeroList heroList={filteredList} setSelectedHero={setSelectedHero} selectedHero={selectedHero} findHero={findHero} />
                    <div id="hero-profile-container" className="flex-column">
                        <h3 id="hero-profile">Hero profile</h3>
                        <HeroProfile selectedHero={selectedHero}/>
                    </div>
                </div>
                <button id="scroll-to-top" onClick={scrollToTop} style={{display: "none"}}>&uarr;</button>
            </article>
            <footer>
                Created by Graeme B
            </footer>
        </>
    )
}

export default AppContainer;