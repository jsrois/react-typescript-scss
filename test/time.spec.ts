import {DefaultTimer} from "../src/components/Timer";

describe("A timer", () => {
  it("will count milliseconds", () => {
    jest
      .spyOn(global.Date, "now")
      .mockImplementationOnce(() =>
        new Date("2019-05-14T11:01:50.000Z").valueOf()
      )
      .mockImplementationOnce(() =>
        new Date("2019-05-14T11:01:51.200Z").valueOf()
      );
    const timer = new DefaultTimer();
    timer.start();
    expect(timer.elapsed()).toEqual(1200);
  });
});
