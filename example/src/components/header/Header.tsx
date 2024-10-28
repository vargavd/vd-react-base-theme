// react imports
import * as React from "react";

// misc imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faList, faQuestion } from "@fortawesome/free-solid-svg-icons";

// store imports
import { useSelector, useDispatch } from 'react-redux';
import { UnknownAction } from "@reduxjs/toolkit";
import type { RootState } from '../../store';
import { taxonomyAActions } from '../../store/slices/SelectedTaxonomyASlice';
import { taxonomyBActions } from '../../store/slices/SelectedTaxonomyBSlice';
import { taxonomyCActions } from '../../store/slices/SelectedTaxonomyCSlice';
import { taxonomyDActions } from '../../store/slices/SelectedTaxonomyDSlice';

// data imports
import { LocationTerm } from "../../data";

// styles
import "./Header.scss";

interface HeaderProps {
  taxonomyATerms: LocationTerm[],
  taxonomyBTerms: LocationTerm[],
  taxonomyCTerms: LocationTerm[],
  taxonomyDTerms: LocationTerm[]
}

const Header: React.FC<HeaderProps> = ({
  taxonomyATerms,
  taxonomyBTerms,
  taxonomyCTerms,
  taxonomyDTerms
}) => {
  const selectedTaxonomyAFilters = useSelector((state: RootState) => state.selectedTaxonomyA);
  const selectedTaxonomyBFilters = useSelector((state: RootState) => state.selectedTaxonomyB);
  const selectedTaxonomyCFilters = useSelector((state: RootState) => state.selectedTaxonomyC);
  const selectedTaxonomyDFilters = useSelector((state: RootState) => state.selectedTaxonomyD);

  const dispatch = useDispatch();

  // helper funcs
  const renderFilter = (selectedFilters: string[], addFilterAction: (term: string) => UnknownAction, removeFilterAction: (term: string) => UnknownAction) => (term: LocationTerm) => {
    const isSelected = selectedFilters.indexOf(term.name) !== -1;
    const linkClass = isSelected ? 'selected' : '';

    return (
      <li key={term.id} onClick={() => dispatch(isSelected ? removeFilterAction(term.name) : addFilterAction(term.name))}>
        <a className={linkClass}>
          <FontAwesomeIcon icon={faCheck} />
          {term.name}
        </a>
      </li>
    );
  };

  return (
    <>
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
          <a className="top-bar_link__import" onClick={() => console.log('dsadasd')}>
            <FontAwesomeIcon icon={faQuestion} />
            <span>About</span>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;