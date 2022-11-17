import read from './reader';
import json from './parser';
import GameSaving from './gameSaving.js';

export default class GameSavingLoader {

    static load() {
        return read()
          .then((data) => json(data))
          .then((response) => new GameSaving(JSON.parse(response)));
      }
}