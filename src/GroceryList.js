import { Component } from 'react';
import cheque from './buy.png'


export class GroceryList extends Component {
    state = {
        userInput: '',
        grocerList: [],
    }


    onChangeEvent(event) {
        this.setState({userInput: event});
        console.log(event);
    }


    addItem(addInput) {
        if (input === '' ) {
            alert('Please enter an item!')
        } else {
            let listArray = this.state.grocerList;
            listArray.push(addInput);
            this.setState({ grocerList: listArray, userInput: '' })
        }
    }

    deleteItem() {
        let listArray = this.state.grocerList;
        listArray = [];
        this.setState({groceryList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    } 

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.onFormSubmit }>
                <div className='container'>
                    <input 
                    type='text'
                    placeholder='Add an item'
                    // or write like this:
                    // onChange={ this.onChangeEvent }
                    onChange={(event) => (this.onChangeEvent(event.target.value))}
                    value={ this.state.userInput }/>
                </div>

                <div className='container'>
                    <button className='btnAdd' onClick={() => this.addItem(this.state.userInput)}>Add</button>
                </div>

                <div>
                <ul>
                    { this.state.grocerList.map((item, index) => (
                        <li onClick={ this.crossedWord } key={index} >
                            <img src={ cheque } width='25px' alt='image' />
                            { item }
                        </li>
                    ))}
                </ul>

                <div className='container'>
                    <button onClick={() => this.deleteItem() } className='btnDelete'>Delete</button>
                </div>
                </div>
            </form>
            </div>
        )
    }
}
// 

// 