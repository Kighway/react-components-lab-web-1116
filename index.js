//PART ONE//////////////////////////////////////////////////////////////////

//NEW SCHOOL
const OlderCoaster = React.createClass({
  render() {
    return React.createElement('div', {className: 'oldercoaster'},
    React.createElement('p', {}, 'Two grannies having the time of their life!'),
    React.createElement('p', {}, 'Passengers:'),
    React.createElement('ul', {},
          [
            React.createElement('li', {}, 'Agnes'),
            React.createElement('li', {}, 'Muriel')
          ]
      )
    )
  }
});

// intended HTML:
// <div class="oldercoaster">
//   <p>Two grannies having the time of their life!</p>
//   <p>Passengers:</p>
//   <ul>
//     <li>Agnes</li>
//     <li>Muriel</li>
//   </ul>
// </div>

// part 1 model without div
// ReactDOM.render(OlderCoaster, document.getElementById('main'));

//part 1 test
ReactDOM.render(
    React.createElement('div', {}, [
      React.createElement(OlderCoaster)
    ]),
  document.getElementById('main')
);

//PART TWO//////////////////////////////////////////////////////////////////

//NEWSCHOOL
const InFrontOfYou = React.createClass({
  render() {
    return React.createElement('div', {},
    React.createElement('p', {}, "You shouldn't look too far."),
    React.createElement('p', {}, ["Sometimes, the solution is ",
      React.createElement('strong', {}, "right in front of you.")]
    )
  )}
});

// intended HTML:
// <div>
//   <p>You shouldn't look too far.</p>
//   <p>Sometimes, the solution is <strong>right in front of you.</strong></p>
// </div>

//part 1 & 2 tests
// ReactDOM.render(
//     React.createElement('div', {}, [
//       React.createElement(OlderCoaster),
//       React.createElement(InFrontOfYou)
//     ]),
//   document.getElementById('main')
// );

//PART THREE//////////////////////////////////////////////////////////////////

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

//NEW SCHOOL
const ButcherShop = React.createClass({
  render() {
    return React.createElement('div', {className: 'butcher-shop'},
    React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
    React.createElement('ul', {},
          [
            BUTCHER_PRODUCTS.map((meat) => {return React.createElement('li', {}, meat) } ) //working anonymous function
            // BUTCHER_PRODUCTS.map(meatListItem) //working named function
          ]
      )
    )
  }
});

// working named function
// function meatListItem (meat) {
//   return React.createElement('li', {}, meat)
// }

// React.createElement('li', {}, 'Tenderloin'),
// React.createElement('li', {}, 'Short ribs'),
// React.createElement('li', {}, 'Beef shin'),
// React.createElement('li', {}, 'Ribeye')

//WORKING HARD CODE
// const ButcherShop = React.createClass({
//   render() {
//     return React.createElement('div', {className: 'butcher-shop'},
//     React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
//     React.createElement('ul', {},
//           [
//             React.createElement('li', {}, 'Tenderloin'),
//             React.createElement('li', {}, 'Short ribs'),
//             React.createElement('li', {}, 'Beef shin'),
//             React.createElement('li', {}, 'Ribeye')
//           ]
//       )
//     )
//   }
// });

// intended HTML:
// <div class="butcher-shop">
//   <p>Hello! We have the following products for sale today:</p>
//   <ul>
//     <li>Tenderloin</li>
//     <li>Short ribs</li>
//     <li>Beef shin</li>
//     <li>Ribeye</li>
//   </ul>
// </div>


// orginal tests for all parts
ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
