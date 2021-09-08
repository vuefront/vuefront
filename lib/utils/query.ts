import { getCurrentInstance, getCurrentScope } from "vue";

export default function useQuery() {
  const instance = getCurrentInstance();
  let query = null;
  if ((instance?.type as any).query) {
    query = (instance?.type as any).query;
  }
  return { query };
}
