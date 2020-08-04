import React, { FunctionComponent } from 'react'
import logo from '../../assets/vectors/logo.svg';
import './UnauthenticatedApp.scss';
import { Background } from '../../components/background/Background'

export type UnauthenticatedAppProps = {}

export type UnauthenticatedAppState = {}

export const UnauthenticatedApp: FunctionComponent<UnauthenticatedAppProps> = (props) => {
  return (
    <div className="App">
      <Background />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Maiden City 200 Club
          </p>
        </header>
    </div>

  );
}

