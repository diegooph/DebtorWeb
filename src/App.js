import React, {Component} from 'react';
import './App.css';
import DebtorApi from './Controller.js';
import {Form, Tab, Tabs} from 'react-bootstrap'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import NavBar from "./ui/NavBar";
import Col from "react-bootstrap/es/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";


class App extends Component {


    constructor(props) {
        super(props);

        DebtorApi.userDTO.getAllSelect();
        DebtorApi.userDTO.getUserList();
        DebtorApi.debtorDTO.getUsersDebtor();
        DebtorApi.debtorDTO.getAll();
        document.addEventListener('submit', DebtorApi.debtorDTO.save);
    };


    render() {

        return (
     <div>
                <NavBar/>
                <Row className="justify-content-md-center">

                    <Col xs={8}>

                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="Cadastro de divida">
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Data da Divida:</Form.Label>
                                        <Form.Control type="date" id="dataDate"/>
                                        <Form.Label>Valor da Divida:</Form.Label>
                                        <Form.Control type="number" id="dataValue"/>
                                    </Form.Group>
                                    <Form.Group controlId="selectUser">

                                        <Form.Label>Usuario:</Form.Label>
                                        <Form.Control as="select"></Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="description">
                                        <Form.Label>Motivo da Divida:</Form.Label>
                                        <Form.Control as="textarea" rows="5"/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Salvar
                                    </Button>
                                </Form>
                            </Tab>
                            <Tab eventKey="ListUserDebtors" title="Lista de Devedores">
                                <Table striped bordered hover size="sm">
                                    <thead>
                                    <tr>
                                        <th>Matricula</th>
                                        <th>First Name</th>
                                        <th>Contato</th>
                                        <th>Email</th>
                                    </tr>
                                    </thead>
                                    <tbody id={"usersDebtor"}>

                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="ListDebtors" title="Lista de Dividas">
                                <Table striped bordered hover size="sm">
                                    <thead>
                                    <tr>
                                        <th>Matricula</th>
                                        <th>Usuario</th>
                                        <th>Valor</th>
                                        <th>Descrição</th>
                                        <th>Data</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody id={"debtorList"}>

                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="ListUsers" title="Lista de Usuarios">
                                <Table striped bordered hover size="sm">
                                    <thead>
                                    <tr>
                                        <th>Matricula</th>
                                        <th>Nome</th>
                                        <th>Contato</th>
                                        <th>Email</th>

                                    </tr>
                                    </thead>
                                    <tbody id={"usersList"}>

                                    </tbody>
                                </Table>
                            </Tab>

                        </Tabs>
                    </Col>
                </Row>
     </div>
        );

    }

}


export default App;
