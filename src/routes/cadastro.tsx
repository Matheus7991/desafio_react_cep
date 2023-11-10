import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';

function Cadastro() {
    const [uf, setUf] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    console.log();
    
    const [isFormDisabled, setIsFormDisabled] = useState(true);
  
    const checarCep = (e) =>{
        const cep = e.target.value.replace(/\D/g,'');
        fetch (`http://viacep.com.br/ws/${cep}/json`).then(res => res.json()).then(data => {
            console.log(data);
            setUf(data.uf);
            setLocalidade(data.localidade);
            setLogradouro(data.logradouro);
            setBairro(data.bairro);
            setIsFormDisabled(true);

            if(data.erro){
                setIsFormDisabled(false);                     
            }
        });
    }
  
    
    return (
    <div>
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

            <InputGroup>
                    <InputGroup.Text id="inputCep">
                        Cep
                    </InputGroup.Text>
                    <Form.Control
                        onBlur={checarCep}
                        aria-label="Default"
                        aria-describedby="inputCep"
                    />
            </InputGroup>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formBasicSelect" id='formUf'>
                    <Form.Label>Estado</Form.Label>
                    <Form.Control required disabled={isFormDisabled} value={uf} type = "text" as="select" >
                        <option value="" selected>Selecione um estado</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                    </Form.Control >
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control required type="text" disabled={isFormDisabled} value={localidade}/>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col}controlId="formGridLogradouro">
                    <Form.Label>Logradouro</Form.Label>
                    <Form.Control required type="text" disabled={isFormDisabled} value={logradouro}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridBairro">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control required type="text" disabled={isFormDisabled} value={bairro}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridNumero">
                    <Form.Label>Número</Form.Label>
                    <Form.Control required type="number"/>
                </Form.Group>

            </Row>

            <Form.Group className="mb-3" controlId="formGridComplemento">
                <Form.Label>Complemento</Form.Label>
                <Form.Control required type="text" placeholder="Apartamento, Andar, etc" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

        <br></br>

        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Cep</th>
                <th>Novo endereço</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            </tbody>
        </Table>
    </div>      
   
  );

}

export default Cadastro;