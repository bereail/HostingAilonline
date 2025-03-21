import React from 'react';
import useObserver from '../../Hooks/useObserver';
import logo from '../../assets/img/logo.png';
import styles from './MisionVision.module.css';

const MisionVision = () => {
  const [isMissionVisible, missionRef] = useObserver();
  const [isVisionVisible, visionRef] = useObserver();

  return (
    <section className={styles.sectionFilosofiaContainer}>
      <img src={logo} alt="Logo de la empresa" className={styles.img} />
      <div className={styles.contentFilosofiaContainer}>
        {/* Misión */}
        <div
          ref={missionRef}
          className={`content-filosofia ${isMissionVisible ? 'slide-left' : ''}`}
        >
          <h3 className={styles.title}>Misión</h3>
          <p className={styles.description}>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quod quidem cumque omnis inventore dolores ipsa cupiditate a, sunt dolorum minima. Alias exercitationem ea magnam vero eveniet aut repellat facere?
          </p>
        </div>

        {/* Visión */}
        <div
          ref={visionRef}
          className={`content-filosofia ${isVisionVisible ? 'slide-right' : ''}`}
        >
          <h3 className={styles.title}>Visión</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magni facere iusto aperiam. Aliquam quidem magni voluptatem, doloribus, aspernatur labore corporis neque iure esse facere eos fuga maiores dolore. Sunt?
          </p>
        </div>
      </div>
    </section>
  );
};

export default MisionVision;