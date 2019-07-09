var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagesList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"IntValue","value":"-1"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"keyword"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":104}};
    doc.loc.source = {"body":"{\r\n  pagesList (page: 1, size: -1) {\r\n    content {\r\n      id\r\n      title\r\n      keyword\r\n    }\r\n  }\r\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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

const state = () => ({
  entities: []
});
const getters = {
  get(state) {
    return state.entities;
  }
};
const mutations = {
  setEntities(state, pages) {
    state.entities = [];
    for (const key in pages.content) {
      state.entities = [
        ...state.entities,
        {
          title: pages.content[key].title,
          to:
            pages.content[key].keyword !== ""
              ? `/${pages.content[key].keyword}`
              : `/common/page/${pages.content[key].id}`
        }
      ];
    }
  }
};
const actions = {
  async load({ dispatch, commit, rootGetters }) {
    await dispatch(
      "apollo/query",
      {
        query: doc,
        variables: {
          url: "/common/page/_id"
        }
      },
      { root: true }
    );
    if (!rootGetters["vuefront/error"]) {
      const { pagesList } = rootGetters["apollo/get"];
      commit("setEntities", pagesList);
    }
  }
};

export { actions, getters, mutations, state };
