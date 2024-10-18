import getTaxonomyFilterSlice from "./helper/getTaxonomyFilterSlice";

const sliceName = 'selectedTaxonomyB';
const addReducerName = 'addTaxonomyBFilter';
const removeReducerName = 'removeTaxonomyBFilter';

export const selectedTaxonomyBSlice = getTaxonomyFilterSlice(sliceName, addReducerName, removeReducerName);

export const taxonomyBActions = selectedTaxonomyBSlice.actions;

export default selectedTaxonomyBSlice.reducer;