/**
 * Module dependencies
 */
const React = require('react');
const PropTypes = require('prop-types');
const styles = require('./styles.scss');

/**
 * Main Containers
 */
const Wrapper = ({children}) => (
  <main className={styles.wrapper}>
    <div className={styles['container-fluid']}>
      <div className={`${styles.subheader} ${styles['subheader-quote']}`} />
      <div className={styles.row}>
        {children}
      </div>
    </div>
  </main>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.arrayOf(PropTypes.node.isRequired)
  ])
};

Wrapper.defaultProps = {
  children: null
};

module.exports = Wrapper;
