import test from 'ava';
import {CLIEngine} from 'eslint';
import baseConfig from '../rules/base';
import reactConfig from '../rules/react';
import flowConfig from '../rules/flow';

reactConfig.parser = 'babel-eslint';
flowConfig.parser = 'babel-eslint';

const baseJs = `
import fs from 'fs';
import hoge from 'hoge';
import { fuga } from 'fuga';
import fuga from '../';
import piyo from './';

const test1 = 1;
const test2 = '2';
const obj   = {
  test1 : 1,
  test2 : 2,
  test13: 13
};

if (test1 == null) {
  alert('nope');
}

if (test2 === '2') {
  alert('yep');
}

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
`;

const reactJs = `
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
const Label = () => (
  <div>
    <h1>Label</h1>
    <button onClick={() => postMyName()} />
  </div>
);
`;

const flowJs = `
// @flow

const name: string = 'name';

type User = {
  name: string;
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
}
`;

function checkFailedRules(config, source) {
  const cli = new CLIEngine({
    useEslintrc: false,
    baseConfig: config
  });

  const linter = cli.executeOnText(source);

  return linter.results[0];
}

test('should return no errored at base', (t) => {
  const result = checkFailedRules(baseConfig, baseJs);

  t.is(result.errorCount, 0);
});

test('should return no errored at react', (t) => {
  const result = checkFailedRules(reactConfig, reactJs);

  t.is(result.errorCount, 0);
});

test('should return no errored at flow', (t) => {
  const result = checkFailedRules(flowConfig, flowJs);

  t.is(result.errorCount, 0);
});
