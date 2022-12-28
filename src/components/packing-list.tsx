import React from 'react';
import '../App.css';
import { fetchPackingListData } from "./packing-list-utils";
import { PackingListCategoryItem } from "./packing-list.interface";
import { PackingListItem } from './packing-list-item';

const PackingList = () => {

  const [ packingList, setPackingList ] = React.useState<PackingListCategoryItem[]>([]);

  React.useEffect(() => {
    const list = fetchPackingListData();
    setPackingList(list);
  }, []);

  return (
    <div className='App'>
        <div className="navbar navbar-default header">
          <h1>Packing List</h1>
        </div>
        <div className='container'>
          <div className='col-lg-12 col-md-12 com-sm-12 col-xs-12 list-container'>
            {packingList.map((category) => 
              <PackingListItem key={category.key} category={category} />
            )}
          </div>
        </div>
    </div>
  );
}

export default PackingList;
