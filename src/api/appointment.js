import { API_ENDPOINT } from "./index";

/*
 * uses a GET request obtain appointments
 * by date and physio
 * @author Peter Walton
 * @return {object|null}  [JSON array of objects.  See
 *                         src\components\History.js]
 */
export const getAppointmentsByDateAndPhysio = async (physioName, startDate) => {
  const response = await fetch(
    `${API_ENDPOINT}/appointments/physio/${physioName}/fromdate/${startDate}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const jsonResponse = await response.json();

  return jsonResponse;
};

/*
 * uses a POST request to register a new local
 * use account
 * @author Peter Walton
 * @param  {user}         [user object: see
 *                         src\components\Register.js
 *                         for details]
 *
 * @return {object|null}  [JSON object containing response]
 */
export const addAppointment = async (body) => {
  const response = await fetch(`${API_ENDPOINT}/appointments`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

/*
 * uses a POST request to register a new local
 * use account
 * @author Peter Walton
 * @param  {user}         [user object: see
 *                         src\components\Register.js
 *                         for details]
 *
 * @return {object|null}  [JSON object containing response]
 */
export const deleteAppointment = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/appointments/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};
