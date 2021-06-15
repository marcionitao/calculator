import { ref } from 'vue';
import { evaluate, round } from 'mathjs';

export default {
  setup () {
    const buttons = [7,8,9,"%",4,5,6,"+",1,2,3,"-",".",0,"/","*"];
    // 'isNaN' verify if is a String
    const noNumber = myValue => isNaN(myValue);

    // reative
    const actual = ref('');
    const accumulator = ref('');
    const result = ref('');
    const operatorClick = ref(true);

    // detected Number or operator button
    const btnAction = myValue => {
      // if is a Number
      if (!noNumber(myValue)) {
        // concatenating values
        actual.value = `${actual.value}${myValue}`
      } else {
        // if is NOT a Number
        runOperation(myValue)
      }
    }

    const runOperation = myValue => {
      // if is a Punt
      if (myValue === '.') {
        // checks the array of typed characters if there is NOT '.'
        if (actual.value.indexOf('.') === -1){
          // if not exist a '.', concatenating values
          actual.value = `${actual.value}${myValue}`
        }

        return
      }
      // if is a percentage %
      if (myValue === '%') {
        // checks the array of typed characters if there is NOT 'empty ''
        if (actual.value !== '') {
          // concatenating values and changed to % value
          actual.value = `${parseFloat(actual.value) / 100}`
        }
        return
      }
      // if is NOT percentage % or a Punt is(+, -, *, /)
      addOperator(myValue)
    }

    // if is NOT percentage % or a Punt is(+, -, *, /)
    const addOperator = myValue => {
      // concatenating values and add new value
      accumulator.value += `${actual.value} ${myValue} `;
      actual.value = '';
    }

    // reset and clear values
    const btnReset = () => {
      actual.value = '';
      accumulator.value = '';
      result.value = '';
    }

    const btnResult = () => {
      result.value = evaluate(accumulator.value + actual.value)
    }

    return { buttons, noNumber, btnAction, actual, accumulator, btnReset, btnResult, result }
  }
}
