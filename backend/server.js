const express = require("express");
const cors = require("cors");
const { MercadoPagoConfig, Preference } = require("mercadopago");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// ==========================================
// MERCADO PAGO
// ==========================================

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN
});

const preference = new Preference(client);

// ==========================================
// RUTA DE PRUEBA
// ==========================================

app.get("/", (req, res) => {
  res.json({
    ok: true,
    mensaje: "Backend de Queentana's Tiendita funcionando"
  });
});

// ==========================================
// CREAR PAGO
// ==========================================

app.post("/crear-pago", async (req, res) => {

  try {

    const { items, folio, nombre, plantel } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        ok: false,
        error: "No hay productos en el pedido"
      });
    }

    const preferenceData = {
      body: {

        items: items.map(item => ({
          title: item.name,
          quantity: 1,
          unit_price: Number(item.price),
          currency_id: "MXN"
        })),

        external_reference: String(folio),

        metadata: {
          folio: String(folio),
          nombre: nombre || "",
          plantel: plantel || ""
        },

        back_urls: {
          success: "https://www.mercadopago.com.mx/",
          failure: "https://www.mercadopago.com.mx/",
          pending: "https://www.mercadopago.com.mx/"
        },

        auto_return: "approved"
      }
    };

    const result = await preference.create(preferenceData);

    res.json({
      ok: true,
      preference_id: result.id,
      init_point: result.init_point
    });

  } catch (error) {

    console.error("Error al crear el pago:", error);

    res.status(500).json({
      ok: false,
      error: "No se pudo crear el pago"
    });

  }

});

// ==========================================
// WEBHOOK DE MERCADO PAGO
// ==========================================

app.post("/webhook/mercadopago", async (req, res) => {

  console.log("📩 Notificación recibida de Mercado Pago");

  console.log(req.body);

  // Por ahora solamente confirmamos
  // que recibimos la notificación.

  res.sendStatus(200);

});

// ==========================================
// INICIAR SERVIDOR
// ==========================================

app.listen(PORT, () => {

  console.log(
    `🚀 Backend funcionando en el puerto ${PORT}`
  );

});
