import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { assets } from "../assets/assetss";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "../components/ProductItem/ProductItem";
import FieldSlider from "../components/FieldSlider/FieldSlider";
import Footer from "../components/Footer/Footer";
import PolicyFooter from "../components/Policy_Footer/PolicyFooter";

const BestSeller = () => {
  const { products } = useContext(ShopContext);

  
  console.log(products);

  return (
    <>
      <Container>
        <div style={{ marginTop: "30px", paddingTop: "70px" }}>
          <FieldSlider />
          <div className="mt-5">
            <Container style={{ marginTop: "100px" }}>
              <Row>
                {products?.map((item, index) =>
                  item.category === "BestSeller" ? (
                    <Col
                      key={index}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      className="mb-4"
                    >
                      <ProductItem
                        name={item.name}
                        id={item.id}
                        price={item.price}
                        oldPrice={item.oldPrice}
                        image={assets[item.image.replace("../src/assets/", "").replace(".png", "")]} 
                      />

                    </Col>
                  ) : null
                )}
              </Row>
            </Container>
          </div>
        </div>
      </Container>

      <Footer />
      <PolicyFooter />
    </>
  );
};

export default BestSeller;
