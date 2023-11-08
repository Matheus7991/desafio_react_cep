import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {
  return (
    <Form>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridnome">
            <Form.Label >Nome completo</Form.Label>
            <Form.Control required type="text" placeholder="Digite seu nome completo" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridApelido">
            <Form.Label>Apelido</Form.Label>
            <Form.Control type="text" placeholder="Digite seu apelido" />
            </Form.Group>
        </Row>

        <Row className="mb-3">

            <Form.Group as={Col} controlId="formGridCep">
            <Form.Label>Cep</Form.Label>
            <Form.Control required/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" >
            <Form.Label>Estado</Form.Label>
            <Form.Control required disabled/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control required disabled/>
            </Form.Group>
        </Row>

        <Row className="mb-3">
            <Form.Group as={Col}controlId="formGridLogradouro">
                <Form.Label>Logradouro</Form.Label>
                <Form.Control required disabled/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBairro">
                <Form.Label>Bairro</Form.Label>
                <Form.Control required disabled/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNumero">
                <Form.Label>Número</Form.Label>
                <Form.Control required type="number"/>
            </Form.Group>

        </Row>

        <Form.Group className="mb-3" controlId="formGridComplemento">
            <Form.Label>Complemento</Form.Label>
            <Form.Control required disabled placeholder="Apartamento, Andar, etc" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  );
}

export default GridComplexExample;