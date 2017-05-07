import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { sizeNames } from './definitions.js';
import { editionNames } from './definitions.js';
import { finishNames } from './definitions.js';

class Sizes extends Component {

	get value() {
		return this.refs.inputSize.value
	}

	set value(inputValue) {
		this.refs.inputSize.value = inputValue
	}

	render() {
		return (
			<div>
				<input ref="inputSize"
					   type="text"
					   list="size-names" />
				<datalist id="size-names">
					{this.props.options.map(
						(opt, i) =>
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}

class Editions extends Component {

	get value() {
		return this.refs.inputEdition.value
	}

	set value(inputValue) {
		this.refs.inputEdition.value = inputValue
	}

	render() {
		return (
			<div>
				<input ref="inputEdition"
					   type="text"
					   list="edition-names" />
				<datalist id="edition-names">
					{this.props.options.map(
						(opt, i) =>
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}

class Finishes extends Component {

	get value() {
		return this.refs.inputFinish.value
	}

	set value(inputValue) {
		this.refs.inputFinish.value = inputValue
	}

	render() {
		return (
			<div>
				<input ref="inputFinish"
					   type="text"
					   list="finish-names" />
				<datalist id="finish-names">
					{this.props.options.map(
						(opt, i) =>
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}

export const AddNewWidget = ({ size,
							 date,
							 edition,
							 finish,
							 onNewWig }) => {

	let _size, _date, _edition, _finish

	const submit = (e) => {
		e.preventDefault()
		onNewWig({
			size: _size.value,
			date: _date.value,
			edition: _edition.value,
			finish: _finish.value
		})
		_size.value = ''
		_date.value = ''
		_edition.value = ''
		_finish.value = ''

	}

	return (
		<form onSubmit={submit} className="add-widget-form">

			<label htmlFor="size">Size Name</label>
			<Sizes options={sizeNames}
				   		  ref={input => _size = input}/>

			<label htmlFor="date">Date</label>
			<input id="date"
				   type="date"
				   required
				   defaultValue={date}
				   ref={input => _date = input}/>

			<div>
        <label htmlFor="size">Edition</label>
  			<Editions options={editionNames}
  				   		  ref={input => edition = input}/>
			</div>

      <div>
        <label htmlFor="size">Finish</label>
  			<Finishes options={finishNames}
  				   		  ref={input => edition = input}/>
			</div>

			<button>Add Widget</button>
		</form>
	)
}

AddNewWidget.defaultProps = {
	size: "Gigantic",
	date: new Date(),
	edition: "Standard",
	finish: "Matte"
}


AddNewWidget.propTypes = {
	size: PropTypes.string.isRequired,
	date: PropTypes.instanceOf(Date).isRequired,
	edition: PropTypes.string.isRequired,
	finish: PropTypes.string.isRequired
}
