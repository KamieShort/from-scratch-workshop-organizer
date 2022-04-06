// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderParticipants } from '../render-utils.js';

const test = QUnit.test;

test('renderParticipants should return a <div> with participant name', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<p class="participant;">Kimber</p>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderParticipants({
        name: 'Kimber',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
