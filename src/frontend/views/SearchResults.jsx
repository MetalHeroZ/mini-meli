import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Panel } from '../common';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Header from '../components/Header';
import Item from '../components/Item';
import { getCategoriesFronSearchResults, getItems, getQuery } from '../redux/selectors';

export default function ProductsList() {
  const { ITEM_RESULTS_QUANTITY = 4 } = process.env;
  const query = useSelector(getQuery) || '';
  const itemsResult = useSelector(getItems);
  const categories = useSelector(getCategoriesFronSearchResults);

  const slicedItems = itemsResult.slice(0, ITEM_RESULTS_QUANTITY);
  const items = slicedItems.map(item => (
    <Item key={item.id} itemData={item} />
  ));

  const metaDescription = categories.join(' - ');

  return (
    <>
      <Helmet>
        <title>{query}</title>
        <meta name='description' content={metaDescription} />
      </Helmet>
      <Header />
      <Container>
        <Breadcrumb levels={categories} />
        <Panel>
          {items}
        </Panel>
      </Container>
    </>
  );
}
