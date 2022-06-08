export const alanlar = ["Kalp", "Göz", "Ortopedi", "Dahiliye", ""];
export const iller = ["Ankara", "Edirne", "İstanbul", "Kars", ""];

export const veri = [
  {
    id: 1,
    il: iller[0],
    doktor: {
      ad: "Feridun",
      soyad: "Can",
      alani: alanlar[0],
    },
    randevu_saatleri: [
      {
        id: 1,
        tarih: new Date("2022-5-24"),
        saatler: [
          { id: 1, saat: "8:00", alindi: 0 },
          { id: 2, saat: "8:30", alindi: 0 },
          { id: 3, saat: "9:00", alindi: 1 },
          { id: 4, saat: "9:30", alindi: 0 },
        ],
      },
      {
        id: 2,
        tarih: new Date("2022-5-25"),
        saatler: [
          { id: 1, saat: "8:00", alindi: 0 },
          { id: 2, saat: "8:30", alindi: 1 },
          { id: 3, saat: "9:00", alindi: 1 },
          { id: 4, saat: "9:30", alindi: 0 },
        ],
      },
    ],
  },
  {
    id: 2,
    il: iller[2],
    doktor: {
      ad: "Orkun",
      soyad: "Kaya",
      alani: alanlar[1],
    },
    randevu_saatleri: [
      {
        id: 1,
        tarih: new Date("2022-5-24"),
        saatler: [
          { id: 1, saat: "8:00", alindi: 0 },
          { id: 2, saat: "8:30", alindi: 0 },
          { id: 3, saat: "9:00", alindi: 1 },
          { id: 4, saat: "9:30", alindi: 0 },
        ],
      },
      {
        id: 2,
        tarih: new Date("2022-5-25"),
        saatler: [
          { id: 1, saat: "8:00", alindi: 0 },
          { id: 2, saat: "8:30", alindi: 0 },
          { id: 3, saat: "9:00", alindi: 0 },
          { id: 4, saat: "9:30", alindi: 0 },
        ],
      },
    ],
  },
  {
    id: 3,
    il: iller[3],
    doktor: {
      ad: "Cenk",
      soyad: "Ates",
      alani: alanlar[3],
    },
    randevu_saatleri: [
      {
        id: 1,
        tarih: new Date("2022-5-24"),
        saatler: [
          { id: 1, saat: "8:00", alindi: 1 },
          { id: 2, saat: "8:30", alindi: 0 },
          { id: 3, saat: "9:00", alindi: 1 },
          { id: 4, saat: "9:30", alindi: 1 },
        ],
      },

      {
        id: 2,
        tarih: new Date("2022-5-26"),
        saatler: [
          { id: 1, saat: "8:00", alindi: 0 },
          { id: 2, saat: "8:30", alindi: 1 },
          { id: 3, saat: "9:00", alindi: 0 },
          { id: 4, saat: "9:30", alindi: 0 },
        ],
      },
      {
        id: 3,
        tarih: new Date("2022-5-27"),
        saatler: [
          { id: 1, saat: "8:00", alindi: 0 },
          { id: 2, saat: "8:30", alindi: 1 },
          { id: 3, saat: "9:00", alindi: 0 },
          { id: 4, saat: "9:30", alindi: 0 },
        ],
      },
    ],
  },
  {
    id: 4,
    il: iller[1],
    doktor: {
      ad: "Arzu",
      soyad: "Fatma",
      alani: alanlar[1],
    },
    randevu_saatleri: [
      {
        id: 1,
        tarih: new Date("2022-5-24"),
        saatler: [
          { id: 1, saat: "8:00", alindi: 0 },
          { id: 2, saat: "8:30", alindi: 0 },
          { id: 3, saat: "9:00", alindi: 0 },
          { id: 4, saat: "9:30", alindi: 0 },
        ],
      },
      {
        id: 2,
        tarih: new Date("2022-5-25"),
        saatler: [
          { id: 1, saat: "8:00", alindi: 1 },
          { id: 2, saat: "8:30", alindi: 1 },
          { id: 3, saat: "9:00", alindi: 1 },
          { id: 4, saat: "9:30", alindi: 0 },
        ],
      },
    ],
  },
];
