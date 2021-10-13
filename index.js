const {nanoid} = require ('nanoid');
const faker = require('faker');

//console.log(nanoid(), nanoid().length, typeof nanoid());


//faker
const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomAdress = faker.address.streetAddress() + faker.address.cityName() + ' ' + faker.address.state();
const randomCompany = faker.company.companyName();
const randomJob = faker.name.jobTitle() + faker.name.jobArea();
const randomCard = faker.finance.creditCardNumber();

let name = 'Hi everyone, my name is ';
let myEmail = 'And my email is ';
let id = 'My personal ID is';
let adress = 'My home adress is ';
console.log(name + randomName + '\n' + myEmail + randomEmail +'\n' + id + ' ' + nanoid() + '\n'+ adress +' ' + randomAdress)


let intro = 'I work at ';
let data = 'And my credit card  number is +'
console.log(intro + randomCompany + 'as a ' + randomJob  + '\n' + data + randomCard);

const produce ='At my job we produce :  '
for (let i=0; i<= 5; i++) {
    console.log(produce + '\n' + faker.commerce.productName() + " - $" + faker.commerce.price());
}