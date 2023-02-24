import styles from './index.module.scss';

import { IconBrandGithub } from '@/src/Assets/IconBrandGithub';
import IconBrandLinkedin from '@/src/Assets/IconBrandLinkedin';
import IconBrandEmail from '@/src/Assets/IconBrandEmail';
import EWButton from '@/src/Components/EWButton';
import EWImage from '@/src/Components/EWImage';
import EWLink from '@/src/Components/EWLink';
import EWHeader from '@/src/Composite/EWHeader';
import AppLayout from '@/src/Layout/applayout';
import { Base } from '@/src/Constants/base';

const HomePage = () => {
  return (
    <AppLayout>
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
                    alt={'Eda Lökoğlu'}
                    width={150}
                    height={150}
                    priority
                  />
                  <h1 className={styles.resumeSide}>Hi, I'm Eda Lökoğlu</h1>
                  <span className={styles.badgeSide}>Front-End Developer</span>
                  <h4 className={styles.titleSide}>
                    I have been improving my skills by working in the Front-End
                    field since 2021. I closely follow the latest technologies
                    and trends in the sector and I enjoy exploring new tools and
                    techniques to improve the user experience and make the
                    development process more efficient. I am excited to continue
                    my development in this field and contribute to innovative
                    projects.
                  </h4>
                  <div className={styles.linkSide}>
                    <EWButton className={styles.btn}>Hire Me</EWButton>
                  </div>
                  <h4 className={styles.socialTitle}>Social Accounts</h4>
                  <div className={styles.sectionSocialList}>
                    <EWLink
                      href={Base.GitHub}
                      className={styles.item}
                      target={'_blank'}>
                      <IconBrandGithub className={styles.icon} />
                      <span className={styles.text}>GitHub</span>
                    </EWLink>
                    <EWLink
                      href={Base.Linkedin}
                      className={styles.item}
                      target={'_blank'}>
                      <IconBrandLinkedin className={styles.icon} />
                      <span className={styles.text}>LinkedIn</span>
                    </EWLink>
                    <EWLink
                      href={Base.Email}
                      className={styles.item}
                      target={'_blank'}>
                      <IconBrandEmail className={styles.icon} />
                      <span className={styles.text}>Email</span>
                    </EWLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <EWFooter /> */}
    </AppLayout>
  );
};

export default HomePage;
