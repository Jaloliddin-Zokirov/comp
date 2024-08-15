import React, { useState } from "react";
import styles from "./LogReg.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { editLogReg } from "../store/LogReg/LogReg";
import close from "../../assets/CloseRed.png";
import eye from "../../assets/eye_on.png";
import google from "../../assets/google.png";
import facebook from "../../assets/Facebook.png";
import { Link } from "react-router-dom";

const LogReg = () => {
  const { logReg } = useSelector((state) => state.logReg);
  const dispatch = useDispatch();
  const [pass, setPass] = useState("password");

  if (logReg === 0) {
    return <div></div>;
  }

  return (
    <div className={styles.logreg}>
      <div
        className={styles.curtain}
        onClick={() => dispatch(editLogReg(0))}
      ></div>
      {logReg === 1 ? (
        <div className={styles.log}>
          <div className={styles.up}>
            <p className={styles.title}>Вход</p>
            <img
              className={styles.close}
              onClick={() => dispatch(editLogReg(0))}
              src={close}
              width={20}
              height={20}
              alt="close icon"
            />
          </div>
          <div className={styles.center}>
            <input
              className={styles.tel}
              type="tel"
              placeholder="Ваш номер телефона"
            />
            <div className={styles.passBox}>
              <input className={styles.pass} type={pass} placeholder="Пароль" />
              <img
                onClick={() =>
                  setPass(pass === "password" ? "text" : "password")
                }
                className={styles.eye}
                src={eye}
                width={24}
                height={24}
                alt="eye icon"
              />
            </div>
            <Link className={styles.forgot__pass}>Забыли пароль?</Link>
            <button className={styles.btn}>ВОЙТИ</button>
          </div>
          <div className={styles.down}>
            <p className={styles.ili}>
              <span className={styles.line}></span>или войти с помощью{" "}
              <span className={styles.line}></span>
            </p>
            <div className={styles.btnBox}>
              <button className={styles.googleBtn}>
                <img
                  className={styles.btnImage}
                  src={google}
                  width={24}
                  height={24}
                  alt="google icon"
                />{" "}
                Google
              </button>
              <button className={styles.facebookBtn}>
                <img
                  className={styles.btnImage}
                  src={facebook}
                  width={24}
                  height={24}
                  alt="facebook icon"
                />{" "}
                Facebook
              </button>
            </div>
            <p className={styles.akaunt}>
              Нет аккаунта?{" "}
              <Link onClick={() => dispatch(editLogReg(2))}>
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.reg}>
          <div className={styles.up}>
            <p className={styles.title}>Регистрация</p>
            <img
              className={styles.close}
              onClick={() => dispatch(editLogReg(0))}
              src={close}
              width={20}
              height={20}
              alt="close icon"
            />
          </div>
          <div className={styles.center}>
            <input
              className={styles.tel}
              type="tel"
              placeholder="Ваш номер телефона"
            />
            <div className={styles.passBox}>
              <input className={styles.pass} type={pass} placeholder="Пароль" />
              <img
                onClick={() =>
                  setPass(pass === "password" ? "text" : "password")
                }
                className={styles.eye}
                src={eye}
                width={24}
                height={24}
                alt="eye icon"
              />
            </div>
            <p className={styles.registratsiya}>
              Регистрируясь, вы соглашаетесь с
              <Link> пользовательским соглашением</Link>
            </p>
            <button className={styles.btn}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
          </div>
          <div className={styles.down}>
            <p className={styles.ili}>
              <span className={styles.line2}></span>или зарегестрироваться с
              помощью
              <span className={styles.line2}></span>
            </p>
            <div className={styles.btnBox}>
              <button className={styles.googleBtn}>
                <img
                  className={styles.btnImage}
                  src={google}
                  width={24}
                  height={24}
                  alt="google icon"
                />{" "}
                Google
              </button>
              <button className={styles.facebookBtn}>
                <img
                  className={styles.btnImage}
                  src={facebook}
                  width={24}
                  height={24}
                  alt="facebook icon"
                />{" "}
                Facebook
              </button>
            </div>
            <p className={styles.akaunt}>
              Уже есть зарегестрированы?{" "}
              <Link onClick={() => dispatch(editLogReg(1))}>Войти</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogReg;
