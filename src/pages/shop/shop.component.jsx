import React from "react";
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/colletion-preview/collection-preview.component'

class ShopPage extends React.Component {
    state = {
        collections: SHOP_DATA
    }
    render() {
        return (
            <div className="shop-page">
                {
                    this.state.collections.map((category) => {
                        return (
                            <CollectionPreview
                                key={category.id}
                                title={category.title}
                                routeName={category.routeName}
                                items={category.items}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default ShopPage