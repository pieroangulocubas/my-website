import coverStyles from '@/styles/atoms/CoverBackground.module.scss'
import styles from '@/styles/organisms/Hero.module.scss'
import { classNames } from '@/utils/classNames'
import Button from '../atoms/Button'
const Hero = () => {
  return (
    <section className={classNames(styles["g-hero"],coverStyles['a-cover-background'])}>
      <div className={classNames(styles['g-hero__container'],"o-container")}>
        <div className={classNames(styles['g-hero__content'])}>
          <h1 className={classNames(styles["g-hero__title"])}>Piero Angulo Cubas</h1>
          <h4 className={classNames(styles["g-hero__subtitle"])}>Frontend Developer</h4>
          <p className={classNames(styles['g-hero__description'])}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
          <div className={classNames(styles["g-hero__buttons"])}>
            <Button mode="solid">Ver proyectos</Button>
            <Button mode="ghost">Descargar CV</Button>
          </div>
        </div>
        <div className={classNames(styles["g-hero__image"])}>
          <img src="/piero.png" alt="foto de piero angulo cubas"/>
        </div>
      </div> 
    </section>
  )
}
export default Hero