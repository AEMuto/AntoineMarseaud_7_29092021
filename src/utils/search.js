export default function linearSearch(query, data) {
  return data
    .filter(glossary => glossary.terms.includes(query))
    .map(glossary => glossary.id);
}