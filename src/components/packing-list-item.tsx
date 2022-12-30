import React, { Fragment } from 'react';
import { PackingListCategoryItem } from './packing-list.interface';
import '../App.css';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

export interface PackingListCategoryProps {
    category: PackingListCategoryItem;
}

export const PackingListItem = (props: PackingListCategoryProps) => {
    const { category } = props; 
    return (
        <section className="col-lg-6 col-md-6 com-sm-6 col-xs-12 packing-list">
            <h5 className='packing-list-category'>{category.categoryName}</h5>
            <ListGroup className='list-group'>
                {category.packingListItems.map((listItem) => {
                    return <Fragment>
                        <ListGroup.Item key={listItem.key}>
                            <Form.Check
                                type='checkbox'
                                id={listItem.key}
                                label={listItem.itemName}
                            />
                        </ListGroup.Item>
                    </Fragment>
                })}
            </ListGroup>
        </section>
    );
}