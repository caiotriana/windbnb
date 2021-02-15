import { useState } from 'react';
import logo from '../../assets/img/logo.svg'

function Header() { 
  const [isOpenSearch, setIsOpenSearch] = useState(false)

  function handleOnclickSearch() { 
    setIsOpenSearch(!isOpenSearch)
  }

  return (
    <>
      <header className={`Header ${isOpenSearch ? 'Header-isOpen' : ''}`}>
        <div className={'Header-content'}>
          <div className={'Header-content-left'}>
            <img src={logo} alt={'logo windbnb'} />
          </div>
          <div className={'Header-content-right'}>
            <div className={'Header-content-search'} onClick={handleOnclickSearch}>
              <ul className={'Header-content-search-list'}>
                <li className={'Header-content-search-list-item'}></li>
                <li className={'Header-content-search-list-item'}></li>
                <li className={'Header-content-search-list-item'}>
                  <i className="las la-search"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;