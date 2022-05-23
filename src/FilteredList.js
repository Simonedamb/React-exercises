import React, { useMemo, useState } from "react";

function FilteredList() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Pippo",
      age: 37,
    },
    {
      id: 2,
      name: "Topolino",
      age: 15,
    },
    {
      id: 3,
      name: "Paperino",
      age: 17,
    },
    {
      id: 4,
      name: "Pluto",
      age: 15,
    },
  ]);

  const handleFilterData = useMemo(() => {
    return data.filter((item) => item.age < 18);
  }, [data]);

  return (
    <div>
      <ul>
        {handleFilterData.map((item) => {
          return (
            <div>
              <div>{item.id}</div>
              <div>{item.name}</div>
              <div>{item.age}</div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default FilteredList;
