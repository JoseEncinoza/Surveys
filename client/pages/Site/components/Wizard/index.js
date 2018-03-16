/**
 * Module dependencies
 */
const React = require('react');
const PropTypes = require('prop-types');
const styles = require('./styles.scss');
const Question = require('../Question');

/**
 * Wizard Component
 */
const Wizard = ({questions, csrfToken}) => (
  <div className={styles.wizard}>
    <div className={styles.container}>
      <div className={styles.top}>
        <strong>Progreso</strong>
        <div className={styles.progressbar} id="progressbar" role="progressbar" aria-valuemin="0" aria-valuemax="100">
          <div className={styles['progressbar-value']} style={{display: 'block', width: '30%'}} />
        </div>
      </div>

      <form className={styles.form} name="wizard" method="POST" action="/" noValidate="novalidate">
        <input name="csrfToken" type="hidden" value={csrfToken} />

        <div className={styles.middle}>
          {questions.map(question => (
            <Question key={question.id} {...question} />
          ))}
        </div>
        <div className={styles.bottoms}>
          <button className={styles.backward} type="button" name="backward">Atrás</button>
          <button className={styles.forward} type="button" name="forward" >Adelante</button>
          <button className={styles.submit} type="submit" name="process" disabled>Enviar</button>
        </div>
      </form>
    </div>
  </div>
);

Wizard.propTypes = {
  csrfToken: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired,
    choice: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.string)
    })).isRequired
  }))
};

Wizard.defaultProps = {
  questions: []
};

module.exports = Wizard;
