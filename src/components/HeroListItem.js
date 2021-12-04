const HeroListItem = ( {hero, handleHeroClick} ) => {
    
    return <li onClick={handleHeroClick}>{hero.localized_name}</li>
}

export default HeroListItem