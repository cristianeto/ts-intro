/*
    ===== Código de TypeScript =====
*/
interface Address {
  street: string;
  city: string;
  country: string;
}

interface SuperHero {
  name: string;
  age: number;
  address: Address;
  showAddress: () => string;
}

const superHero: SuperHero = {
  name: 'Spiderman',
  age: 30,
  address: {
    street: 'Main St',
    city: 'NY',
    country: 'USA',
  },
  showAddress() {
    return this.name + ', ' + this.address.city + ', ' + this.address.country;
  },
};

const address = superHero.showAddress();

console.log(address);
