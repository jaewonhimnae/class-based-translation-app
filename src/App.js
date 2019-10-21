import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class App extends Component {

  handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  render() {
    const { t } = this.props;

    let somthingNeedsTobe = "";
    let tagetedValue = 1;
    //when you want it to be rtl 
    if (tagetedValue === 1) {
      somthingNeedsTobe = "rtl"
    } else {
      somthingNeedsTobe = "ltr"
    }

    return (
      <div className="App">
        <nav style={{ width: '100%', padding: '2rem 0', backgroundColor: 'gray' }}>
          <button onClick={() => this.handleClick('en')} >
            English
        </button>
          <button onClick={() => this.handleClick('ko')} >
            Korean
        </button>
          <button onClick={() => this.handleClick('chi')} >
            Chinese
          </button>
        </nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3>
            {somthingNeedsTobe === rtl ?
              t('Position1') :
              t('Position2')
            }
            {somthingNeedsTobe === rtl ?
              //Load External Css A
              <></>
              : 
              <></>
              //Load External Css B
            }

          </p>
        </header>
      </div>
    )
  }
}

export default withTranslation()(App);
