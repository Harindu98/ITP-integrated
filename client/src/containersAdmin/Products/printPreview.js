import React, { Component } from "react";

import { Container, Row, Col, Table } from "react-bootstrap";

class PrintProductsPreview extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { products } = this.props;
        return (
            <Table style={{ fontSize: 18 }} responsive="sm">
                <thead className="TAB">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0
                        ? products.map((product, index) => (
                            <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.category.name}</td>
                            </tr>
                        ))
                        : null}
                </tbody>
            </Table>
        )
    }
}

export default PrintProductsPreview