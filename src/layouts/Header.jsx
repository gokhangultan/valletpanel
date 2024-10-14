import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../store/actions/globalActions'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const dispatch = useDispatch();
  
  const darkMode = useSelector((state) => state.global.darkMode);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div id="" className={`bg-lightTheme dark:bg-darkTheme py-2`}>
      <header id="" className="">
        <div className="">
          <h1>Dark Mode Test</h1>
          <button onClick={handleToggleDarkMode} className="ml-4">
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun} size="lg" />
          </button>
        </div>
      </header>
    </div>
  );
}
