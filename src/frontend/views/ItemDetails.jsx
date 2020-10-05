import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Panel } from '../common';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Header from '../components/Header';
import ItemDetails from '../components/ItemDetails';
import { getCategoriesFronItemDetails, getItemDetails } from '../redux/selectors';

export default function ProductDetails() {
  const categories = useSelector(getCategoriesFronItemDetails);
  const metaDescription = categories.join(' - ');
  const { title } = useSelector(getItemDetails);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={metaDescription} />
      </Helmet>
      <Header />
      <Container>
        <Breadcrumb levels={categories} />
        <Panel withSpace>
          <ItemDetails />
        </Panel>
      </Container>
    </>
  );
}
