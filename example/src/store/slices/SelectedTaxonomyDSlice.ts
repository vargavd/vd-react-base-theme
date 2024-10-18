import getTaxonomyFilterSlice from "./helper/getTaxonomyFilterSlice";

const sliceName = 'selectedTaxonomyD';
const addReducerName = 'addTaxonomyDFilter';
const removeReducerName = 'removeTaxonomyDFilter';

export const selectedTaxonomyDSlice = getTaxonomyFilterSlice(sliceName, addReducerName, removeReducerName);

export const taxonomyDActions = selectedTaxonomyDSlice.actions;

export default selectedTaxonomyDSlice.reducer;