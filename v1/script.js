const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Create DOM elements: Render(vyskreslit) facts in list
factsList.innerHTML = "";

//Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://hqjaqtwmqetjmbmjjnab.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxamFxdHdtcWV0am1ibWpqbmFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3ODEzMjYsImV4cCI6MTk5NjM1NzMyNn0.5xpAOvvrSJ_7ntT-thOmRpVPYQbUO3pwwCbKwINQh2g",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxamFxdHdtcWV0am1ibWpqbmFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3ODEzMjYsImV4cCI6MTk5NjM1NzMyNn0.5xpAOvvrSJ_7ntT-thOmRpVPYQbUO3pwwCbKwINQh2g",
      },
    }
  );
  const data = await res.json();
  //console.log(data);
  //const filteredData = data.filter((fact) => fact.category === "technology");

  createFactsList(data);
}

createFactsList(initialFacts);
function createFactsList(dataArray) {
  //factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");

  const htmlArray = dataArray.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}
    <a
    class="source"
    href="${fact.source}"
    target="_blank"
    >(Source)</a
    >
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }"
    >${fact.category}</span
    >
    </li>`
  );

  console.log(htmlArray);
  const html = htmlArray.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle(prepnut) form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

console.log[(7, 64, 6, -23, 11)].filter((el) => el > 10);
console.log[(7, 64, 6, -23, 11)].find((el) => el > 10);

/*
function calcFactAge(year) {
  const currentYear = 2022;
  const age = currentYear - year;

  if (age >= 0) {
    return age;
  } else return "Impossible year";
}
const age1 = calcFactAge(2015);
console.log(age1);

console.log(calcFactAge(2037));

let votesFalse = 7;
let votesInteresting = 20;
let votesMindblowing = 5;
const totalUpVotes = votesInteresting + votesMindblowing;

const message =
  totalUpVotes > votesFalse
    ? "The fact is true"
    : "Might be false, check more sources";

//alert(message);

const text = "Lisbon is capital of portugal";
const upperText = text.toUpperCase();
console.log(upperText);

const str = `The current fact is "${text}". It is ${calcFactAge(
  2015
)} years old. It is probably ${
  totalUpVotes > votesFalse ? "correct" : "not true"
}`;
console.log(str);

//arrow function
const calcFactAge2 = (year) => 2022 - year;
console.log(calcFactAge2(2015));

const calcFactAge3 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or equal ${new Date().getFullYear()}`;

const fact = ["Lisabon is capital of Portugal", 2015, true];
console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [string, createdIn, isCorrect] = fact;
console.log(string);

const newFact = [...fact, "society"];
console.log(newFact);

const factObj = {
  text: "Lisbon is the capital of Portugal",
  category: "society",
  createdIn: 2015,
  createSummary: function () {
    return `The fact "$(this.text)" is from the category $(this.category.toUpperCase()}`;
  },
};

console.log(factObj.text);

const { category } = factObj;
console.log(category);
console.log(factObj.createSummary());

// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });

// const times10 = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });

// const times10 = [2, 4, 6, 8].map((el) => el * 10);
// console.log(times10);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges);
console.log(factAges.join("-"));
*/
