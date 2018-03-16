/**
 * Module dependencies
 */
const React = require('react');
const PropTypes = require('prop-types');
const Header = require('../Header');
const Footer = require('../Footer');
const Wrapper = require('../Wrapper');
const Sidebar = require('../../components/Sidebar');
const Wizard = require('../../components/Wizard');

/**
 * App Containers
 */
const App = ({sidebar, wizard}) => (
  <div>
    <Header />
    <Wrapper>
      <Sidebar {...sidebar} />
      <Wizard {...wizard} />
    </Wrapper>
    <Footer />
  </div>
);

App.propTypes = {
  sidebar: PropTypes.shape({
    title: PropTypes.string.isRequired,
    lead: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string
    }))
  }),
  wizard: PropTypes.shape({
    csrfToken: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      step: PropTypes.string.isRequired,
      choice: PropTypes.arrayOf(PropTypes.string),
      options: PropTypes.arrayOf(PropTypes.shape({
        required: PropTypes.bool,
        type: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        id: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.string)
      })).isRequired
    }))
  })
};

App.defaultProps = {
  sidebar: {
    title: 'Satisfacción del cliente - Hotel',
    lead: 'Ayúdanos a mejorar el servicio. Queremos ofrecerte los mejores hoteles.',
    items: [
      {
        id: 'id-1',
        value: 'Tu valoración nos va a ser muy útil para mejorar tanto nuestras instalaciones como el servicio que prestamos.'
      },
      {
        id: 'id-2',
        value: 'Por favor dedica 5 minutos a completar esta encuesta.'
      }
    ]
  },
  wizard: {
    csrfToken: '',
    questions: [
      {
        id: 'q-1',
        title: '¿Cuál ha sido el motivo de tu estancia?',
        step: '1/4',
        options: [
          {
            id: 'opt-1',
            type: 'radio',
            text: 'Turismo: escapada de fin de semana'
          },
          {
            id: 'opt-2',
            type: 'radio',
            text: 'Turismo: vacaciones'
          },
          {
            id: 'opt-3',
            type: 'radio',
            text: 'Trabajo: conferencia / evento'
          },
          {
            id: 'opt-4',
            type: 'radio',
            text: 'Turismo: visita a la ciudad'
          }
        ]
      },
      {
        id: 'q-2',
        title: '¿Por qué has elegido este hotel?',
        step: '2/4',
        options: [
          {
            id: 'opt-1',
            type: 'checkbox',
            text: 'Precio'
          },
          {
            id: 'opt-2',
            type: 'checkbox',
            text: 'Ubicación'
          },
          {
            id: 'opt-3',
            type: 'checkbox',
            text: 'Instalación'
          },
          {
            id: 'opt-4',
            type: 'checkbox',
            text: 'Reputación'
          }
        ]
      },
      {
        id: 'q-3',
        title: '¿Cómo valorarías el hotel en cuanto a...?',
        step: '3/4',
        choices: ['Mal', 'Regular', 'Bueno', 'Excelente'],
        options: [
          {
            id: 'opt-1',
            type: 'multiple',
            text: 'Personal del hotel'
          },
          {
            id: 'opt-2',
            type: 'multiple',
            text: 'Servicios e instalaciones'
          },
          {
            id: 'opt-3',
            type: 'multiple',
            text: 'Limpieza de la habitación'
          },
          {
            id: 'opt-4',
            type: 'multiple',
            text: 'Confort'
          },
          {
            id: 'opt-5',
            type: 'multiple',
            text: 'Relación calidad / precio'
          }
        ]
      },
      {
        id: 'q-4',
        title: 'Por favor complete con sus detalles',
        step: '4/4',
        options: [
          {
            id: 'company',
            type: 'text',
            text: 'Nombre de compañia'
          },
          {
            id: 'email',
            type: 'text',
            text: 'Correo Electronico',
            required: true
          },
          {
            id: 'firstname',
            type: 'text',
            text: 'Nombre',
            required: true
          },
          {
            id: 'telephone',
            type: 'text',
            text: 'Teléfono',
            required: true
          },
          {
            id: 'lastname',
            type: 'text',
            text: 'Apellido',
            required: true
          },
          {
            id: 'state',
            type: 'select',
            text: 'Selecciona tu provincia',
            items: ['Buenos Aires', 'Cordoba', 'Mendoza'],
            required: true
          }
        ]
      }
    ]
  }
};

module.exports = App;
