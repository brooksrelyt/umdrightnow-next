import React, { useState, useEffect } from 'react';
import { orderBy } from 'lodash'
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, NavbarText } from 'reactstrap';
import { SearchBox, RefinementList, ClearRefinements, Stats, Configure } from 'react-instantsearch-dom'

const FilterNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // Current Date Variables
  const today = Math.floor(+ new Date().getTime() / 1000)

  // Filter State
  const [filterState, setFilterState] = useState({
    filter: `start_date.unix_int >= ${today}`
  })

  return (
    <div className="filternav">
      <Navbar color="light" light expand="md">
        <div className="filter-icon">
          <span class="fal fa-filter"></span>
        </div>
        <div className="search-area">
          <SearchBox
            className="search-box"
            aria-label="search-box"
            translations={{
              placeholder: 'Search',
            }}
          />

          <Configure
            filters={filterState.filter}
          />

          <div className="search-icon">
            <span className="fal fa-icon fa-search" aria-hidden="true" />
          </div>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Colleges/Schools
              </DropdownToggle>
              <DropdownMenu>
                <RefinementList attribute="schools.name"
                  limit={3000}
                  transformItems={items => orderBy(items, "label", "asc")}
                />
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar className="d-none">
              <DropdownToggle nav caret>
                Destination
              </DropdownToggle>
              <DropdownMenu>
                <RefinementList attribute="destination.tid"
                  limit={3000}
                  defaultRefinement="2157"
                  transformItems={items => orderBy(items, "label", "asc")}
                />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default FilterNav;