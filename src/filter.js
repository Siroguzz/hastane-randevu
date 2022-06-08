export const searchFilter = (ara, addresses) => {
  return addresses.filter(
    (x) =>
      x.name.toLowerCase().includes(ara) ||
      x.surname.toLowerCase().includes(ara) ||
      x.phoneNumber.toLowerCase().includes(ara) ||
      x.address.toLowerCase().includes(ara)
  );
};
