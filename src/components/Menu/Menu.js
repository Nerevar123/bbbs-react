import React, { useState } from "react";
import cn from "classnames";
import menuStyles from "./Menu.module.scss";
import searchStyles from "../Search/Search.module.scss";
import appStyles from "../App/App.module.scss";
import linkStyles from "../Link/Link.module.scss";

function Menu() {
  const [isMenuListHidden, setIsMenuLIstHidden] = useState(true);
  const [isSearchHidden, setIsSearchHidden] = useState(true);

  const toggleMenu = () => {
    if (isSearchHidden) {
      setIsSearchHidden(false);
    }
    setIsMenuLIstHidden(!isMenuListHidden);
  };

  const toggleSearch = () => {
    if (isMenuListHidden) {
      setIsMenuLIstHidden(true);
    }
    setIsSearchHidden(!isMenuListHidden);
  };

  return (
    <nav className={menuStyles.menu}>
      <a href="./" target="_self" className="menu__logo">
        наставники.про
      </a>
      <div
        className={cn(menuStyles.menu__listsWrap, {
          [menuStyles.menu__listsWrap_hidden]: isMenuListHidden,
        })}
      >
        <ul className={menuStyles.menu__list}>
          <li className={menuStyles.menu__listItem}>
            <a href="./calendar" className={menuStyles.menu__link}>
              Календарь
            </a>
          </li>
          <li className={menuStyles.menu__listItem}>
            <a href="./place" className={menuStyles.menu__link}>
              Куда пойти
            </a>
          </li>
          <li className={menuStyles.menu__listItem}>
            <a href="./questions" className={menuStyles.menu__link}>
              Вопросы
            </a>
          </li>
          <li className={menuStyles.menu__dropdownItem}>
            <a href="./read-watch-main" className={menuStyles.menu__link}>
              Читать и смотреть
            </a>
            <ul className={menuStyles.menu__dropdownList}>
              <li className={menuStyles.menu__dropdownListItem}>
                <a href="./catalog" className={menuStyles.menu__dropdownLink}>
                  Справочник
                </a>
              </li>
              <li className={menuStyles.menu__dropdownListItem}>
                <a href="./video" className={menuStyles.menu__dropdownLink}>
                  Видео
                </a>
              </li>
              <li className={menuStyles.menu__dropdownListItem}>
                <a href="./articles" className={menuStyles.menu__dropdownLink}>
                  Статьи
                </a>
              </li>
              <li className={menuStyles.menu__dropdownListItem}>
                <a href="./films" className={menuStyles.menu__dropdownLink}>
                  Фильмы
                </a>
              </li>
              <li className={menuStyles.menu__dropdownListItem}>
                <a href="./books" className={menuStyles.menu__dropdownLink}>
                  Книги
                </a>
              </li>
            </ul>
          </li>
          <li className={menuStyles.menu__listItem}>
            <a href="./rights" className={menuStyles.menu__link}>
              Права детей
            </a>
          </li>
          <li className={menuStyles.menu__listItem}>
            <a href="./stories" className={menuStyles.menu__link}>
              Истории
            </a>
          </li>
        </ul>

        <ul
          className={cn(menuStyles.menu__list_type_social, {
            [menuStyles.menu__list_hidden]: isMenuListHidden,
          })}
        >
          <li className={menuStyles.menu__listItem}>
            <a
              href="https://www.facebook.com/BigBrothers.BigSisters.Russia/"
              className={menuStyles.menu__link}
              target="_blank"
              rel="noreferrer"
            >
              facebook
            </a>
          </li>
          <li className={menuStyles.menu__listItem}>
            <a
              href="https://vk.com/big.brothers.big.sisters"
              className={menuStyles.menu__link}
              target="_blank"
              rel="noreferrer"
            >
              vkontakte
            </a>
          </li>
          <li className={menuStyles.menu__listItem}>
            <a
              href="https://www.instagram.com/nastavniki_org/"
              className={menuStyles.menu__link}
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
          </li>
          <li className={menuStyles.menu__listItem}>
            <a
              href="https://www.youtube.com/user/Nastavniki/"
              className={menuStyles.menu__link}
              target="_blank"
              rel="noreferrer"
            >
              youtube
            </a>
          </li>
        </ul>
      </div>

      <button className="menu__burger" type="button">
        <span className="menu__burger-line"></span>
        <span className="menu__burger-line"></span>
        <span className="menu__burger-line"></span>
      </button>

      <ul className={menuStyles.menu__buttonList}>
        <li className={menuStyles.menu__buttonItem}>
          <form className={searchStyles.search} name="search-form">
            <button
              className="menu__button menu__button_type_search search__button"
              type="submit"
              aria-label="Поиск"
              title="Поиск"
            ></button>
            <div
              className={cn(
                menuStyles.menu__searchOptions,
                searchStyles.search__options,
                {
                  [searchStyles.search__options_visible]: !isSearchHidden,
                }
              )}
            >
              <input
                type="text"
                name="search"
                placeholder="Поиск"
                value=""
                className={cn(appStyles.paragraph, searchStyles.search__input)}
              />
              <ul className={searchStyles.search__optionList}>
                <li className={searchStyles.search__optionItem}>
                  <a
                    href="./article"
                    className={cn(
                      searchStyles.search__titleLink,
                      appStyles.sectionTitle,
                      appStyles.sectionTitle_clickable
                    )}
                  >
                    Причины подростковой агрессии
                  </a>
                  <a href="./article" className={linkStyles.link}>
                    статьи
                  </a>
                </li>
                <li className={searchStyles.search__optionItem}>
                  <a
                    href="./video.html"
                    className={cn(
                      searchStyles.search__titleLink,
                      appStyles.sectionTitle,
                      appStyles.sectionTitle_clickable
                    )}
                  >
                    Агрессивное поведение детей-сирот
                  </a>
                  <a href="./video" className={linkStyles.link}>
                    видео
                  </a>
                </li>
                <li className={searchStyles.search__optionItem}>
                  <a
                    href="./questions.html"
                    className={cn(
                      searchStyles.search__titleLink,
                      appStyles.sectionTitle,
                      appStyles.sectionTitle_clickable
                    )}
                  >
                    Что делать если ваш младший агрессивно себя ведет, решил
                    закрыть пару?
                  </a>
                  <a href="./questions" className={linkStyles.link}>
                    вопросы
                  </a>
                </li>
                <li className={searchStyles.search__optionItem}>
                  <a
                    href="./books"
                    className={cn(
                      searchStyles.search__titleLink,
                      appStyles.sectionTitle,
                      appStyles.sectionTitle_clickable
                    )}
                  >
                    Как реагировать на агрессивное поведения ребенка
                  </a>
                  <a href="./books" className={linkStyles.link}>
                    книги
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </li>
        <li className={menuStyles.menu__buttonItem}>
          <button
            className="menu__button menu__button_type_user"
            type="button"
            aria-label="Личный кабинет"
            title="Личный кабинет"
            onClick="document.location='./personal-area.html'"
          ></button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
