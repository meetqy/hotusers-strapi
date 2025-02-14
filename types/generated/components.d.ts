import type { Schema, Attribute } from '@strapi/strapi';

export interface AccountAccount extends Schema.Component {
  collectionName: 'components_account_accounts';
  info: {
    displayName: 'User';
    icon: 'grid';
    description: '';
  };
  attributes: {
    follows: Attribute.Integer;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'account.account': AccountAccount;
    }
  }
}
