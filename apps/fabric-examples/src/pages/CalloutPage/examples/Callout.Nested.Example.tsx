import * as React from 'react';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import './CalloutExample.scss';

import { items } from '../../CommandBarPage/examples/data';

export interface ICalloutBaiscExampleState {
  isCalloutVisible?: boolean;
}

export class CalloutNestedExample extends React.Component<any, ICalloutBaiscExampleState> {
  private _menuButtonElement: HTMLElement;

  public constructor() {
    super();

    this._onDismiss = this._onDismiss.bind(this);

    this.state = {
      isCalloutVisible: false,
    };
  }

  public render() {
    let { isCalloutVisible } = this.state;

    return (
      <div className='ms-CalloutExample'>
        <div className='ms-CalloutBasicExample-buttonArea' ref={ (menuButton) => this._menuButtonElement = menuButton }>
          <Button onClick={ this._onDismiss } >{ isCalloutVisible ? 'Hide callout' : 'Show callout' }</Button>
        </div>
        { isCalloutVisible ? (
          <div>
            <Callout
              className='ms-CalloutExample-callout'
              gapSpace={ 0 }
              targetElement={ this._menuButtonElement }
              onDismiss={ (ev: any) => { this._onDismiss(ev); } }
              setInitialFocus={ true }
            >
              <div className='ms-CalloutExample-header'>
                <p className='ms-CalloutExample-title'>
                  Callout title here
                </p>
              </div>
              <div className='ms-CalloutExample-inner'>
                <div className='ms-CalloutExample-content'>
                  <p className='ms-CalloutExample-subText'>
                    Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.
                  </p>
                </div>
              </div>
              <CommandBar items={ this.props.items } />
            </Callout>
          </div>
        ) : (null) }
      </div>
    );
  }

  private _onDismiss(ev: any) {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  }
}
