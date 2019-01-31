import axios from "axios";

export const fetchData = (searchItem) => {
      return axios
      .get("https://www.googleapis.com/books/v1/volumes?q="+searchItem)
      .then(res =>res.data.items[0].volumeInfo );
  
};
