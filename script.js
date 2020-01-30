const input = document.getElementById('input')
const output = document.getElementById('output')
const btn = document.getElementById('button');
const select = document.getElementById('option');

const calculateResult = () =>  {
  if(select.value === 'addition') {
    output.value = Number(output.value) + Number(input.value);
  } else if (select.value === 'substraction') {
    output.value = Number(output.value) - Number(input.value);
  } else if (select. value === 'multiplication') {
    output.value = Number(output.value) * Number(input.value);
  } else {
    output.value = Number(output.value) / Number(input.value);
  }

    if(btn) {
      input.value = '';
    }
}