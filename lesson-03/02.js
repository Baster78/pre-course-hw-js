const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

let orangeYes = words.indexOf("апельсин");
if (orangeYes != -1) {
  console.log("Ура! нашел");
} else {
  console.log("Придется поискать в другом магазине...");
}
