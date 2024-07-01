import Block from '@/components/Block/Block'
import styles from './Info.module.scss'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

const Info = ({ name, active, activeData }: { name: string; active: boolean; activeData: string }) => {
    return (
        <Block style={{ backgroundColor: '#EBC0FC', borderRadius: '30px', width: "100%", display: "flex", paddingTop: "25px", paddingBottom: "25px" }}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <p className={styles.name}>{name}</p>
                    <div className={styles.active}>
                        <div
                            style={active == true ? { backgroundColor: '#19F77E' } : { backgroundColor: '#F97562' }}
                            className={styles.activeState}
                        ></div>
                        <p className={styles.activeDate}>{activeData}</p>
                    </div>
                </div>
                <TuneOutlinedIcon/>
            </div>
        </Block>
    )
}

export default Info
