import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "./cartContainer.css"
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Image } from "react-bootstrap";
import { createOrder } from "../../services/firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)
function CartContainer() {
    const { cart, removeItem} = useContext(cartContext);

    if (cart.length === 0) {
        return (
            <div className="no-products">
            <h1 className="heading-cart">No hay productos en el carrito</h1>
            <Image
          src={"https://wallpapercave.com/wp/wp7914930.jpg"}
          alt={"no agregaste productos:c"}
          fluid
          thumbnail
          className="imageProduct"
        />
            <LinkContainer to="/">
            <Button  variant="success" className="buttons">Ir A Productos</Button>
          </LinkContainer>
          </div>
        )
    }
    return(
        <div className="container">
            <h1 className="heading-cart">Carrito</h1>
            <Table striped bordered hover className="table-cart">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio Unitario</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td>{item.nombre}</td>
                            <td>${item.precio}</td>
                            <td>{item.count}</td>
                            <td>${item.precio * item.count}</td>
                            <td>
                                <Button variant="danger" className="delete-button" onClick={() => removeItem(item.id)}>Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="total-container">
                <LinkContainer to="/checkout">
        <Button variant="primary" type="submit">
      Comprar
      </Button>
          </LinkContainer>
            </div>
        </div>
    );
}

export default CartContainer;