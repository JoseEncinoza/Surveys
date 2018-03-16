/**
 * Module dependencies
 */
const React = require('react');
const PropTypes = require('prop-types');
const styles = require('./styles.scss');

const InputComponent = ({id, name, type}) => (
  <div className={styles['input-container']}>
    <input
      className={styles[type]}
      id={id}
      name={name}
      type={type}
    />
    <label htmlFor={id} className={styles[`label-${type}`]} />
  </div>
);

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

module.exports = InputComponent;
