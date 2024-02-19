import { API_ENDPOINT } from "./index";

/*
 * uses a GET request obtain all treatments
 *  for the current user
 * @author Peter Walton
 * @return {object|null}  [JSON array of objects.  See
 *                         src\components\History.js]
 */
export const getTreatments = async () => {
  const response = await fetch(`${API_ENDPOINT}/treatments`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();

  return jsonResponse;
};
