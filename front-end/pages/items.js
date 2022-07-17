/* This is our items page.  Needs to be queried from API endpoint to retrieve list of items up for auction. 
Right now it's attached to an endpoint that just returns basic items, but that obvs needs to be dynamic. */

import React from "react";
import { useState, useEffect } from "react";

function Items() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/items/items`).then((res) =>
      res.json().then((data) => {
        setData(data);
        console.log(data);
      })
    );
  }, []);

  /* below, right now we're just returning all the items in our database.  This needs to be
  clickable... material ui components can be used, basically just better looking and increased functionality.
  
  */
  return (
    <div>
      {typeof data === "undefined" ?  (
        <p>Loading...</p>
      ) : (
        data.map((name, i) => <p key={i}>{name.name}</p>)
      )}
    </div>
  );
}

export default Items;
