import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  margin: 5px;
  padding: 5px;
  font-size: 14pt;
`
export default class JokeInterval extends Component {
  constructor(props) {
    super(props)
    this.state = {timer: false, show: false}
  }
  
  componentDidMount() {
   this.interval = setInterval(() => {
      if (this.state.timer) { 
          this.props.getJoke()
      }
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
        <Button onClick={() => this.setState({timer: !this.state.timer, show: !this.state.show})}>{this.state.show?'Выкл':'Вкл'} поток шуток</Button>
    )
  }
}
