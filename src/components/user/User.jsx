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
        <div className={styles.user}>
            <Avatar src={avatar} alt={name} size={size} verified={verified} />
            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.description}>{info}</p>
            </div>
        </div>

    )
}