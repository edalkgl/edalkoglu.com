import styles from "./index.module.scss";

const EWFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.wrapper}>
              <div className={styles.menuList}>Projects</div>
              <div className={styles.social}>
                <div className={styles.item}>Social</div>
                <div className={styles.item}>GitHub</div>
                <div className={styles.item}>Linkedin</div>
                <div className={styles.item}>E-mail</div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EWFooter;
