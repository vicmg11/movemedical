import moment from 'moment';

export const isValidDate = (date) => {
	//validate date is not in the past
	const regexp = /^(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/;
	const res = regexp.test(date);
	if (!res) {
		return true;
	}
	const currentDate = moment(new Date()).format('MM-DD-YYYY');
	const givenDate = moment(new Date(date)).format('MM-DD-YYYY');
	if (givenDate < currentDate) {
		return true;
	}
	return false;
};

export const isValidTime = (currentDate, time) => {
	//validate time is not in the past
	const regexp = /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/;
	const res = regexp.test(time);
	if (!res) {
		return true;
	}

	let timeFormat = time.substring(6, 8);
  let hourFormat = time.substring(0, 2);
  if (hourFormat === '12' ) { hourFormat = '00'; }
  let newHour = timeFormat === 'AM' ? hourFormat : 12 + +hourFormat;
	let newTime = newHour + time.substring(2, 5);
	let compareDate1 = new Date(`${currentDate} ${newTime}`);
  let compareDate2 = new Date();
	if (compareDate1 < compareDate2) {
		return true;
	}
	return false;
};
