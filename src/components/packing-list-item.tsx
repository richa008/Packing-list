import React, { Fragment } from 'react';
import { PackingListCategoryItem } from './packing-list.interface';
import '../App.css';
import Form from 'react-bootstrap/Form';

export interface PackingListCategoryProps {
    category: PackingListCategoryItem;
}

export const PackingListItem = (props: PackingListCategoryProps) => {
    const { category } = props; 
    return (
        <div className="panel panel-default col-lg-6 col-md-6 com-sm-6 col-xs-12 category-panel">
            <h3 className="panel-heading category-header">{category.categoryName}</h3>
            <ul className="list-group">
                {category.packingListItems.map((listItem) => {
                    return <Fragment>
                        <li key={listItem.key} className="list-group-item">
                            <Form.Group>
                                <Form.Check type="checkbox" label={listItem.itemName} />
                            </Form.Group>
                        </li>
                    </Fragment>
                })}
            </ul>
          </div>
    );
}