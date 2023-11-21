import Feature from "../molecules/Feature"
import styles from "@/styles/organisms/Features.module.scss"
import { classNames } from "@/utils/classNames"

const Features = () => {
  console.log(styles)
  return (
    <section className={classNames(styles["g-features"])}>
      <div className={classNames(styles["g-features__container"],"o-container") }>
        <h2 className={classNames(styles["g-features__title"])}>¿Qué me hace diferente?</h2>
        <div className={classNames(styles["g-features__grid"])}>
          <Feature
            title="Collaborative Work"
            description="It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it" 
            color="green"
            icon="people"/>

          <Feature
            title="Collaborative Work"
            description="It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it" 
            color="blue"
            icon="people"/>

          <Feature
            title="Collaborative Work"
            description="It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it" 
            color="red"
            icon="people"/>
        </div>
      </div>
    </section>
  )
}
export default Features