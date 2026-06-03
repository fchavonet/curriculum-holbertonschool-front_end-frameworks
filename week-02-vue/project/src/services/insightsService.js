export async function getInsights() {
  const response = await fetch("./data/insights.json");

  if (!response.ok) {
    throw new Error("Unable to fetch insights.");
  }

  return response.json();
}
