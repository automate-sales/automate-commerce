import { defineConfig } from "cypress";

import dotenv from 'dotenv';
dotenv.config({ path: '.env.test' })

import prisma from "./src/db";
import ms, { EmailInfo } from 'smtp-tester'

//type Device = 'desktop' | 'mobile'

export default defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      //require("cypress-localstorage-commands/plugin")(on, config);
      console.log(process.env.EMAIL_HOST)
      const port = 7777
      const mailServer = ms.init(port)
      console.log('mail server at port %d', port)
      let lastEmail: { [key:string]: any} = {}
      const handler = function(
        recipient: string | null,
        id: number,
        email: EmailInfo
      ) {
        console.log('--- email to %s ---', email.headers.to)
        console.log(email.body)
        console.log('--- end ---')
        lastEmail[String(email.headers.to)] = {
            body: email.body,
            html: email.html,
        }
      };
      mailServer.bind(handler);
      on('task', {
        /* async lighthouse(device:Device='mobile'){
          const chrome = await launch({chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage']})
          const defaultConfig = {
            logLevel: 'info', 
            output: 'html', 
            onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'], 
            port: chrome.port,
          }
          const options = device==='desktop' ? {
            ...defaultConfig,
            formFactor: 'desktop',
            screenEmulation: {
              mobile: false
            }
          } : {
            ...defaultConfig,
            formFactor: 'mobile'
          }
          const runnerResult = await lighthouse('http://localhost:3000', options)
          await chrome.kill();
          const reportSummary = {
            performance: (runnerResult?.lhr.categories.performance.score ?? 0) * 100,
            accessibility: (runnerResult?.lhr.categories.accessibility.score ?? 0) * 100,
            bestPractices: (runnerResult?.lhr.categories['best-practices'].score ?? 0) * 100,
            seo: (runnerResult?.lhr.categories.seo.score ?? 0) * 100,
          }
          console.log('Lighthouse report summary: ', reportSummary)
          return reportSummary
        }, */
        resetEmails(email) {
          console.log('reset all emails')
          if (email) {
            delete lastEmail[email]
          } else {
            lastEmail = {}
          }
          return null
        },
        getLastEmail(email): EmailInfo {
          return lastEmail[email]
        },

        async wipeTables() {
          try {
            console.log('Wiping tables');
            console.log(process.env.DATABASE_URL)
            await prisma.$transaction([
              prisma.order.deleteMany({}),
              prisma.user.deleteMany({}),
              prisma.cartItem.deleteMany({}),
              prisma.cart.deleteMany({}),
              prisma.lead.deleteMany({}),
            ]);
            console.log('Lead and Cart tables wiped');
            return null;
          } catch (error) {
            console.error('Error wiping tables:', error);
            throw new Error('Failed to wipe tables');
          }
        },

        async getLeads() {
          try {
            const leads = await prisma.lead.findMany();
            return leads;
          } catch (error) {
            console.error('Error getting leads:', error);
            throw new Error('Failed to get leads');
          }
        },

        async createUser( ) {
          try {
            const user = await prisma.user.create({
              data: {
                name: "John Doe",
                username: "johndoe",
                email: "johndoe@doejohn.com"
              }
            })
            return user
          }
          catch (error) {
            console.error('Error creating user with lead:', error);
            throw new Error('Failed to create user with lead');
          }
        },

        async createUserWithLead( leadId?: string ) {
          try {
            const leadOperation = leadId ? { connect: { id: leadId } } : { create: { fingerprint: 'fingerprint' } }
            const userWithLead = await prisma.user.create({
              data: {
                email: 'user_with_current_lead@test.com',
                username: 'user_with_current_lead',
                leads: leadOperation
              },
              include: { leads: true },
            })
            return userWithLead
          }
          catch (error) {
            console.error('Error creating user with lead:', error);
            throw new Error('Failed to create user with lead');
          }
        },

        async createUserWithLeadAndEmptyCart() {
          try {
            const userWithLeadAndCart = await prisma.user.create({
              data: {
                email: 'user_with_lead_and_cart@test.com',
                username: 'user_with_lead_and_cart',
                leads: {
                  create: {
                    fingerprint: 'fingerprint',
                    carts: {
                      create: {
                        status: 'active',
                      },
                    },
                  },
                },
              },
              include: { leads: { include: { carts: true } } },
            })
            return userWithLeadAndCart
          }
          catch (error) {
            console.error('Error creating user with lead and cart:', error);
            throw new Error('Failed to create user with lead and cart');
          }
        },

        async createUserWithLeadAndCartWithItems() {
          try {
            const userWithLeadAndCartWithItems = await prisma.user.create({
              data: {
                email: 'user_with_lead_and_cart_with_items@test.com',
                username: 'user_with_lead_and_cart_with_items',
                leads: {
                  create: {
                    fingerprint: 'fingerprint',
                    carts: {
                      create: {
                        status: 'active',
                        cartItems: {
                          create: {
                            qty: 1,
                            price: 37,
                            product: {
                              connect: { sku: 'stand-cpu-under-bl' },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              include: { leads: { include: { carts: { include: { cartItems: { include: { product: true } } } } } } },
            })
            return userWithLeadAndCartWithItems
          }
          catch (error) {
            console.error('Error creating user with lead and cart with items:', error);
            throw new Error('Failed to create user with lead and cart with items');
          }
        },

      });
      return config;
    },
  },
});
