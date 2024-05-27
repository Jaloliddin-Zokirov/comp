import React from "react";
import styles from "./Footer.module.scss";
import masterAndVisa from "../../assets/master_visa.png";
import footerLogo from "../../assets/footer_logo.png";
import whatsapp from "../../assets/whatsapp.png";
import telegram from "../../assets/telegram.png";
import Socialsblock from "../../assets/Socialsblock.png";
import send from "../../assets/send.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.up}>
          <div className={styles.list__box}>
            <strong className={styles.title}>Информация</strong>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link>Акции</Link>
              </li>
              <li className={styles.item}>
                <Link>Кредит</Link>
              </li>
              <li className={styles.item}>
                <Link>Оплата и доставка</Link>
              </li>
              <li className={styles.item}>
                <Link>Гарантия</Link>
              </li>
              <li className={styles.item}>
                <Link>Частые вопросы</Link>
              </li>
              <li className={styles.item}>
                <Link>Новости</Link>
              </li>
              <li className={styles.item}>
                <Link>Блог</Link>
              </li>
              <li className={styles.item}>
                <Link>О нас</Link>
              </li>
              <li className={styles.item}>
                <Link>Политика конфиденциальности</Link>
              </li>
              <li className={styles.item}>
                <Link>Контакты</Link>
              </li>
            </ul>
          </div>
          <div className={styles.list__box}>
            <strong className={styles.title}>Услуги и сервисы</strong>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link>Сервисный центр v-comp</Link>
              </li>
              <li className={styles.item}>
                <Link>Магазин Б/У товара</Link>
              </li>
              <li className={styles.item}>
                <Link>Скупка Б/У</Link>{" "}
              </li>
              <li className={styles.item}>
                <Link>Ремонт ПК и оргтехники</Link>
              </li>
              <li className={styles.item}>
                <Link>Компьютерная помощь</Link>
              </li>
              <li className={styles.item}>
                <Link>Сотрудничество</Link>
              </li>
              <li className={styles.item}>
                <Link>Главная</Link>
              </li>
            </ul>
          </div>
          <div className={styles.list__box}>
            <strong className={styles.title}>Контакты</strong>
            <ul className={styles.list}>
              <li className={styles.item}>
                <p className={styles.text}>
                  <a className={styles.tel} href="tel:+0671112485">
                    (067) 11-12-485
                  </a>{" "}
                  - Отдел продаж
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>
                  <a className={styles.tel} href="tel:+0664843922">
                    (066) 484-39-22
                  </a>{" "}
                  - Отдел продаж
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>
                  <a className={styles.tel} href="tel:+0637473348">
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
              <li className={styles.item}>
                <p className={styles.text}>Днепр</p>
                <p className={styles.text}>
                  Европейская, 8 (бывшая Миронова 8)
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.text}>Понедельник-Пятница 9:00-19:00</p>
                <p className={styles.text}>Суббота-Воскресенье: с 9:00-16:00</p>
              </li>
            </ul>
          </div>
          <div className={styles.list__box}>
            <strong className={styles.title}>Следите за нами</strong>
            <ul className={styles.list}>
              <li className={styles.item}>
                <img
                  src={Socialsblock}
                  width={232}
                  height={32}
                  alt="social block"
                />
              </li>
              <li className={styles.item}>
                <span className={styles.title2}>Подписывайтесь на скидки</span>
                <div className={styles.inpBox}>
                  <input
                    className={styles.email}
                    type="email"
                    placeholder="Укажите ваш email..."
                  />
                  <button>
                    <img
                      className={styles.send}
                      src={send}
                      width={32}
                      height={32}
                      alt="send icon"
                    />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.down}>
          <div className={styles.left}>
            <Link to={"/"}>
              <img
                className={styles.logo}
                src={footerLogo}
                width={160}
                height={41}
                alt="site logo"
              />
            </Link>
            <p className={styles.text}>
              2008-2021 Интернет-магазин v-comp.com.ua Все права защищены
            </p>
          </div>
          <img
            className={styles.card__icon}
            src={masterAndVisa}
            width={100}
            height={32}
            alt="mastercard and visa card icon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
