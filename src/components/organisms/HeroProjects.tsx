import coverStyles from '@/styles/atoms/CoverBackground.module.scss'
import styles from "@/styles/organisms/Recents.module.scss"
import { classNames } from "@/utils/classNames"
import CardRow from "../molecules/CardRow"
const HeroProjects = () => {
  return (  
    <section className={classNames(styles['g-recent'],coverStyles['a-cover-background'])}>
      <div className={classNames(styles["g-recent__container"],"o-container")}>
        <CardRow inHero/>
      </div>
    </section>
  )
}
export default HeroProjects