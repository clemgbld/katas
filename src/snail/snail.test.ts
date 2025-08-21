import { renderSnailTable } from "./snail";

describe("snail", () => {
  describe("error handling", () => {
    it("should throw an error when n is negative", () => {
      expect(() => renderSnailTable(-1)).toThrowError(
        "the input must be a positive integer"
      );
    });

    it("should throw an error when n is not an integer", () => {
      expect(() => renderSnailTable(3.7)).toThrowError(
        "the input must be a positive integer"
      );
    });
  });

  describe("table rendering", () => {
    it("should not render any table", () => {
      expect(renderSnailTable(0)).toEqual("");
    });

    it("should render the expected representation of snail as an html table", () => {
      expect(renderSnailTable(1)).toEqual(
        "<table border=1><tr><td>1</td></tr></table>"
      );
      expect(renderSnailTable(2)).toEqual(
        "<table border=1><tr><td>1</td><td>2</td></tr><tr><td>4</td><td>3</td></tr></table>"
      );
      expect(renderSnailTable(3)).toEqual(
        "<table border=1><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>8</td><td>9</td><td>4</td></tr><tr><td>7</td><td>6</td><td>5</td></tr></table>"
      );
      expect(renderSnailTable(4)).toEqual(
        "<table border=1><tr><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td>12</td><td>13</td><td>14</td><td>5</td></tr><tr><td>11</td><td>16</td><td>15</td><td>6</td></tr><tr><td>10</td><td>9</td><td>8</td><td>7</td></tr></table>"
      );
    });
  });
});
