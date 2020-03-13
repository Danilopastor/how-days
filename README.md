# how-days

Count differences between dates in a simple and practical way, simply informing the start date and end date you get the result.

## installation

to install how-days, use npm :

    $ npm install how-days

or user yarn:

    $ yarn add how-days

then in your node.js app, get reference to the function like that:

```javascript
const howDays = require('how-days');
```

## quick examples

### obtain the number of days passed between the dates '2020/01/01' and '2020/03/13' passed as parameters.

```javascript

// outputs "72"
howDays('2020/01/01','2020/03/13').days
```

### Get the number of weeks spent between the reported facts

```javascript

// outputs "11"
howDays('2020/01/01','2020/03/13').week
```

saw how simple it is to get the data? now just use it!


## license

MIT