// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import { User, Lead, CartItem, Cart } from '@prisma/client'

// Extend the Cypress namespace to define custom task types
declare global {
    namespace Cypress {
      interface Chainable {
        task(
          event: 'createUserWithLead',
          leadId?: string
        ): Cypress.Chainable<User & { leads: Lead[] }>;
        task(
            event: 'getUserWithLead',
            email: string
        ): Cypress.Chainable<User & { leads: Lead[] }>;
        task(
            event: 'createUserWithLeadAndEmptyCart'
        ): Cypress.Chainable<User & { leads: Lead[] }>;
        task(
            event: 'createUserWithLeadAndCartWithItems'
        ): Cypress.Chainable<User & { 
            leads: Lead & {
                carts: Cart & { cartItems: CartItem[] }[]
            } }>;
      }
    }
  }
  
  export {};