export const randevuGuncelle = (doktorlar,randevu, durum) => {
  doktorlar.forEach((x) => {
    if (x.id == randevu.doktorID) {
      x.randevu_saatleri.forEach((y) => {
        if (y.id == randevu.gunID) {
          y.saatler.forEach((z) => {
            if (z.id == randevu.saatID) {
              let tmp = { ...z };
              z.alindi = durum;
              return tmp;
            }
            return z;
          });
        }
        return x;
      });
    }
    return x;
  });
  return doktorlar;
};



