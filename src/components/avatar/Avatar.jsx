
import styles from "../avatar/Avatar.module.scss";

export default function Avatar({
    size = {
         width: "90",
        height: "90" 
    },
    url = "/images/avatar.png",
    verified = false
}) {



    return (

        <div>
            {verified
                ?

                <div className={styles.avatar} style={{ width: `${size.width}px`, height: `${size.height}px` }}>

                    <img src={url} alt="noone" className={styles.image} />
                    <img src="/images/verified.svg" alt="noome" className={styles.badge} />

                </ div >
                :


                <div className={styles.avatar} style={{ width: `${size.width}px`, height: `${size.height}px` }}>



                </ div >}


        </div>


    )
}