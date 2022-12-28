import emailIcon from "../assets/email.svg"
import phoneIcon from "../assets/phone.svg"
import locationlIcon from "../assets/location.svg"

const UserCard = ({ userData }) => {

    const { name, location, email, cell, picture } = userData
    const fullName = name.title + ' ' + name.first + ' ' + name.last
    const fullLocation = location.country + ' ' + location.city + ' ' + location.state
    return (
        <div className="usercard">
            <h2>{fullName}</h2>
            <img src={picture.large} alt="picture" className="pic" />
            <ul>
                <li><img src={emailIcon}  className="img" />{email}</li>
                <li><img src={phoneIcon} className="img" />{cell}</li>
                <li><img src={locationlIcon} className="img" />{fullLocation}</li>
            </ul>
        </div>
    )
}

export default UserCard