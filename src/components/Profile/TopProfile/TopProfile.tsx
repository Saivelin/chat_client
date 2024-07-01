import Image from "next/image"
import styles from "./TopProfile.module.scss"
import { ProfileType } from "../profile.types"
import Info from "./Info/Info"

const TopProfile = ({data} : {data: ProfileType}) => {
  return (
    <div className={styles.container}>
        <div className={styles.photoWrapper}>
            <img src={data.img} className={styles.photo}/>
        </div>
        <Info name={`${data.name} ${data.surname}`} active={data.active} activeData={data.activeDate}/>
    </div>
  )
}

export default TopProfile