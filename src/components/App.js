import React, { Component } from 'react';

import ContactsMain from './ContactsMain';

import ContactCntx from '../contexts/contacts';

export default class App extends Component {
  render() {
    return (
      <ContactCntx>
        <ContactsMain />
      </ContactCntx>
    );
  }
}
