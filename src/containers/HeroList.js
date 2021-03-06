import HeroListItem from "../components/HeroListItem";

const HeroList = ( {heroList, setSelectedHero, findHero} ) => {

    const handleHeroClick = (e) => {
        findHero(e.target.textContent);
    }

    const generateHeroList = heroList.map((hero, index) => {
        return (
            <HeroListItem hero={hero} key={index} handleHeroClick={handleHeroClick} />
        )
    })

    return (
        <ul id="hero-list">
            {generateHeroList}
        </ul>
    )
}

export default HeroList;