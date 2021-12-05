const HeroListItem = ( {hero, handleHeroClick} ) => {
    return <li className="hero-list-item" onClick={handleHeroClick}>{hero.localized_name}</li>
}

export default HeroListItem