import axios from 'axios';
import { useEffect, useState } from 'react'

const GetData = () => {
   const [repo, setRepo] = useState([]);

    useEffect(() => {
      const username = "Equator-Studios";
      const repoName = "scrapers";
      
      axios({
        method: "GET",
        url: `https://api.github.com/repos/${username}/${repoName}/contents/scrapers`
      }).then(response => {
        setRepo(response.data)
      })
    }, []);

   return [repo];
};

export default GetData;