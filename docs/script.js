/************************
* SCRIPT INITIALIZATION *
************************/

console.log("JavaScript has loaded successfully.");


/******************
* LUCIDE BEHAVIOR *
******************/

lucide.createIcons();


/*************************
* INSIGHTS GRID BEHAVIOR *
*************************/

const insightsGrid = document.getElementById("insights-grid");

async function getInsights() {
  const response = await fetch("./data/insights.json");

  if (!response.ok) {
    throw new Error("Failed to load insights data.");
  }

  const insights = await response.json();

  return insights;
}

function createInsightCard(item, index) {
  const card = document.createElement("article");

  card.className = "group relative min-h-80 rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40 overflow-hidden";

  if (index === 0) {
    card.className = "group relative min-h-80 sm:col-span-2 rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40 overflow-hidden";
  }

  card.innerHTML = `
    <!-- IMAGE -->
    <img class="absolute inset-0 w-full h-full object-cover opacity-50 transition duration-500 group-hover:scale-110 group-hover:opacity-75" src="${item.image}" alt="${item.title}">

    <!-- OVERLAY -->
    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

    <!-- CONTENT -->
    <div class="relative min-h-80 p-6 flex flex-col justify-end items-start text-start z-10">
      <span class="px-4 py-2 flex flex-row justify-center items-center gap-2 text-xs text-violet-300 rounded-full border border-violet-500/20 bg-violet-500/10">
        ${item.category}
      </span>

      <h3 class="mt-2 text-2xl font-bold">${item.title}</h3>

      <p class="max-w-sm mt-1 text-sm text-slate-500">
        ${item.description}
      </p>
    </div>
  `;

  return card;
}

async function displayInsights() {
  if (!insightsGrid) {
    return;
  }

  try {
    const insights = await getInsights();

    insights.forEach(function (item, index) {
      const card = createInsightCard(item, index);

      insightsGrid.appendChild(card);
    });
  } catch (error) {
    insightsGrid.innerHTML = `
      <p class="text-sm text-slate-500">
        Unable to load insights at the moment...
      </p>
    `;

    console.error(error);
  }
}

displayInsights();


/**************************
* COPYRIGHT YEAR BEHAVIOR *
**************************/

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
} else {
  console.log("No '#year' element found.");
}


