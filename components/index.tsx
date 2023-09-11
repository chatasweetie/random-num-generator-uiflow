import { PropType, registerComponent } from '@uiflow/cli';

export default registerComponent('random-number-generator', {
    name: 'Random Number Generator',
    description: "A random number generator,starting at a provided number through another provided number.",
  blocks: [
    {
      input: {
        type: PropType.Call,
        name: 'generateRandomNum',
        description: 'This will trigger the calculate for a random number',
        arguments: [
            {
                name: 'startFromNum',
                type: PropType.Number,
                value: 0,
                description: 'This is where the range will start from, including this number',
            },
            {
                name: 'endAtNum',
                type: PropType.Number,
                value: 10,
                description: 'This is where the range will end from, including this number',
            },
        ],
        onEmit({ inputs, emit }) {
          const endAtNum = Number(inputs.endAtNum);
          const startFromNum = Number(inputs.startFromNum);
          const randomNumber = Math.floor(Math.random() * (endAtNum - startFromNum + 1)) + startFromNum;
          emit('onComplete', { randomNumber });
        },
      },
      output: {
        type: PropType.Event,
        name: 'onComplete',
        description: 'Calculation is complete',
        arguments: [
          {
            name: 'randomNumber',
            type: PropType.Number,
            description: 'A randomly generated number',
          },
        ]
      }
    },
  ]
});