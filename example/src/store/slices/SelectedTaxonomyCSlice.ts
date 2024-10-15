import getTaxonomyFilterSlice from "./getTaxonomyFilterSlice";

const sliceName = 'selectedTaxonomyC';
const addReducerName = 'addTaxonomyCFilter';
const removeReducerName = 'removeTaxonomyCFilter';

export const selectedTaxonomyCSlice = getTaxonomyFilterSlice(sliceName, addReducerName, removeReducerName);

export const taxonomyCActions = selectedTaxonomyCSlice.actions;

export default selectedTaxonomyCSlice.reducer;