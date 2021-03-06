import axios from "axios";
export const FETCHED = "FETCHED";
export const FETCHING = "FETCHING";
export const POSTING = "POSTING";
export const POSTED = "POSTED";
export const ERROR = "ERROR";

export const fetchSmurfs = () => {
  const request = axios.get(`http://localhost:3333/smurfs`);
   return dispatch => {

    dispatch({ type: FETCHING });
    request
    .then(res => {
      dispatch({ type: FETCHED, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR });
    });
};
};


/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
