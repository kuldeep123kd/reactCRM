import React from 'react';
import Header from './Header';
import './Home.scss';
import Button from '@material-ui/core/Button';
import ViewColumnRoundedIcon from '@material-ui/icons/ViewColumnRounded';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import ImportExportRoundedIcon from '@material-ui/icons/ImportExportRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Table from './Table';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import Footer from './Footer';

const Home = () => {

  return (
    <>
      <div className="homepage">
        <Header />
        <div className="homepage__content">
          <div className="homepage__content__menu">
            <div className="row">
              <div className="col-lg-4">
                <div className="homepage__content__menu__arrowbtns">
                  <div className="homepage__content__menu__arrowbtns__1">
                    <p>Contacts</p>
                  </div>
                  <div className="homepage__content__menu__arrowbtns__2">
                    <p>List View</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 text-right">
                <div className="homepage__content__menu__options">
                  <Button variant="contained" color="primary">
                    <ViewColumnRoundedIcon />Column Config
                  </Button>
                  <Button variant="contained" color="primary">
                    <FilterListRoundedIcon />Filter
                  </Button>
                  <Button variant="contained" color="primary">
                    <ImportExportRoundedIcon />Export to Excel
                  </Button>
                  <Button variant="contained" color="primary" disabled>
                    <RemoveRoundedIcon />Delete
                  </Button>
                  <Button variant="contained" color="primary">
                    <AddRoundedIcon />Create Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="homepage__content__table">
            <div>
              <div className="row">
                <div className="col-lg-1 px-0">
                  <h1>List View</h1>
                </div>
                <div className="col-lg-11">
                  <div className="homepage__content__table__inputs">
                    <div className="row">
                      <div className="col-lg-9">
                        <input type="text" placeholder="Search by Company Name, Conpaign Owner, Product" />
                      </div>
                      <div className="col-lg-2">
                        <p><ArrowDropDownRoundedIcon />Shared Contacts</p>
                      </div>
                      <div className="col-lg-1">
                        <p>
                          <span><ViewColumnRoundedIcon /></span>
                          <span><ViewColumnRoundedIcon /></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Table />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;