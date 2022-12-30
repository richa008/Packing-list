import React from 'react';
import '../App.css';
import { fetchPackingListData } from "./packing-list-utils";
import { PackingListCategoryItem } from "./packing-list.interface";
import { PackingListItem } from './packing-list-item';
import { app } from "@microsoft/teams-js";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const PackingList = () => {

  const [ packingList, setPackingList ] = React.useState<PackingListCategoryItem[]>([]);

  React.useEffect(() => {

    const data = fetchPackingListData();
    setPackingList(data);

    (async () => {
        try {
            await app.initialize();
            app.notifyAppLoaded();
            app.notifySuccess();    
        } catch (e) {
            app.notifyFailure({reason: app.FailedReason.Timeout, message: "App initialization failed"});
        }
    })();
  }, []);

  return (
    <div className='App'>
      <header className="header">
        <h3>
          <b>
            Packing list
          </b>
        </h3>
      </header>
      <Container className='container'>
        <div className='page-head'>
          <Button className='reset-btn' onClick={() => {
            const data = fetchPackingListData();
            setPackingList(data);
          }}>Reset</Button>{' '}
        </div>
        <div className='col-lg-12 col-md-12 com-sm-12 col-xs-12'>
          {packingList.map((category) => 
            <PackingListItem key={category.key} category={category} />
          )}
        </div>
      </Container>
    </div>
  );
}

export default PackingList;
