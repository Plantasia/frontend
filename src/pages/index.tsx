import { Row, Col, Button, Image, Accordion } from "react-bootstrap"
import { HeaderLanding, SEO, FooterLanding } from "@components"
import { useState } from "react"
import ContactForm from "./_contactForm"
import {
  LadingGlobalStyle,
  ColColeredText,
  RowPeople,
  ListGroupPeople,
  ListGroupPeopleItem,
  Pcontent,
  CardQuestion,
  CardHeaderQuestion,
  AccordionCollapseQuestion,
  CardBodyQuestion,
  P,
} from "../styles/components/LandingPage"

export default function HomePage(props) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  async function handleLoginSubmit(): Promise<void> {}

  return (
    <>
      <LadingGlobalStyle />
      <SEO title="Landing Page" />
      <HeaderLanding />
      <Row className="mb-5">
        <Col xs="6">
          <Image
            width="500"
            src="/assets/LandinPageImage1.png"
            className="mr-2"
          />
        </Col>

        <ColColeredText xs="6" className="pt-5">
          <h3>Comunidade de compartilhamento de conhecimento</h3>
          <P>
            Compartilhe seu conhecimento, engaje com a comunidade, ajude outras
            pessoas a cultivarem o interesse por plantas e com tudo relacionado
            a elas
          </P>
        </ColColeredText>
      </Row>
      <RowPeople className="justify-content-md-center mb-5">
        <Col md="auto">
          <ListGroupPeople horizontal>
            <ListGroupPeopleItem>
              <Image
                width="80"
                src="/assets/user_example.png"
                className="mr-2"
              />
              <Pcontent>Marcos Vinicius</Pcontent>
              <Pcontent>C.E.O</Pcontent>
            </ListGroupPeopleItem>
            <ListGroupPeopleItem>
              <Image
                width="80"
                src="/assets/user_example.png"
                className="mr-2"
              />
              <Pcontent>Juan Latorre</Pcontent>
              <Pcontent>C.E.O</Pcontent>
            </ListGroupPeopleItem>
            <ListGroupPeopleItem>
              <Image
                width="80"
                src="/assets/user_example.png"
                className="mr-2"
              />
              <Pcontent>Gabriel Reis</Pcontent>
              <Pcontent>C.E.O</Pcontent>
            </ListGroupPeopleItem>
            <ListGroupPeopleItem>
              <Image
                width="80"
                src="/assets/user_example.png"
                className="mr-2"
              />
              <Pcontent>Matheus Faggi</Pcontent>
              <Pcontent>C.E.O</Pcontent>
            </ListGroupPeopleItem>
            <ListGroupPeopleItem>
              <Image
                width="80"
                src="/assets/user_example.png"
                className="mr-2"
              />
              <Pcontent>Ícaro de Morais</Pcontent>
              <Pcontent>C.E.O</Pcontent>
            </ListGroupPeopleItem>
          </ListGroupPeople>
        </Col>
      </RowPeople>
      <Row className="mb-5">
        <ColColeredText xs="6" className="pt-5">
          <h3>Perguntas Frequentes</h3>
          <Accordion defaultActiveKey="0">
            {/* primeira pergunta */}
            <CardQuestion>
              <CardHeaderQuestion>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  styled={{ color: "#56537f" }}
                >
                  1. Para usar o site é necessário pagar?
                </Accordion.Toggle>
              </CardHeaderQuestion>
              <AccordionCollapseQuestion eventKey="0">
                <CardBodyQuestion>
                  Não! Nosso fórum tem o objetivo de viabilizar o
                  compartilhamento de conhecimento, e por conta disso nós nos
                  compromemos com ele ser Forever Free!
                </CardBodyQuestion>
              </AccordionCollapseQuestion>
            </CardQuestion>
            {/* Segunda Pergunta */}
            <CardQuestion>
              <CardHeaderQuestion>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="1"
                  styled={{ color: "#56537f" }}
                >
                  2. Segunda Pergunta
                </Accordion.Toggle>
              </CardHeaderQuestion>
              <AccordionCollapseQuestion eventKey="1">
                <CardBodyQuestion>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                  amet commodi illo tenetur in architecto! Quaerat odio possimus
                  quibusdam, ipsum aperiam officiis vel laborum. Enim voluptas
                  accusantium incidunt? Nam, optio.
                </CardBodyQuestion>
              </AccordionCollapseQuestion>
            </CardQuestion>
            {/* Terceira Pergunta */}
            <CardQuestion>
              <CardHeaderQuestion>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="2"
                  styled={{ color: "#56537f" }}
                >
                  3. Terceira Pergunta
                </Accordion.Toggle>
              </CardHeaderQuestion>
              <AccordionCollapseQuestion eventKey="2">
                <CardBodyQuestion>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                  amet commodi illo tenetur in architecto! Quaerat odio possimus
                  quibusdam, ipsum aperiam officiis vel laborum. Enim voluptas
                  accusantium incidunt? Nam, optio.
                </CardBodyQuestion>
              </AccordionCollapseQuestion>
            </CardQuestion>
            {/* Quarta Pergunta */}
            <CardQuestion>
              <CardHeaderQuestion>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="3"
                  styled={{ color: "#56537f" }}
                >
                  3. Terceira Pergunta
                </Accordion.Toggle>
              </CardHeaderQuestion>
              <AccordionCollapseQuestion eventKey="3">
                <CardBodyQuestion>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
                  amet commodi illo tenetur in architecto! Quaerat odio possimus
                  quibusdam, ipsum aperiam officiis vel laborum. Enim voluptas
                  accusantium incidunt? Nam, optio.
                </CardBodyQuestion>
              </AccordionCollapseQuestion>
            </CardQuestion>
          </Accordion>
        </ColColeredText>
        <Col xs="6">
          <Image
            width="500"
            src="/assets/LandinPageImage2.png"
            className="mr-2"
          />
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <Image
            width="500"
            src="/assets/LandinPageImage3.png"
            className="mr-2"
          />
        </Col>

        <Col xs="6">
          <ContactForm
            handleSubmitLogin={handleLoginSubmit}
            email={email}
            setEmail={setEmail}
            name={name}
            setName={setName}
            subject={subject}
            setSubject={setSubject}
            message={message}
            setMessage={setMessage}
          />
        </Col>
      </Row>
      <FooterLanding />
    </>
  )
}
