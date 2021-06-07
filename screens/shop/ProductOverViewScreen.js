import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux'
import ProudctItem from '../../components/shop/ProductItem'
const ProductOverViewScreen = props => {
    const products = useSelector(state => state.products.availableProducts)
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => <ProudctItem image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onViewDetail={() => { }}
                onAddCart={() => { }} />}
        />)
}

ProductOverViewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductOverViewScreen;