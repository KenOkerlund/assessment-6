const  shuffle  = require('../src/shuffle')

// describe('shuffle should...', () => {
//   test("shuffle an array", () => {
//     // Arrange
//     const arr = [1,2,3,4];

//     // Act
//     const result = shuffle(arr);

//     // Assert
//     // expect(result).not.toBe(arr);
//     expect(result).toHaveLength(4)

//     //result = [1,1,4,3]
//     const allAreIncluded = arr.every( (number) => {
//       return result.includes(number);
//     })
//     expect(allAreIncluded).toEqual(true);
//   })
// })

describe('shuffle should...', () => {
  test("shuffle an array", () => {
    //arrange
    //make the array SUPER LONG so that it doesn't break by RNG
    const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    //act
    const result = shuffle(arr);
    //assert
    expect(result).toHaveLength(arr.length);
    //"1234" === "2143"
    const isSane = arr.join("") === result.join("")
    expect(isSane).toEqual(false)
  });
  test("have original values", () => {
    //arrange
    const arr = [1,2,3,4];
    //act
    const result = shuffle(arr)
    //assert
    const allAreIncluded = arr.every( (number) => {
      return result.includes(number);
    })
    expect(allAreIncluded).toEqual(true);
  })
  // test("shuffle an array TEST", () => {
  //   //arrange
  //   const arr = [1,2];
  //   const arr2 = [3,4];
  //   //act
  //   const result = shuffle(arr);
  //   const result2 = shuffle(arr2);
  //   //assert
  //   //"1234" === "2143"
  //   const isNotSane = arr.join("") !== result.join("")
  //   const isNotSane2 = arr2.join("") !== result2.join("")
  //   expect(isNotSane || isNotSane2).toEqual(true)
  // });
})

