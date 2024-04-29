import { mkConfig, generateCsv } from "../node_modules/export-to-csv/output/index.js";

// Configs
const csvConfig = mkConfig({ useKeysAsHeaders: true });

const mockData = [
  {
    name: "Rouky",
    date: "2023-09-01",
    percentage: 0.4,
    quoted: '"Pickles"',
    nullish: null,
    "string with spaces as header": "value with spaces",
  },
  {
    name: "Keiko",
    date: "2023-09-01",
    percentage: 0.9,
    quoted: '"Cactus"',
    nullish: "test",
    "string with spaces as header": "more spaces",
  },
];

const csv = generateCsv(csvConfig)(mockData);

let blob = new Blob([csv], {
  type: `text/csv;charset=utf8;`,
});

const url = URL.createObjectURL(blob);

const csvBtn = document.querySelector("#csv");

csvBtn.addEventListener("click", () => {
  chrome.downloads.download({ url, body: csv, filename: "chrome-extension-output.csv" });
});



