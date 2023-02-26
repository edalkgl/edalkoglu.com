import styles from './index.module.scss';

import { projectMock } from '@/src/Mocks/projectsMock';
import { EWImage, EWMarkdown } from '@/src/Components';
import AppLayout from '@/src/Layout/applayout';
import { EWHeader } from '@/src/Composite';
import { Key } from 'react';
import Head from 'next/head';
import { Base } from '@/src/Constants/base';

const HomePage = () => {
  return (
    <AppLayout>
      <Head>
        <title>{Base.Title}</title>
      </Head>
      <EWHeader />
      <main className={styles.main}>
        <section className={styles.headlineSection}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.headline}>
                  Projects<span>.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.projectSection}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.projectList}>
                  {projectMock?.map((item, index: Key) => (
                    <div className={styles.item} key={index}>
                      <div className={styles.wrapper}>
                        <h3 className={styles.title}>{item?.title}</h3>
                        <p className={styles.text}>{item?.text}</p>
                      </div>
                      <EWImage
                        src={item?.image}
                        alt={item?.text}
                        width={1200}
                        height={400}
                        quality={75}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
};

export default HomePage;
