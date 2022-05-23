import React, { useRef, useEffect } from "react";

const CarDetails = ({ initialData }) => {
  const detailsFormRef = useRef(null);

  useEffect(() => {
    detailsFormRef.current.reset();
  }, [initialData]);

  return (
    <div>
      <form ref={detailsFormRef}>
        <input
          name="model"
          placeholder="model"
          defaultValue={initialData.model}
        />
        <input name="year" placeholder="year" defaultValue={initialData.year} />
        <input
          name="color"
          placeholder="color"
          defaultValue={initialData.color}
        />
        <button type="submit">Invio</button>
      </form>
    </div>
  );
};

export default CarDetails;
