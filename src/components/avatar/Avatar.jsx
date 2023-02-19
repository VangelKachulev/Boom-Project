import styles from "../avatar/Avatar.module.scss";

export default function Avatar({
    size = {
        width: '90px',
        height: '90px'
    },
    url = "/images/avatar.png",
    verified = 'false'
}) {


    return (
        <div className={styles.avatar} style={{ width: `${size.width}`, height: `${size.height}` }} >
            <img src={url} alt="noone" className={styles.image} />

            <span className={styles.badge}></span>
        </ div>
    )
}