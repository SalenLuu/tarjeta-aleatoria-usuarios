const UserCard = ({ userData }) => {

    const { name, location, email, cell, picture } = userData
    const fullName = name.title + ' ' + name.first + ' ' + name.last
    const fullLocation = location.country + ' ' + location.city + ' ' + location.state
    return (
        <div className="usercard">
            <h2>{fullName}</h2>
            <img src={picture.large} alt="picture" className="pic" />
            <ul>
                <li><img src={`./src/assets/email.svg`}  className="img" />{email}</li>
                <li><img src={`./src/assets/phone.svg`} className="img" />{cell}</li>
                <li><img src={`./src/assets/location.svg`} className="img" />{fullLocation}</li>
            </ul>
        </div>
    )
}

export default UserCard