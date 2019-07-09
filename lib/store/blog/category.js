var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"categoriesMenu"},"name":{"kind":"Name","value":"categoriesBlogList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"parent"},"value":{"kind":"IntValue","value":"0"}},{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"IntValue","value":"-1"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"to"},"name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"categories"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"to"},"name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"categories"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"to"},"name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"directives":[]}]}}]}}]}}]}}]}}],"loc":{"start":0,"end":377}};
    doc.loc.source = {"body":"query($url: String) {\r\n  categoriesMenu: categoriesBlogList(parent: 0, size: -1) {\r\n    content {\r\n      id\r\n      title: name\r\n      to: url(url: $url)\r\n      children: categories {\r\n        id\r\n        title: name\r\n        to: url(url: $url)\r\n        children: categories {\r\n          id\r\n          title: name\r\n          to: url(url: $url)\r\n        }\r\n      }\r\n    }\r\n  }\r\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  menuItems: [],
  category: {}
});
const getters = {
  menu(state) {
    return state.menuItems
  },
  get(state) {
    return state.category
  }
};
const mutations = {
  setCategoryBlogMenu(state, categories) {
    state.menuItems = categories.content;
  },
  setCategory(state, category) {
    state.category = category;
  }
};
const actions = {
  async loadMenu({ dispatch, commit, rootGetters }) {
    await dispatch(
      'apollo/query',
      {
        query: doc,
        variables: {
            url: '/blog/category/_id'
        }
      },
      { root: true }
    );
    if (!rootGetters['vuefront/error']) {
      const { categoriesMenu } = rootGetters['apollo/get'];
      commit('setCategoryBlogMenu', categoriesMenu);
    }
  }
};

export { actions, getters, mutations, state };
