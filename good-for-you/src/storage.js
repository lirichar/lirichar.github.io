const ENDINGS_KEY = "goodForYou.endings";

function getCollection() {
  try {
    return JSON.parse(localStorage.getItem(ENDINGS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveEnding(id) {
  const collection = new Set(getCollection());
  collection.add(id);
  localStorage.setItem(ENDINGS_KEY, JSON.stringify([...collection]));
}

export { getCollection, saveEnding };
