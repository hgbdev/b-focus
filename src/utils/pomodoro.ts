export const TYPE_POMODORO = {
	POMODORO: "pomodoro",
	SHORT_BREAK: "short_break",
	LONG_BREAK: "long_break",
};

export const TIME_START = {
	POMODORO: 25 * 60,
	SHORT_BREAK: 5 * 60,
	LONG_BREAK: 15 * 60,
};

/* ------------------------------------ / ----------------------------------- */
type formatTimeTypes = {
	minutes: number;
	seconds: number;
};

export function formatTime(time: number): formatTimeTypes {
	let minutes = Math.floor(time / 60);
	let seconds = time - minutes * 60;
	return { minutes, seconds };
}

/* ------------------------------------ / ----------------------------------- */
export function countDown(currentTime: number): number {
	if (currentTime > 0) {
		return currentTime - 1;
	}
	return 0;
}

/* ------------------------------------ / ----------------------------------- */
export function getTimeStartNext(
	typePomodoro: string,
	{ POMODORO_TIME, SHORT_BREAK_TIME, LONG_BREAK_TIME }: any
) {
	if (typePomodoro === TYPE_POMODORO.POMODORO) {
		return TIME_START.POMODORO;
	} else if (typePomodoro === TYPE_POMODORO.SHORT_BREAK) {
		return TIME_START.SHORT_BREAK;
	} else {
		return TIME_START.LONG_BREAK;
	}
}
