import { addToDom } from './helper';
import add from './add';
import SuperPerson from './person';

addToDom('<hr>');

const Bob=new SuperPerson('Bob','BobCatMan');
const Susie=new SuperPerson('Susie','Wonder Susan');

addToDom(Bob.speak('Hello'));
addToDom(Susie.speak('Hi Bob'));

addToDom(Susie.xRay());

addToDom(Bob.sayHeroName());