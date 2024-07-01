import Block from '@/components/Block/Block'
import Container from '@/components/Container/Container'
import TopProfile from '@/components/Profile/TopProfile/TopProfile'
import { people, profile } from './MainModule.constants.mock'
import PeopleItem from '@/components/People/PeopleItem/PeopleItem'
import styles from "./MainModule.module.scss"

const MainModule = () => {
    return (
        <Container>
            <Block>
                <TopProfile data={profile} />
                <div className={styles.peopleList}>
                    {people && people?.length && people?.length > 0
                        ? people.map(el => (
                              <PeopleItem
                                key={el.id}
                                id={el.id}
                                name={`${el.name} ${el.surname}`}
                                photo={el.img}
                                active={el.active}
                                activeDate={el.activeDate}
                              />
                          ))
                        : null}
                </div>
            </Block>
        </Container>
    )
}

export default MainModule
