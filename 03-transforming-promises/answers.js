/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    promise.then((value) => resolve(transformer(value)))
    .catch((err) => reject(err))
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return new Promise((resolve , reject) => {
    numberPromise.then((something) => {
      if (typeof(something) === "number") {
        resolve(something*something)
      }
      else if (isNaN(something)=== false){
        resolve(Number(something)*Number(something))
      }
      else {
        reject(`Cannot convert '${something}' to a number!`)
      }
    }).catch((err) => {
      reject(err)
    });
})}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(() => 0);
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return new Promise((resolve,reject) => {
    promise.then((value) => reject(value))
    .catch((err) => resolve(err));
  })
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};