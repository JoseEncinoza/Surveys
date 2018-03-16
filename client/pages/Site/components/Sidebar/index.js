/**
 * Module dependencies
 */
const React = require('react');
const PropTypes = require('prop-types');
const styles = require('./styles.scss');

/**
 * Sidebar Component
 */
const Sidebar = ({title, lead, items}) => (
  <aside className={styles.sidebar}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.lead}>{lead}</p>

    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  </aside>
);

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  lead: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string
  }))
};

Sidebar.defaultProps = {
  lead: '',
  items: {}
};

module.exports = Sidebar;
