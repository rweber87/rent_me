// import React from 'react'
// import { Input } from 'react-materialize'

// const CategoryField = (props) => {
//   const { category }  = props

//   return (
    
//       <div >

//         <Input
//           name={category}
//           type="checkbox"
//           label={category}
//           checked={props.selected}
//           onChange={console.log}
//           key={category}
//           value={category}
//         />
//         <label>{ category }</label>

//       </div>
//   )
// }

// export default CategoryField

import React, { Component, PropTypes } from 'react';


class CategoryField extends Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
    handleCheckboxChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
        <div className={this.props.type} >
          <form>
            <input
                  type={this.props.type}
                  value={label}
                  checked={isChecked}
                  onChange={(e) => this.toggleCheckboxChange(e)}
                />
            <label>
              <input
                type={this.props.type}
                value={label}
                checked={isChecked}
                onChange={(e) => this.toggleCheckboxChange(e)}
              />
             {label}
            </label>
          </form>
        </div>
    );
  }
}

CategoryField.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default CategoryField;