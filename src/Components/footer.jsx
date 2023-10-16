import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
function Footer() {
    return (
      <div>
        <MDBFooter
          bgColor="secondary-gradient"
          className="text-center text-lg-start text-muted .tex- dark"
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Estamos en:</span>
            </div>

            <div>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="facebook-f" />
              </a>

              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="google" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="instagram" />
              </a>
            </div>
          </section>

          <section className="">
            <MDBContainer className="text-center text-md-start mt-5">
              <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <MDBIcon icon="gem" className="me-3" />
                    Tienda click
                  </h6>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Productos</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Ropa para mujer
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Ropa Para Hombre
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      joyas
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Electronica
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contactanos</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    Bogota Colombia
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    infotienda@tiendaclick.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> +57 315 589 22
                  </p>
                  <p>
                    <MDBIcon icon="print" className="me-3" /> +57 334 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2023 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              @Astrid Macana
            </a>
          </div>
        </MDBFooter>
      </div>
    );
    
}
export default Footer