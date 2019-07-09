var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerInput"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountRegister"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customer"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":136}};
    doc.loc.source = {"body":"mutation($customer: CustomerInput) {\r\n  accountRegister(customer: $customer) {\r\n    id\r\n    firstName\r\n    lastName\r\n    email\r\n  }\r\n}\r\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

var doc$1 = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":157}};
    doc$1.loc.source = {"body":"mutation($email: String, $password: String) {\r\n  accountLogin(email: $email, password: $password) {\r\n    id\r\n    firstName\r\n    lastName\r\n    email\r\n  }\r\n}\r\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences$1(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences$1(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences$1(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences$1(def, refs);
        });
      }
    }

    var definitionRefs$1 = {};
    (function extractReferences() {
      doc$1.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences$1(def, refs);
          definitionRefs$1[def.name.value] = refs;
        }
      });
    })();

var doc$2 = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountLogout"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":51}};
    doc$2.loc.source = {"body":"mutation {\r\n  accountLogout {\r\n    status\r\n  }\r\n}\r\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences$2(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences$2(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences$2(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences$2(def, refs);
        });
      }
    }

    var definitionRefs$2 = {};
    (function extractReferences() {
      doc$2.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences$2(def, refs);
          definitionRefs$2[def.name.value] = refs;
        }
      });
    })();

var doc$3 = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customer"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerInput"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountEdit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customer"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":132}};
    doc$3.loc.source = {"body":"mutation($customer: CustomerInput) {\r\n  accountEdit(customer: $customer) {\r\n    id\r\n    firstName\r\n    lastName\r\n    email\r\n  }\r\n}\r\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences$3(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences$3(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences$3(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences$3(def, refs);
        });
      }
    }

    var definitionRefs$3 = {};
    (function extractReferences() {
      doc$3.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences$3(def, refs);
          definitionRefs$3[def.name.value] = refs;
        }
      });
    })();

var doc$4 = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountEditPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":133}};
    doc$4.loc.source = {"body":"mutation($password: String) {\r\n  accountEditPassword(password: $password) {\r\n    id\r\n    firstName\r\n    lastName\r\n    email\r\n  }\r\n}\r\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences$4(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences$4(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences$4(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences$4(def, refs);
        });
      }
    }

    var definitionRefs$4 = {};
    (function extractReferences() {
      doc$4.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences$4(def, refs);
          definitionRefs$4[def.name.value] = refs;
        }
      });
    })();

var doc$5 = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountCheckLogged"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":124}};
    doc$5.loc.source = {"body":"{\r\n  accountCheckLogged {\r\n    status\r\n    customer {\r\n      id\r\n      lastName\r\n      firstName\r\n      email\r\n    }\r\n  }\r\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences$5(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences$5(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences$5(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences$5(def, refs);
        });
      }
    }

    var definitionRefs$5 = {};
    (function extractReferences() {
      doc$5.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences$5(def, refs);
          definitionRefs$5[def.name.value] = refs;
        }
      });
    })();

const state = () => ({
  customer: null,
  auth: false
});
const getters = {
  get(state) {
    return state.customer
  },
  auth(state) {
    return state.auth
  }
};
const mutations = {
  setCustomer(state, payload) {
    state.customer = payload;
  },
  setAuth(state, payload) {
    state.auth = payload;
  }
};
const actions = {
  async login({commit, dispatch, rootGetters}, customerData) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: doc$1,
        variables: customerData
      },
      {
        root: true
      }
    );
    if (!rootGetters['vuefront/error']) {
      commit('setCustomer', rootGetters['apollo/get'].accountLogin);
      commit('setAuth', true);
    }
  },
  async logout({commit, dispatch, rootGetters}) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: doc$2,
      },
      {
        root: true
      }
    );
    if (!rootGetters['vuefront/error']) {
      commit('setCustomer', {});
      commit('setAuth', rootGetters['apollo/get'].accountLogout.status);
    }
  },
  async edit({commit, dispatch, rootGetters}, customerData) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: doc$3,
        variables: {
          customer: customerData
        }
      },
      {
        root: true
      }
    );
    if (!rootGetters['vuefront/error']) {
      commit('setCustomer', rootGetters['apollo/get'].accountEdit);
    }
  },
  async editPassword({commit, dispatch, rootGetters}, {password}) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: doc$4,
        variables: {
          password
        }
      },
      {
        root: true
      }
    );
    if (!rootGetters['vuefront/error']) {
      commit('setCustomer', rootGetters['apollo/get'].accountEditPassword);
    }
  },
  async register({commit, dispatch, rootGetters}, customerData) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: doc,
        variables: {
          customer: customerData
        }
      },
      {
        root: true
      }
    );
    if (!rootGetters['vuefront/error']) {
      commit('setCustomer', rootGetters['apollo/get'].accountRegister);
    }
  },
  async checkLogged({commit, dispatch, rootGetters}) {
    await dispatch(
      'apollo/query',
      {
        query: doc$5
      },
      {
        root: true
      }
    );
    if (!rootGetters['vuefront/error'] && rootGetters['apollo/get'].accountCheckLogged && rootGetters['apollo/get'].accountCheckLogged.customer) {
      commit(
        'setCustomer',
        rootGetters['apollo/get'].accountCheckLogged.customer
      );
      commit('setAuth', rootGetters['apollo/get'].accountCheckLogged.status);
    }
  }
};

export { actions, getters, mutations, state };
