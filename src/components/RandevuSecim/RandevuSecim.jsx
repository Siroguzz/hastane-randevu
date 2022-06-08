import React from "react";
import { Button } from "react-bootstrap";
import RandevuSecimItem from "./RandevuSecimItem";

const RandevuSecim = (props) => {
  const {
    id,
    showRandevular,
    onayla,
    setShowRandevular,
    selectedRandevu,
    setSelectedRandevu,
    randevu_saatleri,
  } = props;

  const onClick = (gun, saat) => {
    if (
      selectedRandevu?.doktorID == id &&
      selectedRandevu?.gunID == gun.id &&
      selectedRandevu?.saatID == saat.id
    ) {
      setSelectedRandevu();
    } else if (saat?.alindi == 1) {
      alert("Bu randevu alinamaz!");
    } else {
      const tmp = {
        doktorID: id,
        gunID: gun.id,
        saatID: saat.id,
      };
      setSelectedRandevu(tmp);
    }
  };

  return (
    showRandevular == true && (
      <div>
        {randevu_saatleri.map((gun) => (
          <div key={gun.id}>
            <br />
            <h5 className="m-2 mb-3">{gun.tarih.toLocaleDateString()}</h5>
            {gun.saatler.map((saat) => (
              <RandevuSecimItem
                randevu={saat}
                selectedRandevu={selectedRandevu}
                key={saat.id}
                gunID={gun.id}
                onClick={() => onClick(gun, saat)}
              />
            ))}
            <hr />
          </div>
        ))}
        {selectedRandevu && (
          <Button onClick={onayla} className="m-2" variant="success">
            Onayla
          </Button>
        )}
      </div>
    )
  );
};

export default RandevuSecim;
