import React from 'react';
import "./Footer.css"

function Footer() {
    return (
      <footer>
        <div class="cajasfooter">
          <section>
            <div>
              <i class="fa-solid fa-credit-card fa-2xl"></i>
            </div>
            <h4>Pagá con tarjeta o en efectivo</h4>
            <p>
              Tienda-Click Cash, tenés cuotas sin interés con tarjeta o efectivo
              en puntos de pago. ¡Y siempre es seguro!
            </p>
          </section>
          <section>
            <div>
              <i class="fa-solid fa-gift fa-2xl"></i>
            </div>
            <h4>Envío gratis desde $ 100.000</h4>
            <p>
              Solo por estar registrado en Madam wo tenés envíos gratis en miles
              de productos. Es un beneficio de Mercado Puntos
            </p>
          </section>
          <section>
            <div>
              <i class="fa-solid fa-user-shield fa-2xl"></i>
            </div>
            <h4>Seguridad, de principio a fin</h4>
            <p>
              ¿No te gusta? ¡Devolvelo! En Tienda-click , no hay nada que no
              puedas hacer, porque estás siempre protegido.
            </p>
          </section>
        </div>
        <h5>Copyright © 2023 Tienda-click S.R.L.</h5>
      </footer>
    );
    
}
export default Footer