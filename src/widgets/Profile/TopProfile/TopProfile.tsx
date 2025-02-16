import Image from "next/image"
import styles from "./TopProfile.module.scss"
import { ProfileType } from "../../../entites/profile.types"
import Info from "./Info/Info"

const TopProfile = ({data} : {data: {photo: string, name: string, surname: string}}) => {
  return (
    <div className={styles.container}>
        <div className={styles.photoWrapper}>
            <img src={`${process.env.NEXT_PUBLIC_API_UPLOADS}/${data.photo}`} className={styles.photo}/>
        </div>
        <Info name={`${data.name} ${data.surname}`} active={true} activeData={process.env.NEXT_PUBLIC_ACTIVE_USER_STATUS || "active"}/>
    </div>
  )
}

export default TopProfile