# eslint-config-sky

[![Build Status](https://travis-ci.org/lint-config/eslint-config-sky.svg?branch=master)](https://travis-ci.org/lint-config/eslint-config-sky)
[![codecov](https://codecov.io/gh/lint-config/eslint-config-sky/branch/master/graph/badge.svg)](https://codecov.io/gh/lint-config/eslint-config-sky)

## Install
```
$ npm install --save-dev eslint-config-sky
```

## Usage
Add `"extends": "sky"` to your .eslintrc.
This includes base + react + flow rules.

### base + react
`"extends": "sky/react"`

### base + flow
`"extends": "sky/flow"`

## Sample

```javascript
import hoge from 'hoge';

const fuga = require('fuga');
const test1 = 1;
const test2 = '2';
const obj = {
  test1: 1,
  test2: 2
};

/**
 * @description check:)
 */
function check() {
  return 'check';
}

export default class Piyo extends Fuga {
  constructor() {
    super();
    this.name = 'name';
  }

  get myName() {
    return this.name;
  }
}
```

```javascript
// react

import React from 'react';

class View extends React.Component {
  constructor() {
    super();
    this.state = {
      opened: false
    };
  }

  render() {
    return (
      <div />
    );
  }
}

function postmyname() {

}

const Label = () => (
  <div>
    <h1>Label</h1>
    <button onClick={() => postMyName()} />
  </div>
);
```

```javascript
// flow

const name: string = 'name';

type User = {
  name: string
};

/**
 * @description fetchUserNames
 */
function fetchUserNames(): Promise<Array<string>> {
  return new Promise((resolve, reject) => {
    resolve([
      'hoge',
      'fuga'
    ]);
  });
```
