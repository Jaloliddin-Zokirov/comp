import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/Logo-Header.png";
import icon from "../../assets/Icon.png";
import shrap from "../../assets/Shape.png";
import arrowDown from "../../assets/Down.png";
import compare from "../../assets/compare.png";
import like from "../../assets/like.png";
import basket from "../../assets/basket.png";
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
        <div className={styles.down}>
          <div className="container">
            <ul className={styles.down__list}>
              <li className={styles.down__item}>
                <img src={logo} width={164} height={42} alt="site logo" />
              </li>
              <li className={styles.down__item}>katalog</li>
              <li className={styles.down__item}>
                <div className={styles.search}>search</div>
              </li>
              <li className={styles.down__item}>
                <a className={styles.tel__number} href="tel:+0500658796">
                  050 065 87 96
                </a>
                <img
                  className={styles.tel__numberImg}
                  src={arrowDown}
                  width={32}
                  height={32}
                  alt="arrow down"
                />
              </li>
              <li className={styles.line}></li>
              <li className={styles.down__item}>
                <div className={styles.iconBox}>
                  <img
                    src={compare}
                    width={40}
                    height={40}
                    alt="to compare icon" 
                    className={styles.compare__img}
                  />
                  <span className={styles.afterCycle}>23</span>
                </div>
              </li>
              <li className={styles.down__item}>
                <div className={styles.iconBox}>
                  <img
                    src={like}
                    width={40}
                    height={40}
                    alt="like icon"
                    className={styles.like__img}
                  />
                  <span className={styles.afterCycle}>23</span>
                </div>
              </li>
              <li className={styles.down__item}>
                <div className={styles.iconBox}>
                  <img
                    src={basket}
                    width={40}
                    height={40}
                    alt="basket icon"
                    className={styles.basket__img}
                  />
                  <span className={styles.afterCycle}>23</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Menu check={checkMenu} setCheck={setcheckMenu} />
      <LogReg />
    </>
  );
};

export default Header;
