const data = [
  {
    id: 1,
    name: "Apple macbook pro m3",
    price: 1000,
    date: new Date("2025-01-02"),
    image: "https://fakeimg.pl/350x200/?text=Apple macbook pro m3",
    description:
      "This is product 1 will show first in the list by name, last by price and second by date",
  },
  {
    id: 2,
    name: "Bugatti",
    price: 800,
    date: new Date("2025-01-01"),
    image: "https://fakeimg.pl/350x200/?text=Bugatti",
    description:
      "This is product 2 will show second in the list by name, 4th by price and first by date",
  },
  {
    id: 3,
    name: "Chevrolet",
    price: 200,
    date: new Date("2025-01-05"),
    image: "https://fakeimg.pl/350x200/?text=Chevrolet",
    description:
      "This is product 3 will show 3rd in the list by name, first by price and last by date",
  },
  {
    id: 4,
    name: "Desk",
    price: 500,
    date: new Date("2025-01-03"),
    image: "https://fakeimg.pl/350x200/?text=Desk",
    description:
      "This is product 4 will show 4th in the list by name, 3rd by price and 3rd by date",
  },
  {
    id: 5,
    name: "Earphone",
    price: 400,
    date: new Date("2025-01-04"),
    image: "https://fakeimg.pl/350x200/?text=Earphone",
    description:
      "This is product 5 will show 5th in the list by name, 2nd by price and 4th by date",
  },
];

export const getProducts = () => data;
