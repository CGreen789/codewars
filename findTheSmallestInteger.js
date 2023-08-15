// sort the array.sort((a, b) => a - b)

class SmallestIntegerFinder {
    findSmallestInt(args) {
      const ascArray = args.sort((a, b) => a - b)
      return ascArray[0]
    }
  }