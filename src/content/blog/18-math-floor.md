---
title: Math.floor() Saved the Day
description: Math.floor() Saves the Day in My Pomodoro Timer
date: Nov 08 2024
---
I recently created a Pomodoro timer app. You can check it out [here](https://pr4j3sh.github.io/pomodoro/). It's a simple timer that follows the Pomodoro technique, cycling through work and break intervals:

- Work: 25 minutes
- Break: 5 minutes
- Long Break: 15 minutes

With four work sessions and three breaks, that's 100 minutes of work and 30 minutes of break time — a total of 1 hour and 40 minutes of focused productivity.

## Starting with `setInterval`

I initially used `setInterval` to manage the timing. The idea was simple: count down from 25 minutes to 0 for work and from 5 minutes to 0 for breaks, with a delay of 1000 milliseconds. Here's how that looked in code:

```javascript
let workTime = 25 * 60;
let breakTime = 5 * 60;
let currentPhase = "work";
let countdown;

function startTimer() {
  countdown = setInterval(() => {
    if (currentPhase === "work") {
      workTime--;
      updateDisplay(workTime);
    } else if (currentPhase === "break") {
      breakTime--;
      updateDisplay(breakTime);
    }
  }, 1000);
}
```

This worked fine until I tested the app on a real clock and realized something crucial — when the tab was in the background or minimized, the timer would stop. Browsers often pause JavaScript timers in inactive tabs to save memory, which meant my timer wouldn't run accurately when the user wasn't actively looking at it. 

## Moving to `setTimeout`

To solve this issue, I switched to `setTimeout`. This allowed me to manually call the timer functions with a delay of 1000ms. The idea was that when one interval (work or break) completed, I could trigger the next one with the right delay. This worked, but it still had some drawbacks, particularly with handling background tabs and managing the state of the timer. 

## Enter `requestAnimationFrame`

While searching for better alternatives, I came across `requestAnimationFrame` — and it was a game changer! Unlike `setInterval` or `setTimeout`, which rely on fixed time intervals, `requestAnimationFrame` syncs with the browser's refresh rate (usually 60fps). This made the timer run more smoothly, regardless of whether the tab was in the background or not.

Here’s how it works: `requestAnimationFrame` runs the function inside the callback repeatedly for each frame. The key here is that the timer doesn’t update every frame. Instead, it updates only when a second has passed, and this is where `Math.floor()` becomes incredibly useful.

## Why `Math.floor()` is Essential

`requestAnimationFrame` runs around 60 times per second (at 60fps). However, our goal is to update the timer every second, not every frame. To achieve this, we can use `Math.floor()` to round down the number of seconds that have passed. Here’s a snippet of how I used it:

```javascript
function updateTime() {
  if (paused) return;

  const now = Date.now();
  elapsedTime = now - startTime;

  if (currentPhase === "work") {
    remainingTime = workTime - elapsedTime;
    if (remainingTime <= 0) {
      playSound();
      cycleCount++;
      setElement(workSpan, cycleCount);
      currentPhase = cycleCount % 4 === 0 ? "longBreak" : "break";
      startTime = Date.now(); // Reset start time for the next phase
    }
  }

  const minutes = Math.floor(remainingTime / 60000); // Convert ms to minutes
  const seconds = Math.floor((remainingTime % 60000) / 1000); // Get the remaining seconds

  setMinutes(minutes);
  setSeconds(seconds);

  requestAnimationFrame(updateTime); // Update every frame, ensuring real-time progress
}
```

## How Does `Math.floor()` Help?

Since `requestAnimationFrame` runs at high frequencies (60 times per second), without `Math.floor()`, the timer would update every single frame, which could lead to unnecessary updates. The `Math.floor()` method ensures that the minutes and seconds are updated only when a full second has passed, and it rounds down the value to display only whole numbers.

For example, if you’re counting seconds, `Math.floor()` makes sure we don’t get 59.1, 59.2, etc. Instead, it will only show 59, and the display will update once it reaches a full second.

## Is `requestAnimationFrame` Heavy?

`requestAnimationFrame` is not heavy. It is, in fact, an optimized browser API designed specifically for smooth, high-performance animations and timers. It runs in sync with the display's refresh rate and does not consume resources unnecessarily when the page is inactive. Compared to `setInterval` and `setTimeout`, it provides smoother performance because it doesn't run in a separate thread or attempt to set fixed time intervals.

## Conclusion

By switching to `requestAnimationFrame` and using `Math.floor()` to manage the second updates, I was able to build a smooth and reliable Pomodoro timer that works seamlessly even in background tabs. This solution was much better than `setInterval` and `setTimeout`, allowing the timer to run based on actual time, independent of the browser’s tab focus or memory-saving strategies.

Give it a try in your own projects, and you'll see how well it works!

Feel free to visit the app and experience the Pomodoro timer in action: [Pomodoro Timer](https://pr4j3sh.github.io/pomodoro/)