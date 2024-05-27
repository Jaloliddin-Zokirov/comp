import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/Logo-Header.png";
import icon from "../../assets/Icon.png";
import shrap from "../../assets/Shape.png";
import { Link } from "react-router-dom";
import Menu from "./Menu/Menu";
import LogReg from "../LogReg/LogReg";

const Header = () => {
  const [ChangeLang, setChangeLang] = useState(false);
  const [checkMenu, setcheckMenu] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.up}>
          <div className="container">
            <div className={styles.box}>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <img
                    onClick={() => setcheckMenu(true)}
                    src={icon}
                    width={25}
                    height={25}
                    alt="icon"
                  />
                </li>
                <li className={styles.item}>
                  <Link className={styles.text}>Акции</Link>
                </li>
                <li className={styles.item}>
                  <Link className={styles.text}>Кредит</Link>
                </li>
                <li className={styles.item}>
                  <Link className={styles.text}>Оплата и доставка</Link>
                </li>
                <li className={styles.item}>
                  <Link className={styles.text}>Помощь</Link>
                </li>
                <li className={styles.item}>
                  <Link className={styles.text}>Скупка Б/У</Link>
                </li>
                <li className={styles.item}>
                  <Link className={styles.text}>Контакты</Link>
                </li>
              </ul>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <p
                    className={styles.text}
                    onClick={() => setChangeLang(!ChangeLang)}
                  >
                    <span className={!ChangeLang ? styles.noactive : ""}>
                      UZ
                    </span>{" "}
                    /{" "}
                    <span className={ChangeLang ? styles.noactive : ""}>
                      RU
                    </span>
                  </p>
                </li>
                <li className={styles.item}>
                  <img src={shrap} width={24} height={24} alt="avatar" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.down}></div>
        {/* <img src={logo} width={164} height={42} alt="site logo" /> */}
      </header>
      <Menu check={checkMenu} setCheck={setcheckMenu} />
      <LogReg />
    </>
  );
};

export default Header;
