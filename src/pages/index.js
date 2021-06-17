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
    // option to control the usage and visualization of operators
    const operatorClick = ref(true);
    // Array to show all operations
    const arrayResult = ref([])

    // detected Number or operator button
    const btnAction = myValue => {
      // if is a Number
      if (!noNumber(myValue)) {
        if (operatorClick.value) {
          actual.value = '';
          operatorClick.value = false;
        }
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
      if (!operatorClick.value) {
        // concatenating values and add new value
        accumulator.value += `${actual.value} ${myValue} `;
        actual.value = '';
        operatorClick.value = true;

      }
    }

    // reset and clear values
    const btnReset = () => {
      actual.value = '';
      accumulator.value = '';
      result.value = '';
      operatorClick.value = true;
    }

    // show result total with use of 'evaluate' from msth.js
    const btnResult = () => {
      if (!operatorClick.value) {
        result.value = evaluate(accumulator.value + actual.value);
        // add content to Array
        arrayResult.value.push(`${accumulator.value} ${actual.value} = ${result.value}`)
      } else {
        result.value = 'Error!'
      }
    }

    return { buttons, noNumber, btnAction, actual, accumulator, btnReset, btnResult, result, arrayResult }
  }
}
