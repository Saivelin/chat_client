"use client"
import { useLogout } from "@/features/useLogout";
import styles from "./Logout.module.scss"
import Button from "@/shared/Button/Button"
import LogoutIcon from '@mui/icons-material/Logout';
import { usePathname, useRouter } from "next/navigation";

const Logout = () => {
    const path = usePathname()
    const logout = useLogout()

    if(path !== "/login" && path !== "/registration"){
        return <Button className={styles.button} onClick={logout}><LogoutIcon/></Button>
    }
}

export default Logout
