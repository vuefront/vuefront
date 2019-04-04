export const flatToTree = (flatArray, options) => {
  options = {
    id: 'id',
    parentId: 'parentId',
    children: 'children',
    ...options
  }
  const tree = [] // the resulting tree to return
  const dictionary = {} // a hash table mapping to the specific array objects with their ids as key
  flatArray.forEach(node => {
    // set up current node data in dictionary
    dictionary[node[options.id]] = {
      [options.children]: [], // init a children property
      ...node, // add other propertys
      ...dictionary[node[options.id]] // children will be replaced if this node already has children property which was set below
    }
    if (node[options.parentId]) {
      // is parent node
      dictionary[node[options.parentId]] = dictionary[
        node[options.parentId]
      ] || { [options.children]: [] } // if it's not exist in dictionary, init an object with children property
      dictionary[node[options.parentId]][options.children].push(
        dictionary[node[options.id]]
      ) // add reference to current node object in parent node object
    } else {
      // is root node
      tree.push(dictionary[node[options.id]])
    }
  })
  return tree
}
