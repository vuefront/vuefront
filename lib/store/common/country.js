var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"size"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countriesList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"size"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"totalElements"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"first"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"last"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"number"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"numberOfElements"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":220}};
    doc.loc.source = {"body":"query($page: Int, $size: Int) {\r\n  countriesList(page: $page, size: $size) {\r\n    content {\r\n      id\r\n      name\r\n    }\r\n    totalPages\r\n    totalElements\r\n    first\r\n    last\r\n    number\r\n    numberOfElements\r\n  }\r\n}\r\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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

var doc$1 = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}],"loc":{"start":0,"end":70}};
    doc$1.loc.source = {"body":"query($id: String) {\r\n  country(id: $id) {\r\n    id\r\n    name\r\n  }\r\n}\r\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  country: false,
  entities: []
});
const getters = {
  get(state) {
    return state.country
  },
  list(state) {
    return state.entities
  }
};
const mutations = {
  setCountry(state, payload) {
    state.country = payload;
  },
  setEntities(state, payload) {
    state.entities = payload;
  }
};
const actions = {
  async list({ commit, dispatch, rootGetters }, {page, size}) {
    await dispatch(
      'apollo/query',
      {
        query: doc,
        variables: {page, size}
      },
      {
        root: true
      }
    );
    if (!rootGetters['vuefront/error']) {
      commit('setEntities', rootGetters['apollo/get'].countriesList);
    }
  },
  async get({ commit, dispatch, rootGetters }, { id }) {
    await dispatch(
      'apollo/query',
      {
        query: doc$1,
        variables: { id }
      },
      {
        root: true
      }
    );
    if (!rootGetters['vuefront/error']) {
      commit('setCountry', rootGetters['apollo/get'].country);
    }
  }
};

export { actions, getters, mutations, state };
