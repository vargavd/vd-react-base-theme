import getTaxonomyFilterSlice from "./getTaxonomyFilterSlice";

const sliceName = 'selectedTaxonomyA';
const addReducerName = 'addTaxonomyAFilter';
const removeReducerName = 'removeTaxonomyAFilter';

export const selectedTaxonomyASlice = getTaxonomyFilterSlice(sliceName, addReducerName, removeReducerName);

export const taxonomyAActions = selectedTaxonomyASlice.actions;

export default selectedTaxonomyASlice.reducer;