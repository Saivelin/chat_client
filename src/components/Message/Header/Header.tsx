import Block from '@/components/Block/Block'
import { ProfileType } from '@/components/Profile/profile.types'
import TopProfile from '@/components/Profile/TopProfile/TopProfile'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined'
import styles from './Header.module.scss'
import Link from 'next/link'

const Header = ({ profile }: { profile: ProfileType }) => {
    return (
        <Block style={{ background: 'white', display: "flex", columnGap: "12px", alignItems: "center", padding: "10px" }}>
            <Link href={"/"}>
                <KeyboardArrowLeftOutlinedIcon style={{ cursor: 'pointer' }} />
            </Link>
            <div className={styles.photoWrapper}>
                <img
                    src={profile.img}
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
