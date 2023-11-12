import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';


function Cadastro() {

    const [uf, setUf] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cep, setCep] = useState('');
    const [nome, setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [complemento, setComplemento] = useState('');
    const [numero, setNumero] = useState('');
    const [novoEndereco, setnovoEndereco] = useState('');
    const [isFormDisabled, setIsFormDisabled] = useState(true);
    const [nCepUnico, setNCepUnico] = useState(true);

    const [ceps, setCeps] = useState([]);
    
    const cadCep = (e) => {

        e.preventDefault();
        addCep(nome,cep,novoEndereco);

    };
    
  
    const checarCep = (e) =>{
        const cep = e.target.value.replace(/\D/g,'');
        fetch (`http://viacep.com.br/ws/${cep}/json`).then(res => res.json()).then(data => {
            console.log(data);

            if(data.erro){
                setUf('');
                setLocalidade('');
                setLogradouro('');
                setBairro('');
                setComplemento('');
                setNumero('');
                setIsFormDisabled(false);
                setNCepUnico(false);
                setnovoEndereco('Sim');     
                toast.error('Cep não cadastrado!', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });     

            } else {

                if(data.bairro === null){
                    setNCepUnico(false);
                } else {
                    setUf(data.uf);
                    setLocalidade(data.localidade);
                    setLogradouro(data.logradouro);
                    setBairro(data.bairro);
                    setIsFormDisabled(true);
                    setnovoEndereco('Não');
                }

            }
        });
    }

    const addCep = (nomeCad, cepCad, novoEndCad) => {

        const result = ceps.find((ceps) => ceps.cepCad === cepCad);

        if(result != null){
            toast.error('O cep informado já se encontra na lista de cadastro!', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            }); 
            return

        } else {

            const newCeps = [
                ...ceps,
                {
                    id: ceps.length + 1,
                    nomeCad,
                    cepCad,
                    novoEndCad,
                },
            ];
    
            setCeps(newCeps);

            toast.success('Cep Cadastrado com sucesso!', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });

            setCep('');
            setUf('');
            setLocalidade('');
            setLogradouro('');
            setBairro('');
            setNome('');
            setApelido('');
            setComplemento('');
            setNumero('');
            setIsFormDisabled(true);
            setNCepUnico(true);
    
        }
    }   
  
    
    return (
    <div>
        <Form onSubmit={cadCep}>
            <Row className='mb-3'>
                <Form.Group as={Col} name='nome'>
                    <Form.Label >Nome completo</Form.Label>
                    <Form.Control 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} 
                        type='text' 
                        placeholder='Digite seu nome completo' 
                        required
                    />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridApelido'>
                    <Form.Label>Apelido</Form.Label>
                    <Form.Control value={apelido} onChange={(e) => setApelido(e.target.value)} type='text' placeholder='Digite seu apelido' />
                </Form.Group>
            </Row>

            <Row className='mb-3'>
                <Form.Group as={Col} md='3'>
                    <Form.Label>Cep</Form.Label>
                    <Form.Control 
                        value={cep}
                        onBlur={checarCep} 
                        onChange={(e) => setCep(e.target.value)}
                        type='number' 
                        placeholder='Cep' 
                        required 
                    />
                </Form.Group>

                <Form.Group as={Col} controlId='formBasicSelect'>
                    <Form.Label>Estado</Form.Label>
                    <Form.Select required disabled={isFormDisabled} onChange={(e) => setUf(e.target.value)} value={uf} as='select' >
                        <option value=''>Selecione um estado</option>
                        <option value='AC'>AC</option>
                        <option value='AL'>AL</option>
                        <option value='AP'>AP</option>
                        <option value='AM'>AM</option>
                        <option value='BA'>BA</option>
                        <option value='CE'>CE</option>
                        <option value='DF'>DF</option>
                        <option value='ES'>ES</option>
                        <option value='GO'>GO</option>
                        <option value='MA'>MA</option>
                        <option value='MT'>MT</option>
                        <option value='MS'>MS</option>
                        <option value='MG'>MG</option>
                        <option value='PA'>PA</option>
                        <option value='PB'>PB</option>
                        <option value='PR'>PR</option>
                        <option value='PE'>PE</option>
                        <option value='PI'>PI</option>
                        <option value='RJ'>RJ</option>
                        <option value='RN'>RN</option>
                        <option value='RS'>RS</option>
                        <option value='RO'>RO</option>
                        <option value='RR'>RR</option>
                        <option value='SC'>SC</option>
                        <option value='SP'>SP</option>
                        <option value='SE'>SE</option>
                        <option value='TO'>TO</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId='formGridCity'>
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control required type='text' onChange={(e) => setLocalidade(e.target.value)} disabled={isFormDisabled} value={localidade}/>
                </Form.Group>
            </Row>

            <Row className='mb-3'>
                <Form.Group as={Col}controlId='formGridLogradouro'>
                    <Form.Label>Logradouro</Form.Label>
                    <Form.Control required type='text' onChange={(e) => setLogradouro(e.target.value)} disabled={nCepUnico} value={logradouro}/>
                </Form.Group>

                <Form.Group as={Col} controlId='formGridBairro'>
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control required type='text' onChange={(e) => setBairro(e.target.value)} disabled={nCepUnico} value={bairro}/>
                </Form.Group>

                <Form.Group as={Col} controlId='formGridNumero'>
                    <Form.Label>Número</Form.Label>
                    <Form.Control value={numero} required onChange={(e) => setNumero(e.target.value)} type='number'/>
                </Form.Group>

                <Form.Group as={Col} className='mb-3' controlId='formGridComplemento'>
                    <Form.Label>Complemento</Form.Label>
                <Form.Control value={complemento} required onChange={(e) => setComplemento(e.target.value)} type='text' placeholder='Apartamento, Andar, etc' />
            </Form.Group>

            </Row>

            <Button type='submit' variant='primary'>
                Cadastrar
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
                    {ceps.map((c) => (
                        <tr>
                            <th>{c.id}</th>
                            <th>{c.nomeCad}</th>
                            <th>{c.cepCad}</th>
                            <th>{c.novoEndCad}</th>
                        </tr>
                    ))}
                </tbody>           
        </Table>
        <ToastContainer
                    position='bottom-right'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme='colored'
        /> 

    </div>      
   
  );

}

export default Cadastro;