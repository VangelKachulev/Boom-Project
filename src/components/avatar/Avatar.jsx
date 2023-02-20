
import styles from "../avatar/Avatar.module.scss";

export default function Avatar(props) {
    const { size = 90, verified = true, url = "/images/avatar.png" } = props;

    console.log(url);
    return (

        <div>
            {verified
                ?

                <div className={styles.avatar} style={{ width: `${size}px`, height: `${size}px` }}>

                    <img src={`${url}`} alt="noone" className={styles.image} />
                    <img src="/images/verified.svg" alt="noome" className={styles.badge} />

                </ div >
                :


                <div className={styles.avatar} style={{ width: `${size}px`, height: `${size}px` }}>



                </ div >}


        </div>


    )
}