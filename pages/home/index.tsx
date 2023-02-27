import styles from './index.module.scss';

import {
  IconBrandEmail,
  IconBrandGithub,
  IconBrandLinkedin
} from '@/src/Assets';
import { EWHeader } from '@/src/Composite';
import AppLayout from '@/src/Layout/applayout';
import { EWImage, EWLink } from '@/src/Components';
import { Base } from '@/src/Constants/base';
import Head from 'next/head';

const HomePage = () => {
  return (
    <AppLayout>
      <Head>
        <title>{Base.Title}</title>
        <meta name="description" content={Base.Job}></meta>
      </Head>
      <EWHeader />
      <main className={styles.main}>
        <section className={styles.infoSection}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.wrapper}>
                  <EWImage
                    className={styles.avatarSide}
                    src={
                      'https://cdn-w1.netlify.app/other/2023/11/15/1650966138041.jpeg'
                    }
                    alt={Base.Title}
                    width={150}
                    height={150}
                    priority
                  />
                  <h1 className={styles.resumeSide}>{Base.Title}</h1>
                  <span className={styles.badgeSide}>{Base.Job}</span>
                  <div className={styles.textSide}>
                    I have been improving my skills by working in the Front-End
                    field since 2021. I closely follow the latest technologies
                    and trends in the sector and I enjoy exploring new tools and
                    techniques to improve the user experience and make the
                    development process more efficient. I am excited to continue
                    my development in this field and contribute to innovative
                    projects.
                  </div>

                  <h2 className={styles.socialTitle}>Social Accounts</h2>
                  <div className={styles.sectionSocialList}>
                    <EWLink
                      href={Base.GitHub}
                      className={styles.item}
                      target={'_blank'}
                      ariaLabel={'GitHub'}>
                      <IconBrandGithub
                        className={styles.icon}
                        width={20}
                        height={20}
                      />

                      <span className={styles.text}>GitHub</span>
                    </EWLink>
                    <EWLink
                      href={Base.Linkedin}
                      className={styles.item}
                      target={'_blank'}
                      ariaLabel={'Linkedin'}>
                      <IconBrandLinkedin
                        className={styles.icon}
                        width={20}
                        height={20}
                      />
                      <span className={styles.text}>LinkedIn</span>
                    </EWLink>
                    <EWLink
                      href={`mailto:${Base.Email}`}
                      className={styles.item}
                      target={'_blank'}
                      ariaLabel={'E-mail'}>
                      <IconBrandEmail
                        className={styles.icon}
                        width={20}
                        height={20}
                      />
                      <span className={styles.text}>{Base.Email}</span>
                    </EWLink>
                  </div>
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
