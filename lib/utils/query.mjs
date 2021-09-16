import { getCurrentInstance } from "vue";
export default function useQuery() {
  const instance = getCurrentInstance();
  let query = null;

  if ((instance == null ? void 0 : instance.type).query) {
    query = (instance == null ? void 0 : instance.type).query;
  }

  return {
    query
  };
}
//# sourceMappingURL=query.mjs.map