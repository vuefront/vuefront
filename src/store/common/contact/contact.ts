import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "vuefront-store";
import { Contact } from "vuefront-api";
import gql from "graphql-tag";
export type State = {
  contact: Contact;
};
export const state: State = {
  contact: {},
};

export const getters: GetterTree<State, RootState> = {
  get(state) {
    return state.contact;
  },
};

export const mutations: MutationTree<State> = {
  setContact(state, payload) {
    state.contact = payload;
  },
};

export const actions: ActionTree<State, RootState> = {
  async send({ dispatch, rootGetters, commit }, contactData) {
    await dispatch(
      "apollo/mutate",
      {
        mutation: gql`
          mutation ($name: String, $email: String, $message: String) {
            contactSend(name: $name, email: $email, message: $message) {
              status
            }
          }
        `,
        variables: contactData,
      },
      {
        root: true,
      }
    );

    if (!rootGetters["vuefront/error"]) {
      commit(
        "notification/add",
        this.$i18n.global.t("elements.common.contact.successText"),
        { root: true }
      );
      return true;
    } else {
      commit("notification/error", rootGetters["vuefront/error"].message);
    }

    return false;
  },
  async get({ dispatch, rootGetters, commit }) {
    try {
      const { data } = await this.$vfapollo.query({
        query: gql`
          {
            contact {
              locations {
                address
                fax
                image
                geocode
                telephone
                open
                comment
              }
              address
              email
              fax
              comment
              open
              store
              telephone
            }
          }
        `,
      });

      commit("setContact", data.contact);
    } catch (e) {
      commit("vuefront/setResponseError", e, {
        root: true,
      });
    }
  },
};
