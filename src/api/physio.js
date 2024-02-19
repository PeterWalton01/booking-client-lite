import { API_ENDPOINT } from "./index";

/*
 * uses a GET request obtain all physios
 *  for the current user
 * @author Peter Walton
 * @return {object|null}  [JSON array of objects.  See
 *                         src\components\History.js]
 */
export const getPhysio = async () => {
  const response = await fetch(`${API_ENDPOINT}/physios`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();

  return jsonResponse;
};
