import React from "react";
import "./RandevuSecim.css";

const RandevuSecimItem = (props) => {
  const { randevu, onClick, selectedRandevu, gunID } = props;

  return (
    <div
      className="randevu-secim-item"
      style={{
        backgroundColor:
          randevu.alindi == 0
            ? selectedRandevu?.gunID == gunID &&
              selectedRandevu?.saatID == randevu.id
              ? "#013179"
              : "#1975ff"
            : "#dbdbdb",
        cursor: randevu.alindi == 0 ? "pointer" : "not-allowed",
      }}
      onClick={onClick}
    >
      {randevu.saat}
    </div>
  );
};

export default RandevuSecimItem;
