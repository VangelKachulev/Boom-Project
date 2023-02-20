import Avatar from "../avatar/Avatar";
import styles from "../user/User.module.scss";

export default function User({
    name = '',
    info = '',
    avatar = '',
    size = 55,
    verified = false,




}) {


    return (
        <div className="user">
            <Avatar></Avatar>
            <h2 className="name">{name}</h2>
            <p className="info">{info}</p>
        </div>

    )
}