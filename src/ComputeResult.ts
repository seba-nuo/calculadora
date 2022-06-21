import {evaluate} from 'mathjs'

class ComputeResult {
  result: string;
  expression: string;

  constructor(expression: string) {
    this.result = "";
    this.expression = expression;
  }

  getResult() {
    return evaluate(this.expression)
  }
}

export default ComputeResult;
