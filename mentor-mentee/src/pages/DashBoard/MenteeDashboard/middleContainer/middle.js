import Donut from '../graphs/donutGraph';
import LineGraph from '../graphs/lineGraph';
import './Middle.css'
import { Container, Row, Col, Card, CardGroup, Form } from 'react-bootstrap';


function Middle() {
    return (
        <div>

            <Container className='middle'>
                <Row>
                    <Col md={3}>
                        <div className='cardImg'>
                            <Card.Img
                                variant="top"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTARUXzSGvW92IbKIlYAmhlYg0keybYReTTH-96oCTBsWTCItKjnwZmU8EpEPS2COXtg&usqp=CAU"
                                style={{ width: '193px', height: '167px', objectFit: 'fill', borderRadius: '20%' }}
                            />
                        </div>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col xs={7}>
                                <span>
                                    <p>Name: Rohan Prakasan</p>
                                    <p>Year: 2022-2026</p>
                                    <p>Branch: Information Technology</p>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <p>PRN: 122A3041</p>
                                    <p>DOB: 22/07/2004</p>
                                    <p>Mentor: Rohan Prakasan</p>
                                </span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardGroup>
                            <Card>
                                <div className='lineGraph'>
                                    <LineGraph />
                                </div>
                            </Card>
                            <Card>
                                <div className='donutGraph'>
                                    <Donut></Donut>
                                </div>
                            </Card>
                        </CardGroup>
                        {/* Text area replaces the last card */}
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                as="textarea"
                                readOnly
                                rows={3}
                                style={{
                                    width: '100%',
                                    resize: 'none',
                                    border: 'none',
                                    backgroundColor: 'lightcoral'
                                }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Middle;
