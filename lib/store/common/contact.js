var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactSend"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":143}};
    doc.loc.source = {"body":"mutation($name: String, $email: String, $message: String) {\r\n  contactSend(name: $name, email: $email, message: $message) {\r\n    status\r\n  }\r\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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

var doc$1 = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contact"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fax"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"geocode"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"telephone"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"open"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"comment"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"address"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fax"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"comment"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"open"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"store"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"telephone"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":225}};
    doc$1.loc.source = {"body":"{\r\n\tcontact {\r\n    locations {\r\n      address\r\n      fax\r\n      image\r\n      geocode\r\n    \ttelephone\r\n      open,\r\n      comment\r\n    }\r\n    address\r\n    email\r\n    fax\r\n    comment\r\n    open\r\n    store\r\n    telephone\r\n  }\r\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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

const state = () => ({
  contact: null
});
const getters = {
  get(state) {
    return state.contact
  }
};
const mutations = {
  setContact(state, payload) {
    state.contact = payload;
  }
};
const actions = {
  async send({ dispatch }, contactData) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: doc,
        variables: contactData
      },
      {
        root: true
      }
    );
  },
  async get({ dispatch, rootGetters, commit }) {
    await dispatch(
      'apollo/query',
      {
        query: doc$1
      },
      {
        root: true
      }
    );
    if (!rootGetters['vuefront/error']) {
      commit('setContact', rootGetters['apollo/get'].contact);
    }
  }
};

export { actions, getters, mutations, state };
