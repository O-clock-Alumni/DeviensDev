/**
 * Normalize data
 * @param  {Array} data
 * @return {Object} { ids: [...], questions: {...} }
 */
export const normalizeData = data => {
  const structureNormalize = {
    ids: [],
    questions: {},
  };

  data.forEach(datum => {
    structureNormalize.ids.push(datum.id);
    structureNormalize.questions[datum.id] = datum;
  });

  return structureNormalize;
};
