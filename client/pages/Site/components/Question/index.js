/**
 * Module dependencies
 */
const React = require('react');
const PropTypes = require('prop-types');
const styles = require('./styles.scss');
const InputComponent = require('./InputComponent');

/**
 * Question Component
 */
// const Question = () => {
class Question extends React.Component {
  constructor(props) {
    super(props);

    this.id = `question-${props.id}`;
    this.options = [];

    this.createOptions();
  }

  createOptions() {
    this.options = this.props.options.map((option) => {
      let element = null;

      switch (option.type) {
        case 'multiple':
          element = (
            <tr key={option.id}>
              <td>
                <span className={styles.text}>{option.text}</span>
              </td>
              {this.props.choices.map((choice, i) => (
                <td key={`option-${option.id}-${choice}`}>
                  <InputComponent id={`option-${option.id}${i}`} name={`option[${option.id}]`} type="radio" />
                </td>
              ))}
            </tr>
          );
          break;
        case 'text':
          element = (
            <div className={styles['input-text-container']}>
              <input className={styles['input-text']} type={option.type} name={`${this.id}__option-${option.id}`} placeholder={option.text} />
            </div>
          );
          break;
        case 'select':
          element = (
            <div className={styles['select-container']}>
              <select name={`${this.id}__option-${option.id}`}>
                <option value="" selected="">{option.text}</option>
                {option.items.map(item => <option key={`option-${option.id}-${item}`} value={item}>{item}</option>)}
              </select>
            </div>
          );
          break;
        case 'checkbox':
          element = (
            <label
              className={`${styles.answer} ${styles[`answer-${option.type}`]}`}
              htmlFor={`${this.id}__option-${option.id}`}
              key={option.id}
            >
              <InputComponent
                id={`${this.id}__option-${option.id}`}
                name={this.id}
                type={option.type}
              />
              <span className={styles.text}>{option.text}</span>
            </label>
          );
          break;
        default:
          element = (
            <label htmlFor={`${this.id}__option-${option.id}`} key={option.id} className={styles.answer}>
              <span className={styles.text}>{option.text}</span>
              <InputComponent
                id={`${this.id}__option-${option.id}`}
                name={this.id}
                type={option.type}
              />
            </label>
          );
          break;
      }

      return element;
    });
  }

  render() {
    const {title, step, choices} = this.props;

    return (
      <div className={styles.question}>
        <h3 className={styles.title}>
          <strong>{step}</strong>
          {title}
        </h3>

        {choices && choices.length > 0 ? (
          <table className={styles['multiple-container']}>
            <thead>
              <tr>
                <th />
                {this.props.choices.map((choice) => <th key={`choise-${choice}`}>{choice}</th>)}
              </tr>
            </thead>
            <tbody>
              {this.options.map((option) => option)}
            </tbody>
          </table>
        ) : (
          this.options.map((option) => option)
        )}
      </div>
    );
  }
};

Question.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string)
  })).isRequired
};

Question.defaultProps = {
  choices: []
};

module.exports = Question;

