var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"author"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rating"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addBlogPostReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"author"},"value":{"kind":"Variable","name":{"kind":"Name","value":"author"}}},{"kind":"Argument","name":{"kind":"Name","value":"rating"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rating"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"imageLazy"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"datePublished"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rating"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"StringValue","value":"/blog/category/_id","block":false}}],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"prev"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"imageLazy"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"keyword"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"next"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"imageLazy"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"keyword"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalElements"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"author_email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"created_at"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"rating"},"arguments":[],"directives":[]}]}}]}}]}}]}}],"loc":{"start":0,"end":749}};
    doc.loc.source = {"body":"mutation($id: String, $content: String, $author: String, $rating: Float) {\r\n  addBlogPostReview(\r\n    id: $id\r\n    content: $content\r\n    author: $author\r\n    rating: $rating\r\n  ) {\r\n    id\r\n    title\r\n    description\r\n    image\r\n    imageLazy\r\n    datePublished\r\n    rating\r\n    categories {\r\n      id\r\n      name\r\n      url(url: \"/blog/category/_id\")\r\n    }\r\n    prev {\r\n      id\r\n      name\r\n      image\r\n      imageLazy\r\n      shortDescription\r\n      keyword\r\n    }\r\n    next {\r\n      id\r\n      name\r\n      image\r\n      imageLazy\r\n      shortDescription\r\n      keyword\r\n    }\r\n    reviews {\r\n      totalElements\r\n      content {\r\n        author\r\n        author_email\r\n        content\r\n        created_at\r\n        rating\r\n      }\r\n    }\r\n  }\r\n}\r\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
  entities: {},
  post: {}
});
const getters = {
  list(state) {
    return state.entities
  },
  get(state) {
    return state.post
  }
};
const mutations = {
  setEntities(state, posts) {
    state.entities = posts;
  },
  setPost(state, post) {
    state.post = post;
  }
};
const actions = {
  async addReview({ commit, dispatch, rootGetters }, reviewData) {
    await dispatch(
      'apollo/mutate',
      {
        mutation: doc,
        variables: reviewData
      },
      {
        root: true
      }
    );
    if (!rootGetters['vuefront/error']) {
      commit('setPost', rootGetters['apollo/get'].addBlogPostReview);
    }
  }
};

export { actions, getters, mutations, state };
