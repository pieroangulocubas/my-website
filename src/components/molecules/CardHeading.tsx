import styles from '@/styles/molecules/CardHeading.module.scss'
import { classNames } from "@/utils/classNames"
import Icon from '../atoms/Icon'

interface CardHeadingProps{
  title:string,
  tecnologies:string[],
  inHero?:boolean
}

const CardHeading = ({title,tecnologies,inHero}:CardHeadingProps) => {
  return (
    <h3 className={classNames(styles["m-heading"],styles[`${inHero && 'in-hero'}`])}>
      {title}
      <div className={classNames(styles["m-heading__tecnologies"])}>
        {
          tecnologies.map(tec=>(
            <Icon key={tec} type={tec}/>
          ))
        }
      </div>
    </h3>
  )
}
export default CardHeading