const HeroProfile = ({selectedHero}) => {

    const primaryAttribute = (hero) => {
        if (hero.primary_attr === "agi") {
            return "Agility"
        } else if (hero.primary_attr === "str") {
            return "Strength"
        } else {
            return "Intelligence"
        }
    }

    const roles = (hero) => {
        let rolesString = ""
        for (let role in hero.roles) {
            if (!rolesString) {
                rolesString += hero.roles[role]
            } else {
                rolesString += " / "+hero.roles[role]
            }
        }
        return rolesString
    }

    const generateHeroProfile = (hero) => {
        if (!hero) {
            return <h4>Please select a hero to view their stats</h4>
        }
        return (
            <>
            <table id="profile-table">
                <tbody>
                    <tr className="profile-table-row" id="profile-row-name">
                        <td className="profile-table-label">Name: </td>
                        <td className="profile-table-value">{hero.localized_name}</td>
                    </tr>
                    <tr className="profile-table-row" id="profile-row-attribute">
                        <td className="profile-table-label">Primary attribute: </td>
                        <td className="profile-table-value">{primaryAttribute(hero)}</td>
                    </tr>
                    <tr className="profile-table-row" id="profile-row-attacktype">
                        <td className="profile-table-label">Attack type: </td>
                        <td className="profile-table-value">{hero.attack_type}</td>
                    </tr>
                    <tr className="profile-table-row" id="profile-row-roles">
                        <td className="profile-table-label">Roles: </td>
                        <td className="profile-table-value">{roles(hero)}</td>
                    </tr>
                    <tr className="profile-table-row" id="profile-row-legs">
                        <td className="profile-table-label">Number of legs: </td>
                        <td className="profile-table-value">{hero.legs}</td>
                    </tr>
                </tbody>
            </table>
            </>
        )};

    return (
        <>
            {generateHeroProfile(selectedHero)}
        </>
    )
}

export default HeroProfile;