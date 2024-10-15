// react imports
import * as React from "react";

// misc imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faCheck, faList } from "@fortawesome/free-solid-svg-icons";

// store imports
import { useSelector, useDispatch } from 'react-redux';
import { UnknownAction } from "@reduxjs/toolkit";
import type { RootState } from '../../store';
import { taxonomyAActions } from '../../store/slices/SelectedTaxonomyASlice';
import { taxonomyBActions } from '../../store/slices/SelectedTaxonomyBSlice';
import { taxonomyCActions } from '../../store/slices/SelectedTaxonomyCSlice';
import { taxonomyDActions } from '../../store/slices/SelectedTaxonomyDSlice';

// styles
import "./Header.scss";

// data
import { locationInfos } from "../../data";


// load data
const taxonomyATerms: string[] = [];
const taxonomyBTerms: string[] = [];
const taxonomyCTerms: string[] = [];
const taxonomyDTerms: string[] = [];
locationInfos.forEach(locationInfo => {
  locationInfo.taxonomyATerms.forEach(term => {
    if (taxonomyATerms.indexOf(term) === -1) {
      taxonomyATerms.push(term)
    }
  });

  locationInfo.taxonomyBTerms.forEach(term => {
    if (taxonomyBTerms.indexOf(term) === -1) {
      taxonomyBTerms.push(term)
    }
  });

  locationInfo.taxonomyCTerms.forEach(term => {
    if (taxonomyCTerms.indexOf(term) === -1) {
      taxonomyCTerms.push(term)
    }
  });

  locationInfo.taxonomyDTerms.forEach(term => {
    if (taxonomyDTerms.indexOf(term) === -1) {
      taxonomyDTerms.push(term)
    }
  });
});


const Header: React.FC = () => {
  const selectedTaxonomyAFilters = useSelector((state: RootState) => state.selectedTaxonomyA);
  const selectedTaxonomyBFilters = useSelector((state: RootState) => state.selectedTaxonomyB);
  const selectedTaxonomyCFilters = useSelector((state: RootState) => state.selectedTaxonomyC);
  const selectedTaxonomyDFilters = useSelector((state: RootState) => state.selectedTaxonomyD);

  const dispatch = useDispatch();

  // helper funcs
  const renderFilter = (selectedFilters: string[], addFilterAction: (term: string) => UnknownAction, removeFilterAction: (term: string) => UnknownAction) => (term: string) => {
    const isSelected = selectedFilters.indexOf(term) !== -1;
    const linkClass = isSelected ? 'selected' : '';

    return (
      <li key={term} onClick={() => dispatch(isSelected ? removeFilterAction(term) : addFilterAction(term))}>
        <a className={linkClass}>
          <FontAwesomeIcon icon={faCheck} />
          {term}
        </a>
      </li>
    );
  };

  return (
    <header className="top-bar">
      <h1>Locations</h1>

      <div className="top-bar__filters">
        <div className="top-bar__filter noselect">
          <div className="top-bar__filter-title">
            <FontAwesomeIcon icon={faList} />
            <span>Taxonomy A Filter</span>
          </div>
          <ul id="taxonomy-a-filter">
            {taxonomyATerms.map(renderFilter(selectedTaxonomyAFilters, taxonomyAActions.addTaxonomyAFilter, taxonomyAActions.removeTaxonomyAFilter))}
          </ul>
        </div>

        <div className="top-bar__filter noselect">
          <div className="top-bar__filter-title">
            <FontAwesomeIcon icon={faList} />
            <span>Taxonomy B Filter</span>
          </div>
          <ul id="taxonomy-b-filter">
            {taxonomyBTerms.map(renderFilter(selectedTaxonomyBFilters, taxonomyBActions.addTaxonomyBFilter, taxonomyBActions.removeTaxonomyBFilter))}
          </ul>
        </div>

        <div className="top-bar__filter noselect">
          <div className="top-bar__filter-title">
            <FontAwesomeIcon icon={faList} />
            <span>Taxonomy E Filter</span>
          </div>
          <ul id="taxonomy-e-filter">
            {taxonomyCTerms.map(renderFilter(selectedTaxonomyCFilters, taxonomyCActions.addTaxonomyCFilter, taxonomyCActions.removeTaxonomyCFilter))}
          </ul>
        </div>

        <div className="top-bar__filter noselect">
          <div className="top-bar__filter-title">
            <FontAwesomeIcon icon={faList} />
            <span>Taxonomy F Filter</span>
          </div>
          <ul id="taxonomy-f-filter">
            {taxonomyDTerms.map(renderFilter(selectedTaxonomyDFilters, taxonomyDActions.addTaxonomyDFilter, taxonomyDActions.removeTaxonomyDFilter))}
          </ul>
        </div>
      </div>

      <div className="top-bar__links">
        <a className="top-bar_link__description">
          <FontAwesomeIcon icon={faQuestion} />
        </a>
      </div>
    </header>
  );
};

export default Header;