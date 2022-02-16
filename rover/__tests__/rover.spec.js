import { Rover } from "../rover";
import each from "jest-each";

describe("rover movement", () => {
  each([
    ["N", 1, 3],
    ["E", 2, 2],
    ["S", 1, 1],
    ["W", 0, 2],
  ]).test(
    "should move rover forward",
    (initialDirection, expectedX, expectedY) => {
      const initialX = 1;
      const initialY = 2;
      const rover = new Rover(initialX, initialY, initialDirection);
      rover.move();
      expect([rover.x, rover.y, rover.direction]).toStrictEqual([
        expectedX,
        expectedY,
        initialDirection,
      ]);
    }
  );
  each([
    ["N", "L", "W"],
    ["W", "R", "N"],
    ["S", "L", "E"],
    ["E", "R", "S"],
  ]).test(
    "should turn rover left or right in place",
    (initialDirection, side, expectedDirection) => {
      const rover = new Rover(0, 0, initialDirection);
      rover.turn(side);
      expect(rover.direction).toBe(expectedDirection);
    }
  );
});
