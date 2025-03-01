import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";
// console.log("TMDB API Key:", ENV_VARS.TMBD_API_KEY);


export const fetchFromTMDB = async(url) => {
    const options = {
        headers: {
          accept: 'application/json',
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjk3MjY5ZDc2MWVhMzMxZGY5YzMyMzI5OTRiMDRiZCIsIm5iZiI6MTcyOTcwNDM5Ny44NDMwMDAyLCJzdWIiOiI2NzE5MzFjZDc2OTEwN2Q3N2I0NzY3MzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5h9xzMsyKKJFhXjDFnp25zcoeOH5Vnec-_SQNf4c5Yo",
          // Authorization: "Bearer " + ENV_VARS.TMBD_API_KEY,
          
        },
      };
      const response = await axios.get(url, options)

      if(response.status!==200){
        throw new Error("Failed to fetch data from TMDB"+ response.statusText);
      }

      return response.data
}










  // fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  //   .catch(err => console.error(err));

  // const res = await fetch("");
      // const data= await res.json();
      // return data