var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editCurrency"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"symbol_left"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"symbol_right"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"active"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":132}};
    doc.loc.source = {"body":"mutation($code: String) {\r\n  editCurrency(code: $code) {\r\n    code\r\n    symbol_left\r\n    symbol_right\r\n    title\r\n    active\r\n  }\r\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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

var doc$1 = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"symbol_left"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"symbol_right"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"active"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":90}};
    doc$1.loc.source = {"body":"{\r\n\tcurrency {\r\n    code\r\n    symbol_left\r\n    symbol_right\r\n    title\r\n    active\r\n  }\r\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  currency: {}
});
const getters = {
  get(state) {
    return state.currency
  }
};
const mutations = {
  setCurrency(state, currency) {
    state.currency = currency;
  }
};
const actions = {
  async load({ commit, dispatch, rootGetters }) {
    await dispatch(
      'apollo/query',
      {
        query: doc$1
      },
      { root: true }
    );
    if (!rootGetters['vuefront/error']) {
      commit('setCurrency', rootGetters['apollo/get'].currency);
    }
  },
  async edit({ commit, dispatch, rootGetters }, { code }) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: doc,
        variables: {
          code
        }
      },
      {
        root: true
      }
    );
    if (!rootGetters['vuefront/error']) {
      commit('setCurrency', rootGetters['apollo/get'].editCurrency);
    }
  }
};

export { actions, getters, mutations, state };
