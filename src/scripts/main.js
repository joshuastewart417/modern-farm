import { addPlant, usePlants } from "./field.js";
import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";

const yearlyPlan = createPlan();

const asparagusSeed = createAsparagus();

addPlant(asparagusSeed);

const chosenPlant = usePlants();
console.log(chosenPlant);
