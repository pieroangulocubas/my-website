import { classNames } from "@/utils/classNames"
import styles from '@/styles/molecules/Feature.module.scss'
import Icon from "../atoms/Icon"

interface FeatureProps{
  title:string
  description:string
  color:string
  icon:string
}
const Feature = ({title,description,color,icon}:FeatureProps) => {
  return (
    <article className={classNames(styles["m-feature"])}>
      <div className={classNames(styles["m-feature__icon-container"],styles[color]) }>
        <Icon size="bigger" type={icon} className={classNames(styles["m-feature__icon"])} />
      </div>
      <h3 className={classNames(styles["m-feature__title"])}>{title}</h3>
      <p className={classNames(styles["m-feature__description"])}>{description}</p>
    </article>
  )
}
export default Feature