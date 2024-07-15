import Block from '@/shared/Block/Block'
import { ProfileType } from '@/entites/profile.types'
import TopProfile from '@/widgets/Profile/TopProfile/TopProfile'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined'
import styles from './Header.module.scss'
import Link from 'next/link'

const Header = ({ profile }: { profile: ProfileType }) => {
    return (
        <Block style={{ display: "flex", columnGap: "12px", alignItems: "center", padding: "10px" }} classNames={[styles.block]}>
            <Link href={"/"}>
                <KeyboardArrowLeftOutlinedIcon style={{ cursor: 'pointer' }} />
            </Link>
            <div className={styles.photoWrapper}>
                <img
                    src={`${process.env.NEXT_PUBLIC_API_UPLOADS}/${profile.photo}`}
                    className={styles.photo}
                />
            </div>
            <div className={styles.info}>
                <p>
                    {profile.name} {profile.surname}
                </p>
                <p>{profile.activeDate}</p>
            </div>
        </Block>
    )
}

export default Header
