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
        <div style={{ width: `${size}px` }} className={styles.user}>
            <Avatar size={size} verified={verified}></Avatar>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.info}>{info}</p>
        </div>

    )
}