import React from 'react';

class Form extends React.Component {
  // state = {
  //   firstName: "John",
  //   lastName: "Henry"
  // }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // } 

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
  //   let dataArray = this.state.submittedData.concat(formData)
  //   this.setState({submittedData: dataArray})
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
  //   })
  // }

  //   render() {
  //     return (
  //       <div>
  //         <form onSubmit={event => this.handleSubmit(event)}>
  //         <input
  //             type="text"
  //             name = "firstName"
  //             onChange={event => this.props.handleFirstNameChange(event)}
  //             value={this.props.firstName}
  //           />
  //           <input
  //             type="text"
  //             name = "lastName"
  //             onChange={event => this.props.handleLastNameChange(event)}
  //             value={this.props.lastName}
  //           />
  //         </form>
  //       </div>
  //     )
  //   }
  // }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            name="lastName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.lastName} />
        </form>
      </div>
    )
  }
}

export default Form;