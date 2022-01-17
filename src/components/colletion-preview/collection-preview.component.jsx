import React from "react";
import CollectionItem from '../collection-item/collection-item.component'
import "./collection-preview.styles.scss"

class CollectionPreview extends React.Component {
    render() {
        return (
            <div className="collection-preview">
                <h1 className="title">{this.props.title.toUpperCase()}</h1>
                <div className="preview">
                    {
                        this.props.items
                        .filter((_, index) => index < 4)
                        .map(({id, ...otherItemProps}) => {
                            return (
                                <CollectionItem
                                    key={id}
                                    {...otherItemProps}
                                >
                                </CollectionItem>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default CollectionPreview