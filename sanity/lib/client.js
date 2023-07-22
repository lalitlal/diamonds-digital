import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn, token } from "../env";
// api token for writing docs
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
});
