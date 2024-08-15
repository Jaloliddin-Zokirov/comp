import React from "react";
import styles from "./Menu.module.scss";
import logo from "../../../assets/menuLogo.png";
import close from "../../../assets/Close.png";
import arrowUp from "../../../assets/Up.png";
import whatsapp from "../../../assets/whatsapp.png";
import telegram from "../../../assets/telegram.png";
import Socialsblock from "../../../assets/Socialsblock.png";
import { Link } from "react-router-dom";
import { editLogReg } from "../../store/LogReg/LogReg";
import { useDispatch } from "react-redux";

const Menu = ({ check, setCheck }) => {
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(editLogReg(value));
    setCheck(false);
  };
  return (
    <>
      <div className={`${styles.menu} ${check ? styles.menu__on : ""}`}>
        <div className={styles.up}>
          <Link
            className={styles.logoLink}
            to="/"
            onClick={() => setCheck(false)}
          >
            <img
              className={styles.logo}
              src={logo}
              width={160}
              height={40}
              alt="site logo"
            />
          </Link>
          <img
            onClick={() => setCheck(false)}
            className={styles.close}
            src={close}
            width={32}
            height={32}
            alt="close icon"
          />
        </div>
        <div className={styles.down}>
          <div className={styles.vxodReg}>
            <button onClick={() => handleClick(1)}>Вход</button> |{" "}
            <button onClick={() => handleClick(2)}>Регистрация</button>
          </div>
          <label className={styles.informatsiya} id="box_1">
            <input className={styles.arrowCheck} type="checkbox" id="box_1" />
            <div className={styles.informatsiya__box}>
              <h3 className={styles.title}>Информация</h3>
              <img
                className={`${styles.arrow} ${styles.arrow__off}`}
                src={arrowUp}
                width={32}
                height={32}
                alt="arrow"
              />
            </div>
            <ul className={`${styles.list} ${styles.list__off}`}>
              <li className={styles.item}>
                <p className={styles.text}>Акции</p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>Кредит</p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>Оплата и доставка</p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>Гарантия</p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>Частые вопросы</p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>Новости</p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>Блог</p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>О нас</p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>Политика конфиденциальности</p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>Контакты</p>
              </li>
            </ul>
          </label>
          <label className={styles.service} id="box_2">
            <input className={styles.arrowCheck} type="checkbox" id="box_2" />
            <div className={styles.service__box}>
              <h3 className={styles.title}>Наши сервисы</h3>
              <img
                className={`${styles.arrow} ${styles.arrow__off}`}
                src={arrowUp}
                width={32}
                height={32}
                alt="arrow"
              />
            </div>
            <ul className={`${styles.list} ${styles.list__off}`}>
              <li className={styles.item}>
                <p className={styles.text}>Hali ishlab chiqilmoqda</p>
              </li>
            </ul>
          </label>
          <div className={styles.contact}>
            <h3 className={styles.title}>Контакты</h3>
            <ul className={styles.contact__list}>
              <li className={styles.contact__item}>
                <p className={styles.contact__text}>
                  <a className={styles.contact__tel} href="tel:+0671112485">
                    (067) 11-12-485
                  </a>{" "}
                  - Отдел продаж
                </p>
              </li>
              <li className={styles.contact__item}>
                <p className={styles.contact__text}>
                  <a className={styles.contact__tel} href="tel:+0664843922">
                    (066) 484-39-22
                  </a>{" "}
                  - Отдел продаж
                </p>
              </li>
              <li className={styles.contact__item}>
                <p className={styles.contact__text}>
                  <a className={styles.contact__tel} href="tel:+0637473348">
                    (063) 747-33-48
                  </a>{" "}
                  - Отдел продаж
                  <img
                    src={whatsapp}
                    width={22}
                    height={22}
                    alt="whatsapp icon"
                  />
                  <img
                    src={telegram}
                    width={22}
                    height={22}
                    alt="telegram icon"
                  />
                </p>
              </li>
              <li className={styles.contact__item}>
                <p className={styles.contact__text}>Днепр</p>
                <p className={styles.contact__text}>
                  Европейская, 8 (бывшая Миронова 8)
                </p>
              </li>
              <li className={styles.contact__item}>
                <p className={styles.contact__text}>
                  Понедельник-Пятница 9:00-19:00
                </p>
                <p className={styles.contact__text}>
                  Суббота-Воскресенье: с 9:00-16:00
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.social}>
            <h3 className={styles.title}>Следите за нами</h3>
            <img
              src={Socialsblock}
              width={232}
              height={32}
              alt="social block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
