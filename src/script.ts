class Helper {
  public static isOdd(number: number): boolean {
    return number % 2 != 0;
  }

  public static isEven(number: number): boolean {
    return number % 2 == 0;
  }

  public static getOddNumber(
    min: number = Number.MIN_SAFE_INTEGER,
    max: number = Number.MAX_SAFE_INTEGER
  ) {
    const result = this.randomInt(min, max);
    return this.isOdd(result) ? result : this.getOddNumber(min, max);
  }

  public static getEvenNumber(
    min: number = Number.MIN_SAFE_INTEGER,
    max: number = Number.MAX_SAFE_INTEGER
  ) {
    const result = this.randomInt(min, max);
    return this.isEven(result) ? result : this.getEvenNumber(min, max);
  }

  private static randomInt(
    min: number = Number.MIN_SAFE_INTEGER,
    max: number = Number.MAX_SAFE_INTEGER
  ): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
}

