import { Col, Row } from "react-bootstrap"
import { CategoriesItemsStyle } from "@styled/Categories"

export default function CategoryListingOneItem() {
  return (
    <CategoriesItemsStyle className="mt-4 py-4">
      <Row>
        <Col xs="3" className="d-flex justify-content-center">
          <img
            src="/assets/hortalicas.jpg"
            style={{
              width: "75%",
              aspectRatio: "1/1",
            }}
          />
        </Col>
        <Col xs="5" className="d-flex flex-column justify-content-between">
          <h3>Hortaliças</h3>
          <p>
            Reprehenderit eiusmod id nisi pariatur nisi. Consectetur aliquip
            laboris dolore enim est
          </p>
        </Col>
        <Col xs="4" className="d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-between pr-5">
            <div>
              <h5>Tópicos</h5>
              <p>150</p>
            </div>

            <div>
              <h5>Tópicos</h5>
              <p>150</p>
            </div>

            <div>
              <h5>Tópicos</h5>
              <p>150</p>
            </div>
          </div>
          <div className="d-flex flex-column">
            <h6 style={{ fontWeight: 300 }} className="mb-2">
              último tópico - <a href="#">fulano de tal</a>
            </h6>

            <div className="d-flex align-items-center">
              <img
                src="https://picsum.photos/seed/picsum/50"
                style={{ borderRadius: "50%" }}
              />
              <h5 className="ml-3">
                <a href="#">Título do tópico</a>
              </h5>
            </div>
          </div>
        </Col>
      </Row>
    </CategoriesItemsStyle>
  )
}
