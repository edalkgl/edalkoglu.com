import styles from "./index.module.scss";

import EWLink from "@/src/Components/EWLink";
import { PageLink } from "@/src/Constants/base";

const EWHeader = () => {
  return (
    <header className={styles.container}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.wrapper}>
              <EWLink href={PageLink.Home} className={styles.logo}>
                EL
                <span>.</span>
              </EWLink>
              <div className={styles.menuList}>
                <EWLink href={PageLink.Blog} className={styles.item}>
                  Blog
                </EWLink>
                <EWLink href={PageLink.Projects} className={styles.item}>
                  Projects
                </EWLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EWHeader;
