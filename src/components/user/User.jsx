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
        <div className={styles.user} style={{ width: `${size}px` }}>
            <Avatar  size={size} verified={verified}></Avatar>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.info}>{info}</p>
        </div>

    )
}