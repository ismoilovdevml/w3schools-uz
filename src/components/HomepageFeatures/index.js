import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dasturlashni o\'zbek tilida o\'rganing',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Ko'p dasturlash tillari va dasturlash texnologiyalarini o'rganish qo'llanmasi
        o'zbek tilida yozib chiqildi. 
      </>
    ),
  },
  {
    title: 'Rivojlanish vaqti keldi',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Bu loyiha orqali bilimingizni oshiring yangi texnogiyalarni o'rganing.
        Hammasi bepul va o'zbek tilida
      </>
    ),
  },
  {
    title: 'CyberAcademyuz tomidan tuzildi',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Ushbu loyiha CyberAcademy-uz tomonidan ishlab chiqilgan va boshqarib 
       boriladi. Loyiha Open Source bo'lib siz ham loyihaga o'z hissangizni qo'shishingiz mumkin
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
